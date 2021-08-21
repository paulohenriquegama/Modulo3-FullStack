import {Link} from "react-router-dom";
import './Header.css'

export default function Header() {

  return (
    <header className="header">
      <Link className="logo" to="/">
        PHFilmes
      </Link>
      <Link className="favoritos" to="/">Favoritos</Link>
    </header>
  )

}