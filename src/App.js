import { BrowserRouter, Routes, Route} from "react-router-dom";

// pages
import { About, Create, Home, TenderResult } from "./components";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/result" element={<TenderResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
