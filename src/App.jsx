import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import RequestServices from "./components/RequestServices";

const About = () => <h1>About Page</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use element prop to render components */}
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestServices />} />
      </Routes>
    </BrowserRouter>
  );
}
