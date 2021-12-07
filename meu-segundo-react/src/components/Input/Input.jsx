//Consumir uma api e fazer os dados aparecerem na tela quando a tela for carregada
import { useState, useEffect } from 'react'

function Input() {
    const [repositorios, setRepositorios] = useState([])
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/dardaniacoimbra/repos')
        .then(resposta => resposta.json())
        .then(dados => setRepositorios(dados))
    }, [])

    useEffect(() => {
        setFiltro(
            repositorios.filter(repositorios => {
                return repositorios.name.includes(busca)
            })
        )
    }, [repositorios, busca])

    return(
        <div>
            <input 
            placeholder="Digite Repos" 
            onChange={e => {setBusca(e.target.value)}} 
            />
            {filtro.map(repo => 
                <div>
                    <h2>{repo.name}</h2>
                </div>
            )}
        </div>
    )

}

export default Input