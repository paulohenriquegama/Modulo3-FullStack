import React from 'react'
import Card from '../card/Card'
import Animes from '../../services/Animes'
import './listarAnimes.css'

const ListarAnimes = () => {
  const listar = Animes.map(anime => {
    return (
      <div key={anime.id}>
        <Card titulo={anime.nome} img={anime.img}/>
      </div>
    )
  })

  return listar
}

export default ListarAnimes
