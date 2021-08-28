// import { useState } from 'react'
import './App.css'
import FormAnime from './components/formAnimes/FormAnime';
// import animes from './services/Animes'
import ListarAnimes from './components/listarAnimes/ListarAnimes';

function App() {
  

  // const [anime, setAnime] = useState(animes);


  return (
    <div className="App">
      <h1>Animes</h1>
      <FormAnime/>
      <div className="bloco-card">
        <ListarAnimes/>

      </div>
    </div>
  )
}

export default App
