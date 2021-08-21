
import './App.css';

import React, { useState } from 'react'

export default function App() {
    const [alunos,setAlunos] = useState( [{nome:"Paulo"},{nome:"Matheus"},{nome:"Marcos"},{nome:"João"}]);
    const [text, setText] = useState("")

    const listAluno = alunos.map((a) =>{
      return (
      <div className="bloco-card-list">
        <div className="card-list">
          <label for="checkAlunos">{a.nome}</label>
          <input type="checkbox" id="checkAlunos" name="checkAlunos" value={a.nome}></input>
        </div>
      </div>
      )
    }
    
    )

    function addAluno(){
      setAlunos([
        {nome:text},...alunos])
      setText("")
    }
    console.log(text);

    return (
      <body>

        <div className="container">
          <header>
            <h2>Lista de Chamada Blue</h2>
            <div className="bloco-input">
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Adicione um novo aluno"></input>
                <img type="submit" onClick={addAluno} src="https://bit.ly/3xt96Jk" alt="adicionar"></img>
            </div>
          </header>
          <div className="bloco-list">
            {listAluno}
          </div>
        </div>
        
      </body>
    )
  
}
