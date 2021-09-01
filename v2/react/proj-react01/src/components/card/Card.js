import './card.css'

const Card = props => {
  return (
    <div className="card">
      <div className="card-titulo">
        <h3>{props.titulo}</h3>
      </div>
      <div className="card-img">
        <img src={props.img} alt={props.titulo} />

      </div>
      <div className="card-button">
        <button onClick={() => console.log("ID = ",props.idAnime)}>Visualizar</button>
      </div>
    </div>
  )
}

export default Card
