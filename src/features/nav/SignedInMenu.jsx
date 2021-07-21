import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signOutFirebase } from '../../app/firestore/firebaseService';

export default function SignedInMenu() {
  const {currentUserProfile} = useSelector(state => state.profile);
  const history = useHistory();

  async function handleSignOut() {
    try {
      history.push('/');
      await signOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src={currentUserProfile?.photoURL || '/assets/user.png'} />
      <Dropdown pointing='top right' text={currentUserProfile?.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Направи понуда'
            icon='plus'
          />
          <Dropdown.Item as={Link} to={`/profile/${currentUserProfile?.id}`} text='Мој профил' icon='user' />
          <Dropdown.Item as={Link} to='/account' text='Моја сметка' icon='settings' />
          <Dropdown.Item
            onClick={handleSignOut}
            text='Одјави се'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
