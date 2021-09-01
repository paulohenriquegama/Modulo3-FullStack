import React, {createContext, useState} from 'react'

export const AnimeContext = createContext();

const AnimeProvider = ({children}) => {
  const [animes,setAnimes] = useState([
    {
      id: 1,
      nome: 'Yu-Gi-Oh!',
      img: 'https://bit.ly/36Rbdvz'
    },
    {
      id: 2,
      nome: 'Bleach',
      img: 'https://bit.ly/3BiuyUF'
    },
    {
      id: 3,
      nome: "JoJo's Bizarre Adventure",
      img: 'https://bit.ly/3BlaYXM'
    },
    {
      id: 4,
      nome: 'Demon Slayer: Kimetsu no Yaiba',
      img: 'https://bit.ly/2UuF0rv'
    },
    {
      id:5,
      nome:"Dr. STONE",
      img:'https://bit.ly/3xTDL3n',
    },
    {
      id:6,
      nome:"One-Punch Man",
      img:'https://bit.ly/2UYLeQr',
    },
    {
      id:7,
      nome:"Naruto",
      img:'https://bit.ly/3sIixnD',
    },
    {
      id:8,
      nome:"Dragon Ball Super",
      img:'https://bit.ly/38qaaUt',
    }
  ])
  const saveAnime = anime => {
    const newAnime = {
      id: animes.length +1,
      nome: anime.nome,
      img: anime.img
    }
    setAnimes([
      ...animes,
      newAnime
    ])
  }

  const updateAnime = anime => {
    const newAnime = {
      nome: anime.nome,
      img: anime.img
    }
    setAnimes([
      ...animes,
      newAnime
    ])
  }

  return (
    <AnimeContext.Provider value={{animes, saveAnime, updateAnime}}>
      {children}
    </AnimeContext.Provider>
  )
}

export default AnimeProvider;