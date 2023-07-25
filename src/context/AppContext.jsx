import { createContext, useCallback, useState } from 'react';
import usersApi from './../assets/json/users_mock-databank.json';

export const AppContext = createContext();

export default function AppProvider({children}) {
  const [credentials, setCredentials] = useState();

  const addUser = useCallback((cred) => {
    const result = usersApi.find(user =>
      user.username.toLowerCase() === cred.toLowerCase() &&
      user.password === cred.password &&
      user.token === cred.token
    );
    if (result !== undefined) {
      setCredentials({...credentials, logged: true});
    }
  }, [credentials]);

  const removeUser = useCallback((cred) => {
    const exists = credentials.includes(user => (user.id === cred.id && !user.logged));
    if (exists) {
      setCredentials({});
    }
  }, [credentials]);

  return <AppContext.Provider value={{ credentials, addUser, removeUser }}>
    {children}
  </AppContext.Provider>;
}
