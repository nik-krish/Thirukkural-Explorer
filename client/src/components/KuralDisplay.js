import React, { useState } from "react";
import "../styles/KuralDisplay.css";

function KuralDisplay({ kuralData, onPrevious, onNext }) {
  const [activeTab, setActiveTab] = useState("translation");

  if (!kuralData) {
    return null;
  }

  const tabs = [
    { id: "translation", label: "Translation" },
    { id: "tamil", label: "Tamil Explanation" },
    { id: "meaning", label: "Meaning Key" },
    { id: "couplet", label: "Couplet" },
    { id: "transliteration", label: "Transliteration" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "translation":
        return (
          <div className="section">
            <h4>English Translation</h4>
            <p>{kuralData.Translation}</p>
          </div>
        );
      case "tamil":
        return (
          <div className="section">
            <h4>Tamil Explanation</h4>
            <p>{kuralData.mv}</p>
            <p>{kuralData.sp}</p>
          </div>
        );
      case "meaning":
        return (
          <div className="section">
            <h4>Meaning Key</h4>
            <p>{kuralData.mk}</p>
          </div>
        );
      case "couplet":
        return (
          <div className="section">
            <h4>Couplet</h4>
            <p>{kuralData.couplet}</p>
          </div>
        );
      case "transliteration":
        return (
          <div className="section">
            <h4>Transliteration</h4>
            <p>{kuralData.transliteration1}</p>
            <p>{kuralData.transliteration2}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="kural-display">
      <div className="kural-header">
        <h2 className="kural-number">Thirukkural #{kuralData.Number}</h2>
      </div>

      <div className="kural-content">
        <div className="kural-lines">
          <p className="kural-line">{kuralData.Line1}</p>
          <p className="kural-line">{kuralData.Line2}</p>
        </div>

        <div className="tab-navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">{renderTabContent()}</div>
      </div>

      <div className="kural-footer">
        <div className="kural-nav-buttons">
          <button className="nav-button" onClick={onPrevious}>
            ← Previous
          </button>
          <button className="nav-button" onClick={onNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default KuralDisplay;
