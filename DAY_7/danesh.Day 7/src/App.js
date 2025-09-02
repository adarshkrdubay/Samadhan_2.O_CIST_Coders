import React, { useState } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState("");
  const [charLimit, setCharLimit] = useState(false);
  const [maxChars, setMaxChars] = useState(200);

  const handleChange = (e) => {
    let value = e.target.value;
    if (charLimit && value.length > maxChars) {
      value = value.slice(0, maxChars);
    }
    setText(value);
  };

  const handleClear = () => setText("");
  const handleCopy = () => navigator.clipboard.writeText(text);

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="container">
      <h1>Counter + Live Text Preview</h1>
      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={charLimit}
            onChange={() => setCharLimit(!charLimit)}
          />{" "}
          Enable character limit
        </label>
        {charLimit && (
          <input
            type="number"
            value={maxChars}
            onChange={(e) => setMaxChars(Number(e.target.value))}
            className="max-input"
          />
        )}
        <div className="stats">
          <p>
            <b>Chars:</b> {charCount} | <b>Words:</b> {wordCount} |{" "}
            <b>Read:</b> {readTime < 1 ? "<1" : readTime} min
          </p>
        </div>
      </div>

      <div className="box">
        <h2>Editor</h2>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type here..."
        ></textarea>
        <div className="btn-group">
          <button className="btn clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      <div className="box">
        <h2>Live Preview</h2>
        <p className="preview">{text || "Start typing above to see preview..."}</p>
        <button className="btn copy-btn" onClick={handleCopy}>
          Copy text
        </button>
      </div>

      <footer className="footer">
        Built with React + CSS. Drop this component anywhere in your app.
      </footer>
    </div>
  );
}

export default App;
