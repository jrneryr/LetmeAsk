import { useNavigate } from 'react-router-dom'
import '../style/auth.css'
import { Button } from '../components/Button'
import {useContext} from 'react'
import {AuthContext} from '../App'

export function Home() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(AuthContext)

    function handleCreateRoom() {
        navigate('/rooms/new')
    }

    return (
        <div id="page_auth">
            <aside>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire duvidas de sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <button onClick={handleCreateRoom}>Crie sua sala com o Google</button>
                    <div className="line-separetor">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}