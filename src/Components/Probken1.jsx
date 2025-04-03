import { useState } from "react";

export default function Problem1() {
  const [input, setInput] = useState("");
  const [charCounts, setCharCounts] = useState([]);

  const countCharacters = () => {
    const UpperCase = input.toUpperCase();
    const charMap = {};
    const orderedCounts = [];

    for (let char of UpperCase) {
      if (!charMap[char]) {
        charMap[char] = 1;
        orderedCounts.push({ char, count: 1 });
      } else {
        charMap[char]++;
        orderedCounts.find((item) => item.char === char).count = charMap[char];
      }
    }

    setCharCounts(orderedCounts);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Character Counter</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
        style={{ padding: "5px", width: "250px" }}
      />
      <button onClick={countCharacters} style={{ marginLeft: "10px", padding: "5px" }}>
        Count
      </button>

      {charCounts.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {charCounts.map((item, index) => (
            <div key={index}>
              {item.char}-{item.count}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
