import api from '../../services/api'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {toast} from "react-toastify"

export default function Filme() {
  const { id } = useParams()
  const [filme, setFilme] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory() // Para navegação interativa

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(`r-api/?api=filmes/${id}`)
      if(response.data.length === 0) {
        history.replace("/")
        return;
      }
      setFilme(response.data)
      setLoading(false)
    }
    loadFilmes()
  }, [id])

  if (loading) {
    return (
      <div>
        <h1>Carregando filme...</h1>
      </div>
    )
  }

  function salvaFilme() {
    const minhaLista = localStorage.getItem('filmes')
    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some(filmeSalvo => filmeSalvo.id === filme.id)

    if (hasFilme) {
      toast.error('Filme já está na sua lista!')
      return
    }
    filmesSalvos.push(filme)
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
    alert('Filme salvo com sucesso!')
  }

  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
    toast.success("Filme excluido com sucesso");
  }


  return (
    <div>
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome}></img>
      <h3>Sinopse</h3>
      {filme.sinopse}


      <div className="botoes">
        <button onClick={salvaFilme}>
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}
