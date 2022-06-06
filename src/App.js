import React from "react";
import { useState } from "react";
import Block from "./Block.js";

export default function App() {
  const [color, setColor] = useState("pink");

  const styles = {
    backgroundColor: color
  };

  const initialcolorlist = ["orange", "blue", "yellow"];
  const [colorlist, setColorlist] = useState(initialcolorlist);
  return (
    <>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="enter the color"
      />
      <button onClick={() => setColorlist([...colorlist, color])}>
        add color
      </button>

      {colorlist.map((color, index) => (
        <Block key={index} value={color} />
      ))}
    </>
  );
}
