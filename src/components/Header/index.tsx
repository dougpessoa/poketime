import React, { useState, FormEvent, useEffect } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';

import Cart from './Cart';

import { 
  Container, 
  Content,
  Logo, 
  Form,
  Search,
  SearchIcon,
  CartIcon
} from './styles';

import logoImage from '../../assets/images/logo-poketime.png';

const Header: React.FC = () => { 
  const { pathname } = useLocation();
  const history  = useHistory();
  const [cartIsDisplayed, setCartIsDisplayed] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function search(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if(!query) return;

    let queryToURL = query.toLowerCase();

    if(/\s/g.test(queryToURL)) {
      queryToURL = queryToURL.replace(/\s/g, "-");
    }

    history.push(`/pokemon/${queryToURL}`);
  }
  
  return (
    <Container>
      <Content>
      <Link to="/">
        <Logo src={logoImage} />
      </Link>

      <Form onSubmit={search}>
        <Search> 
          <input 
            type="text"
            placeholder="Que Pokémon você procura hoje?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            data-testid="search"
          />
          <button 
            type="submit"
            data-testid="submit"
          >
            <SearchIcon />
          </button>
        </Search>
      </Form>
      <div>
        <Link to="/pedidos"><span data-testid="orders-page">Pedidos</span></Link>
        <CartIcon data-testid="icon-cart" onClick={() => setCartIsDisplayed(cartIsDisplayed ? false : true)}  />
      </div>

      { cartIsDisplayed && <Cart closeCart={() => setCartIsDisplayed(false)} /> }
      </Content>
    </Container>
  );
}

export default Header;