import React from 'react';
import { Menu, Button} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze'; 

export default function NavBar({ setFormOpen }) {
  const { authenticated } = useSelector((state) => state.auth);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='Navbar'>
      <div className='Navbar__leftSide'>
        <div className='Navbar__leftSide__links' id={showLinks ? 'hidden' : ''}>
          <NavLink exact to='/' className='Navbar__leftSide__links__nav'>
            <img
              src='/assets/logo01.png'
              alt='logo'
              className='Navbar__leftSide__links__nav__img'
            />
            ПРЕВОЗ
          </NavLink>
          <NavLink to='/about' className='Navbar__leftSide__links__nav'>
            За авторот
          </NavLink>
          <NavLink to='/events' className='Navbar__leftSide__links__nav'>
            Понуди
          </NavLink>
          {authenticated && (
            <Menu.Item as={NavLink} to='/createEvent'>
              <Button
                positive
                inverted
                content='Додај понуда'
                style={{ marginLeft: 15 }}
              />
            </Menu.Item>
          )}
        </div>
        <button onClick={() => setShowLinks(!showLinks)} className='Navbar__leftSide__btn'><DehazeIcon color='primary' fontSize='medium'/></button>
      </div>
      <div className='Navbar__rightSide'>
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </div>
    </div>
    );
}
