import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Detail from "./Detail";
import Header from "./Header";
import Main from "./Main";
import MovieList from "./MovieList";

function Movies() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies/:id" element={<Detail />} />
        </Routes>
        
    </>
  );
}



export default Movies;