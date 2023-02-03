import { Route, Routes, Navigate } from "react-router-dom";

import PokemonListPage from "./pages/PokemonListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pages/1" />} />
      <Route path="/pages/:page" element={<PokemonListPage />} />
    </Routes>
  );
}

export default App;
