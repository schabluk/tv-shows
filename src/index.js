import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SWRConfig as Fetcher } from 'swr'

import fetcher from './fetcher'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LayoutDesktop from './layout/LayoutDesktop'
import LayoutMobile from './layout/LayoutMobile'
import Movies from './screens/Movies'
import Show from './screens/Show'
import Placeholder from './screens/Placeholder'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import useScreenQuery from './hooks/useScreenQuery'
import './styles.css'

const movies = [
  { path: 'batman', label: 'Batman' },
  { path: 'superman', label: 'Superman' },
  { path: 'hulk', label: 'Hulk' },
  { path: 'spider-man', label: 'Spider-Man' },
  { path: 'avengers', label: 'Avengers' }
]

function App() {
  const desktop = useScreenQuery()

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {desktop ? (
          <Route path="movies" element={<LayoutDesktop movies={movies} />}>
            <Route path="/" element={<Placeholder />} />
            <Route path=":title" element={<Movies />}>
              <Route path="/" element={<Placeholder />} />
              <Route path="show/:id" element={<Show />} />
            </Route>
          </Route>
        ) : (
          <Route path="movies" element={<LayoutMobile />}>
            <Route path="/" element={<Sidebar items={movies} />} />
            <Route path=":title" element={<Movies />} />
            <Route path=":title/show/:id" element={<Show />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Fetcher value={{ fetcher }}>
      <Router>
        <App />
      </Router>
    </Fetcher>
  </React.StrictMode>,
  document.getElementById('root')
)
