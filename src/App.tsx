import {createContext, useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'

export const AuthContext = createContext({} as any)

function App() {
  const [user, setUser] = useState({
    id: 'user_test_id',
    name: 'Junior'
  })

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{user, setUser}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
       </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;