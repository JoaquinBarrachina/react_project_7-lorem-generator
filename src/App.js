import "./App.css";
import React, { useState } from "react";

import data from "./data";

function App() {
  const [par, setPar] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(par);
    setText(data.filter((p, index) => index < amount));

    if (amount < 0) setText([data[0]]);
    if (amount > 8) setPar(8);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={par}
          onChange={(e) => setPar(e.target.value)}
        />
        <button type="submit" className="btn">
          Select
        </button>
      </form>

      <article className="lorem-text">
        {text.map((p, index) => {
          return <p key={index}>{p}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
