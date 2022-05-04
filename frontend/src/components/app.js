import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Links from "./Links"
import Game from "./Game"
import './game.scss'

const App = () => (
    <div className="app">
        {/* TODO -- different routes for landing page, game, and profile */}
        <Links />
        <Game />
    </div>
)

export default App;