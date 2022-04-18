import React from 'react';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import './App.css';
import { movieApi, Movie } from "./store";

function MovieApp() {
  return (
    <div className="App">
      <div className="MovieApp">
        This is the movieapp
      </div>
    </div>
  );
}

function App() {
  return (
    <ApiProvider api={movieApi}>
      <MovieApp />
    </ApiProvider>
  );
}


export default App;
