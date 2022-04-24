import {Link} from 'react-router-dom'
import '../style/auth.css'
import { Button } from "../components/Button"
import {useContext} from 'react'
import { AuthContext } from '../App'

export function NewRoom() {
    const {user, setUser} = useContext(AuthContext)
    return (
        <div id="page_auth">
            <aside>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire duvidas de sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <h1>{user.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar numa sala existente? <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}