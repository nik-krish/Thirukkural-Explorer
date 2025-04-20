import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import KuralForm from "./components/KuralForm";
import KuralDisplay from "./components/KuralDisplay";

import "./App.css";

function App() {
  const [kuralNo, setKuralNo] = useState("");
  const [kuralData, setKuralData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchKural(kuralNo);
  };

  const fetchKural = async (num) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/kural/${num}`);
      if (!response.ok) throw new Error("Error fetching the Kural data.");
      const data = await response.json();
      setKuralData(data.kural[0]);
      setError("");
    } catch (err) {
      setError("Error fetching the Kural data.");
      setKuralData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header
        kuralNo={kuralNo}
        setKuralNo={setKuralNo}
        handleSubmit={handleSubmit}
      />

      <div className="content-area">
        {error && <div className="error">{error}</div>}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          kuralData && (
            <KuralDisplay
              kuralData={kuralData}
              onPrevious={() => {
                if (parseInt(kuralNo) > 1) {
                  const prevNo = String(parseInt(kuralNo) - 1);
                  setKuralNo(prevNo);
                  fetchKural(prevNo);
                }
              }}
              onNext={() => {
                if (parseInt(kuralNo) < 1330) {
                  const nextNo = String(parseInt(kuralNo) + 1);
                  setKuralNo(nextNo);
                  fetchKural(nextNo);
                }
              }}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
