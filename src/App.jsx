import { Suspense, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./App.css";
import Countries from "./components/Countries/Countries.jsx";
import Sidebar from "./components/Sidebar.jsx";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState(null);

  return (
    <div className="App">
      <FaBars className="barIcon" onClick={() => setShowSidebar(true)} />

      <div
        className={`overlay ${showSidebar ? "show" : ""}`}
        onClick={() => setShowSidebar(false)}
      />

      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />

      <div className="page-header">
        <h1>🌍 World on the Go</h1>
        <p className="subtitle">Explore every corner of the planet</p>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Countries
          countriesPromise={countriesPromise}
          selectedContinent={selectedContinent}
        />
      </Suspense>
    </div>
  );
}

export default App;
