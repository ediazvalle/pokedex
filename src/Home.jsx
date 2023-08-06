import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div class="home-container">
        <h1>Every Pokemon listed in one Pokedex!</h1>
        <p></p>
        <Link to="pokemon">Search for a Pokemon!</Link>
    </div>
  )
}
