import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { loadPokemon } from '../../utils/loadPokemon';
import DetailProduct from '../../components/DetailProduct';
import Product from '../../components/Product';
import Loader from '../../components/Loader';

import { 
  Container,
  Content,
  OtherProducts,
  UnknownPokemon,
  Loading
} from './styles';

import IPokemonProps from '../../interfaces/IPokemonProps';

const ProductInfo: React.FC = () => {
  const { param } = useParams();

  const [pokemon, setPokemon] = useState<IPokemonProps[]>([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [cashback, setCashback] = useState(0);
  const [installment, setInstallment] = useState('');
  const [id, setId] = useState(0);

  const [wasLoadedPokemon, setWasLoadedPokemon] = useState(false);
  const [wasLoadedInfo, setWasLoadedInfo] = useState(false);
  const [havePokemon, setHavePokemon] = useState(false);

  const loadSearchedPokemon = useCallback( async (param: string): Promise<void> => {
    await api.get(`/pokemon/${param}`)
      .then((response) => {
        setWasLoadedInfo(true);
        const res = response.data;

        let isFire = false;
        const types = res.types;

        for (let i = 0; i < types.length; i++) {
          const name = types[i].type.name; 
          if(name === "psychic"){
            isFire = true;
          };
        }

        if(!isFire) {
          setHavePokemon(false);
          return
        }

        const price = Number(Math.random() * 100);
        const installmentAmount = (price / 12).toFixed(2).replace(".", ",");
        const cashback = price * 0.05;

        setCashback(cashback);
        setId(res.id);
        setName(res.name);
        setImage(res.sprites.front_default);
        setPrice(price);
        setInstallment(installmentAmount);
        setHavePokemon(true);
      })
      .catch((err) => {
        setHavePokemon(false);
        setWasLoadedInfo(true);
      })
  }, []);

  const autoLoadPokemon = useCallback( async () => {
    const response = await loadPokemon(3);

    setWasLoadedPokemon(true);
    setPokemon(response);
  }, []);

  useEffect(() => {
    loadSearchedPokemon(param);
    autoLoadPokemon();
  }, [param, autoLoadPokemon, loadSearchedPokemon]);

  return ( 
    <Container>
      <Content>
        {
          !wasLoadedInfo 
          ? <Loading>
              <Loader /> 
            </Loading>
          
          : havePokemon 
            ? <DetailProduct
                id={id}
                name={name}
                image={image}
                price={price}
                installment={installment}
                cashback={cashback}
              />
            
            : <UnknownPokemon>
                <h3>Puxa!</h3>
                <h5>Não encontramos o que você procurava!</h5>
              </UnknownPokemon>
        }
    
        <OtherProducts>
          <h3>Outros que você possa curtir</h3>

          <div className="others">
          {
            !wasLoadedPokemon
            ? <Loading>
               <Loader /> 
              </Loading> 
            
            : pokemon.map((pokemon) => (
              <Link to={`/pokemon/${pokemon.name}`}>
                <Product
                  id={pokemon.id} 
                  name={pokemon.name}
                  image={pokemon.image}
                  price={pokemon.price}
                  installmentAmount={pokemon.installmentAmount}
                  key={pokemon.id}
                  isProductInfo
                />
              </Link>
            ))
          }
          </div>
        </OtherProducts>
      </Content>
    </Container>
  );
}

export default ProductInfo;