import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components";
import { Home, AllNFT, Error, AllCrypto, Favorites } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="crypto" element={<AllCrypto />} />
        <Route path="nft" element={<AllNFT />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
