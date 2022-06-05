import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
// import Setup from './Pages/Setup'

const Home = () => (<div>Holaaa</div>)

function render() {
  ReactDOM.render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>, document.body);
}

render();


const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
    
  );