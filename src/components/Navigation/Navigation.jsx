import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TiContacts } from 'react-icons/ti';
import Loader from '../Loader';
import { StyledNavLink, Header, Nav, ChangeColor } from './Navigation.styled';

function Navigation() {
  return (
    <>
      <Header>
        <Nav>
          <ChangeColor>
            <TiContacts style={{ width: 80, height: 80, marginRight: 20 }} />
          </ChangeColor>
          <StyledNavLink to="/">Phonebook</StyledNavLink>
          <StyledNavLink to="contacts">Contacts</StyledNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;
