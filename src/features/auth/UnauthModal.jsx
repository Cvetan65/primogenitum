import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Divider } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';

export default function UnauthModal({ history, setModalOpen }) {
  const [open, setOpen] = useState(true);
  const { prevLocation } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleClose() {
    if (!history) {
      setOpen(false);
      setModalOpen(false);
      return;
    }
    if (history && prevLocation) {
      history.push(prevLocation.pathname);
    } else {
      history.push('/events');
    }
    setOpen(false);
  }

  function handleOpenLoginModal(modalType) {
      dispatch(openModal({modalType}));
      setOpen(false);
      setModalOpen(false);
  }

  return (
    <Modal open={open} size='mini' onClose={handleClose}>
      <Modal.Header content='Треба да си најавен за да влезиш во опцијата' />
      <Modal.Content>
        <p>
          Ве молиме најавете се или регистрирајте се за ја видите содржината
        </p>
        <Button.Group widths={4}>
          <Button
            fluid
            color='teal'
            content='Најави се'
            onClick={() => handleOpenLoginModal('LoginForm')}
          />
          <Button.Or />
          <Button
            fluid
            color='green'
            content='Регистирај се'
            onClick={() => dispatch(openModal({ modalType: 'RegisterForm' }))}
          />
        </Button.Group>
        <Divider />
        <div style={{ textAlign: 'center' }}>
          <p>Илил притисни Откажи за да продолжиш како гостин</p>
          <Button onClick={handleClose} content='Откажи' />
        </div>
      </Modal.Content>
    </Modal>
  );
}
