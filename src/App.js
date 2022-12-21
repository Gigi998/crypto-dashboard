import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components";
import { Home, AllNFT, Error, AllTransactions } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nft" element={<AllNFT />} />
        <Route path="transactions" element={<AllTransactions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
