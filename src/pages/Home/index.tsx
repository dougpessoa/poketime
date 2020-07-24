import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Product from '../../components/Product';
import Loader from '../../components/Loader';

import { loadPokemon } from '../../utils/loadPokemon';

import { 
  Container,
  Cover,
  Content,
} from './styles';

import IPokemonProps from '../../interfaces/IPokemonProps';

const Home: React.FC = () => {
  const [wasLoaded, setWasLoaded] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemonProps[]>([]);

  const autoLoadPokemon = useCallback( async () => {
    const response = await loadPokemon(12);
    
    setWasLoaded(true);
    setPokemon(response);
  }, []);

  useEffect(() => {
    autoLoadPokemon();
  }, [autoLoadPokemon]);

  return (
    <Container>
      <div className="content">
      <Cover />
      <Content data-testid="content-home"> 
        {
          wasLoaded 
            ? Array.isArray(pokemon) && pokemon.map((pokemon) => (
                <Link to={`/pokemon/${pokemon.name}`}>
                  <Product
                    id={pokemon.id} 
                    name={pokemon.name}
                    image={pokemon.image}
                    price={pokemon.price}
                    installmentAmount={pokemon.installmentAmount}
                    key={pokemon.id}
                    isProductInfo={false}
                  />
                </Link>
              )) 
            :  <Loader />
        }
      </Content>
      </div>
    </Container>
  );
}

export default Home;