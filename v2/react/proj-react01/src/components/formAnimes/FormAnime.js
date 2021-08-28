import React, { useState } from 'react'
import Animes from '../../services/Animes'
import './formAnime.css'

export default function FormAnime() {
  const [anime, setAnime] = useState([])
  const [nome, setNome] = useState('')
  const [img, setImg] = useState('')

  const handleSubmit = e => {
    console.log(Animes)
    e.defaultPrevented()
    const id = Animes.length + 1
    // if (!nome){
    //   return;
    // }
    setAnime([
      ...anime,
      {
        id: id,
        nome: nome,
        img: img
      }
    ])
  }

  return (
    <div className="bloco-form">
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <br />
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={e => {
            setNome(e.target.value)
          }}
        ></input>
        <br />
        <label>Imagem URL:</label>
        <br />

        <input
          type="text"
          id="id"
          value={img}
          onChange={e => {
            setImg(e.target.value)
          }}
        ></input>
        <br />
        <button type="submit">Salvar</button>
      </form>
      
    </div>
  )
}
