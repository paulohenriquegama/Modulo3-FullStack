import { useState } from 'react'
import './App.css'
import FormAnime from './components/formAnimes/FormAnime'
// import animes from './services/Animes'
import ListarAnimes from './components/listarAnimes/ListarAnimes'
import AnimeProvider from './contexts/animeContext'

function App() {
  const [showForm,setShowForm] = useState(false)

  return (
    <div className="App">
      <AnimeProvider>
        <header>
          <h1>Animes</h1>
          <button className="btn-show"onClick={() => setShowForm(!showForm)}>{showForm ?"-" :"+"}</button>
          {showForm ? <FormAnime />: null}

        </header>
        <div className="bloco-card">
          <ListarAnimes />
        </div>
      </AnimeProvider>
    </div>
  )
}

export default App
