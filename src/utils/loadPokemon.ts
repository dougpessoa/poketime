import api from '../services/api';

import IPokemonProps from '../interfaces/IPokemonProps';

interface PokemonResults {
  pokemon: {
    name: string;
    url: string;
  }
}

interface PokemonInfo {
  name: string;
  sprites: {
    front_default: string;
  }
}

async function catchInfoPokemon(data: PokemonResults[], quantity: number): Promise<IPokemonProps[]> {
  const ArrayPokemon: IPokemonProps[]  = [];

  for (let i = 0; i < quantity; i++) {
    const { pokemon } = data[i];
    
    const info = pokemon.url.split('/');

    const id = Number(info[info.length - 2]);

    await api.get<PokemonInfo>(`/pokemon/${id}`)
      .then((response) => {
        const { name, sprites } = response.data;

        const image = sprites.front_default;

        const price = Number(Math.random() * 100);

        const installmentAmount = (price / 10).toFixed(2).replace(".", ",");

        ArrayPokemon.push({
          id,
          name,
          image,
          price,
          installmentAmount
        });
      })
  }

  return ArrayPokemon;
}

async function loadPokemon(quantity: number) {
  const response = await api.get('/type/14/')
  
  const ArrayPokemon = await catchInfoPokemon(response.data.pokemon, quantity);

  return ArrayPokemon;
}

export { loadPokemon };