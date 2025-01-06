import React from 'react';
import './index.css';
import NavBar from './componet/NavBar/NavBar';
import Header from './componet/Header/Header';
import RowPost from './componet/RowPost/RowPost';
import { Action, Comedy, Horror, Originals, Romance, Trending, Documentaries } from './urls'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <RowPost url={Comedy} title="Comedy" />
      <RowPost url={Action} title="Action" isSmall />
      <RowPost url={Trending} title="Trending" isSmall />
      <RowPost url={Romance} title="Romance" isSmall />
      <RowPost url={Originals} title="Netflix Originals" isSmall />
      <RowPost url={Horror} title="Horror" isSmall />
      <RowPost url={Documentaries} title="Documentary" isSmall />

    </div>

  )

}
