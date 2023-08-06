import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function PokemonLayout() {
    return (
        <>
            <nav className="host-nav">
                <Link to="/host">Pokemon</Link>
                <Link to="/host/abilities">Abilities</Link>
                <Link to="/host/moves">Moves</Link>
                <Link to="/host/stats">Stats</Link>
            </nav>
            <Outlet />
        </>
    )
}