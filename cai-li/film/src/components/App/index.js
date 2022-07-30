import FilmLibrary from "../FilmLibrary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import NotFoundPage from "../NotFoundPage";
import FilmDetail from "../FilmDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/films" element={<FilmLibrary />} >
          <Route path=":filmID" element={<FilmDetail />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
