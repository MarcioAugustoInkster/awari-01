import { fireEvent, render, screen } from '@testing-library/react';
import UserTable from './UserTable';
import usuariosMock from '../../assets/json/usuarios-mock.json';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Users Component', () => {
  it('should render correctly', () => {
    render(
      <Router>
        <UserTable item={usuariosMock.usuarios} />
      </Router>
    );
    expect(screen.getByTestId('user-table')).toBeInTheDocument();
  });

  it('should render items correctly', () => {
    render(
      <Router>
        <UserTable item={usuariosMock.usuarios} />
      </Router>
    );
    expect(screen.getByTestId('user-table').children[1].children.length).toEqual(10);
  });

  it('should remove item on button click', async () => {
    render(
      <Router>
        <UserTable item={usuariosMock.usuarios} />
      </Router>
    );
    const deleteButton = await screen.queryByTestId('btn-delete_30');
    await fireEvent.click(deleteButton);
    expect(deleteButton).toBeTruthy();
  });

  it('should display details on button click', async () => {
    render(
      <Router>
        <UserTable item={usuariosMock.usuarios} />
      </Router>
    );
    const detailButton = await screen.queryByTestId('btn-detail_30');
    await fireEvent.click(detailButton);
    expect(detailButton).toBeTruthy();
  });
});
