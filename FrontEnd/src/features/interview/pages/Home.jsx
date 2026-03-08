import React, { useState } from "react";
import "./home.scss";

const Home = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [resume, setResume] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Theme State
  const [bgColor, setBgColor] = useState("#0f172a");
  const [textSize, setTextSize] = useState("16px");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement API call here to send data to backend
    console.log({ jobDescription, selfDescription, resume });
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Theme Functions
  const changeColor = (color) => setBgColor(color);
  const changeTextSize = (size) => setTextSize(size);

  return (
    <div
      className="home-container"
      style={{ backgroundColor: bgColor, fontSize: textSize }}
    >
      {/* Theme Controls */}
      <div className="theme-controls">
        <div className="control-group">
          <span className="control-label">Theme</span>
          <div className="color-options">
            <button
              onClick={() => changeColor("#0f172a")}
              className="color-btn"
              style={{ background: "#0f172a" }}
              title="Slate"
            ></button>
            <button
              onClick={() => changeColor("#000000")}
              className="color-btn"
              style={{ background: "#000000" }}
              title="Black"
            ></button>
            <button
              onClick={() => changeColor("#1a1a2e")}
              className="color-btn"
              style={{ background: "#1a1a2e" }}
              title="Midnight"
            ></button>
            <button
              onClick={() => changeColor("#2d0320")}
              className="color-btn"
              style={{ background: "#2d0320" }}
              title="Deep Purple"
            ></button>
          </div>
        </div>
        <div className="control-group">
          <span className="control-label">Size</span>
          <div className="size-options">
            <button onClick={() => changeTextSize("14px")} className="size-btn">
              S
            </button>
            <button onClick={() => changeTextSize("16px")} className="size-btn">
              M
            </button>
            <button onClick={() => changeTextSize("18px")} className="size-btn">
              L
            </button>
          </div>
        </div>
      </div>

      <header className="header">
        <h1 className="title">Interview Copilot</h1>
        <p className="subtitle">
          Generate your custom interview preparation plan
        </p>
      </header>
      <form className="main-content" onSubmit={handleSubmit}>
        <div className="left-section">
          <label htmlFor="jobDescription" className="label">
            Job Description
          </label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            className="textarea"
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div className="right-section">
          <div className="input-group">
            <label className="label">Resume (PDF)</label>
            <label htmlFor="resume" className="file-input-label">
              <span className="icon">📄</span>
              <span className="text">
                {resume ? resume.name : "Click to upload or drag and drop"}
              </span>
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden-input"
                required
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="selfDescription" className="label">
              Self Description
            </label>
            <textarea
              name="selfDescription"
              id="selfDescription"
              className="textarea short"
              placeholder="Briefly describe your background and goals..."
              value={selfDescription}
              onChange={(e) => setSelfDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate Plan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
