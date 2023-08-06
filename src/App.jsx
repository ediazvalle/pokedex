import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PokemonList from './PokemonList';
import Pagination from "./pagination";
import Home from './Home';
import About from './About';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState(["https://pokeapi.co/api/v2/pokemon"])
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setLoading(true)
      let cancel
      axios.get(currentPage, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        setPokemon(res.data.results.map(pokemon => pokemon.name))
      })

      return () => cancel()
  }, [currentPage])

  function gotoNextPage() {
    setCurrentPage(nextPage)
  }

  function gotoPrevPage() {
    setCurrentPage(prevPage)
  }

  if (loading) return "Loading..."

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />} />
            <Route path="pokemon" element={<PokemonList pokemon={pokemon} />} />
            <Route path="pokemon/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
          {/* <PokemonList pokemon={pokemon} />
          <Pagination
            gotoNextPage={nextPage ? gotoNextPage : null}
            gotoPrevPage={prevPage ? gotoPrevPage : null}
          /> */}
    </>
  )
}

export default App
