import React, { useEffect, useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    // "Pagar conta de luz",
    // "Estudar React Hooks",
    // "Fazer troca de óleo da moto",
    // "Pagar conta de agua", 
  ]);

  const [titulo, setTitulo] = useState("To Do Lista");
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("Tarefas",JSON.stringify(tarefas))
  }, [tarefas])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas")
    setTarefas(JSON.parse(tarefasStorage))
  }, [])

  function handleAdd(){
    setTarefas([...tarefas,input]);
    setInput("");
  }

  return(
    <div>
      <h1>{titulo}</h1>
      <ul>
        {tarefas.map((tarefas) => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>

      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );

}

export default App;