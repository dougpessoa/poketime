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

interface IPokemonInfo {
  id: number;
  name: string;
  image: string;
  price: number;
  installment: string;
  cashback: number;
}

const ProductInfo: React.FC = () => {
  const { param } = useParams();

  const [pokemon, setPokemon] = useState<IPokemonProps[]>([]);
  
  const [info, setInfo] = useState<IPokemonInfo>({
    id: 0,
    name: "",
    image: "",
    price: 0,
    cashback: 0,
    installment: ""
  });

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

        setInfo({
          id: res.id,
          name: res.name,
          image: res.sprites.front_default,
          price: price,
          cashback: cashback,
          installment: installmentAmount
        });

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
                id={info.id}
                name={info.name}
                image={info.image}
                price={info.price}
                installment={info.installment}
                cashback={info.cashback}
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