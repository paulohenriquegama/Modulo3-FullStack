import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      console.log(response.data)
      setFilmes(response.data)
    }

    loadFilmes();
  }, [])

  return (
    <div className="app">
      <div>
        {filmes.map(filme => {
          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome}></img>
              <Link to={`/filmes/{filme.id}`} />
            </article>
          )
        })}
      </div>
    </div>
  )
}
