
import React from 'react'
import { Switch, Route } from "react-router-dom"
import Homepage from "./Components/HomePage"
import ViewCard from "./Components/ViewCard"
import './App.css'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/:id" component={ViewCard} />
      </Switch>      
    </div>
  )
}

export default App