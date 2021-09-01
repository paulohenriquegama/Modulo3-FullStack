import React, { useContext } from 'react'
import Card from '../card/Card'
// import Animes from '../../services/Animes'
import './listarAnimes.css'
import { AnimeContext } from '../../contexts/animeContext'

const ListarAnimes = () => {
  const context = useContext(AnimeContext);

  const data = context.animes.map(anime => {
    return (
      <div key={anime.id}>
        <Card titulo={anime.nome} img={anime.img} idAnime={anime.id} />
      </div>
    )
  })

  return (
    <div className="bloco-card">
      {data}
    </div>
  )
}

export default ListarAnimes
