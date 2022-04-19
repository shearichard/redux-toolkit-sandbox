import React from 'react';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import './App.css';
import { movieApi, Movie, MoviePayload } from "./store";

function MovieApp() {
  const { data , error, isLoading } = movieApi.useGetAllQuery();

  return (
    <div className="App">
      <div className="MovieApp">
        <h1>This is the movieapp</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>An Error Occurred</p>}
        {data && data.movies && (
          <ul>
          {data.movies.map((movie) => (
            <li key={movie.id}>
              {movie.id} - {movie.film}
            </li>
          ))}
          </ul>
        )} 
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
