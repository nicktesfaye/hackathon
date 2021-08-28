import TextEditor from "./TextEditor"
import { v4 as uuidV4 } from "uuid"
import {useEffect, useState } from "react"
import { io } from "socket.io-client"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

  


 

function App() {


  var newURL = window.location.pathname
  console.log(newURL)


  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>

      </Switch>
      <div className="buttons">

        <form method="GET" action={newURL}>
      <button className="button">previous</button>
      </form>

      <form method="GET" action={"/"}>
    <button className="button" type="submit">new Slide</button>
      </form>

      <form method="GET" action={newURL} >
      <button className="button">next</button>
      </form>
      
      </div>
    </Router>
  )
}

export default App