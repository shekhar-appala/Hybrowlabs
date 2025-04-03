import React, { useState } from "react";

const Problem1 = () => {
  const [records, setRecords] = useState([]);

  const fetchRandomCharacter = async () => {
    const randomId = Math.floor(Math.random() * 50) + 1; 
    try {
      const response = await fetch(`https://swapi.dev/api/people/${randomId}/`);
      const data = await response.json();
      setRecords([...records, { id: randomId, name: data.name, height: data.height, gender: data.gender }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteRecord = (id) => {
    setRecords(records.filter(record => record.id !== id));
  };

  return (
    <div style={{ margin: "2rem", width: "90vw", textAlign: "center" } }>
      <button style={{backgroundColor: "#4287f5", border: "none", padding: "10px", color:"#ffffff"}} onClick={fetchRandomCharacter}>Add Record</button>
      <table border="none" style={{ marginTop: "10px", width: "100%",borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.height}</td>
              <td>{record.gender}</td>
              <td>
                <button onClick={() => deleteRecord(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problem1;
