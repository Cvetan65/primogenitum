import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Calendar } from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setStartDate } from '../eventActions';

export default function EventFilters({  loading }) {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  const {filter, startDate} = useSelector(state => state.event)
  return (
    <>
      {authenticated && (
        <Menu vertical size='large' style={{ width: '100%' }}>
          <Header icon='filter' attached color='teal' content='Филтрирај' />
          <Menu.Item
            content='Сите понуди'
            active={filter === 'all'}
            onClick={() => dispatch(setFilter('all'))}
            disabled={loading}
          />
          <Menu.Item
            content='Одам '
            active={filter === 'isGoing'}
            onClick={() => dispatch(setFilter('isGoing'))}
            disabled={loading}
          />
          <Menu.Item
            content='Мои понуди'
            active={filter === 'isHost'}
            onClick={() => dispatch(setFilter('isHost'))}
            disabled={loading}
          />
        </Menu>
      )}
      <Header icon='calendar' attached color='teal' content='Избери датум' />
      <Calendar
        onChange={(date) => dispatch(setStartDate(date))}
        value={startDate || new Date()}
        tileDisabled={() => loading}
      />
    </>
  );
}
