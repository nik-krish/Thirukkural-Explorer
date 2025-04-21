import React from "react";
import KuralForm from "./KuralForm";
import "../styles/Header.css";

const Header = ({ kuralNo, setKuralNo, handleSubmit }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="/fav.jpg" alt="Thirukkural Logo" className="logo" />
          <h1>திருக்குறள் - THIRUKKURAL</h1>
        </div>
        <div className="search-container">
          <KuralForm
            kuralNo={kuralNo}
            setKuralNo={setKuralNo}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
