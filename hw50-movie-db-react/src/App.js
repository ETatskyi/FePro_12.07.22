import './App.css';
import { Routes, Route } from 'react-router-dom';

import BasicLayout from "./routes/BasicLayout";
import Home from "./routes/Home";
import MovieDetailsPage from "./routes/DetailsPage";
import SearchResultsPage from "./routes/SearchResultsPage";
import Error from "./routes/Error";

function App() {
  return (

    <Routes>
      <Route path={"/"} element={<BasicLayout />} >

        <Route index element={<Home />} />

        <Route path={"/details/:movieId"} element={<MovieDetailsPage />} />

        <Route path={"/search/:query"} element={<SearchResultsPage />} />

        <Route path={"*"} element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
