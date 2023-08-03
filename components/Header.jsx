import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">Ed's Pokedex</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/pokemon">Pokemons</Link>
            </nav>
        </header>
    )
}