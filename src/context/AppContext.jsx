import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppProvider({children}) {
  const [credentials, setCredentials] = useState({
    user: 'Marcio90',
    email: 'marcio90@email.com',
    access: ['admin', 'employee'],
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hcmNpbzkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.zvJeomvoxrFF3qwsi82QPCr4-mhqZm_KYXGZo_smHs0',
    logado: true
  });

  return <AppContext.Provider value={{ credentials, setCredentials }}>
    {children}
  </AppContext.Provider>;
}
