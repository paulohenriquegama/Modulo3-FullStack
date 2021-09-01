import React, { useState, useContext } from 'react'
// import Animes from '../../services/Animes'
import './formAnime.css'
import { AnimeContext } from '../../contexts/animeContext'

export default function FormAnime(props) {
  const {saveAnime} = useContext(AnimeContext)

  const [anime, setAnime] = useState()
  
  function handleSubmit(e) {
    e.preventDefault()
    saveAnime(anime);
  }
  
  function limpar(){
    document.getElementById('form').reset()
  }
  
  
  return (
    <div className="bloco-form">
      <form onSubmit={handleSubmit} id="form">
        <label>Nome:</label>
        <br />
        <input
          type="text"
          id="nome"
          // value={anime[1].nome}
          onChange={ (e) => {
            setAnime({
              ...anime,
              nome: e.target.value,
              
            })
            
          }}
        ></input>
        <br />
        <label>Imagem URL:</label>
        <br />

        <input
          type="text"
          id="id"
          
          onChange={ (e) => {
            setAnime({
              ...anime,
              img: e.target.value,
            })
          } }
        ></input>
        <br />
        <button className="btn-padrao"onClick={limpar}>Salvar</button>
        
      </form>
      
    </div>
  )
}
