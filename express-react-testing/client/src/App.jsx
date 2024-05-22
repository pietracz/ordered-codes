import React, {useEffect, useState } from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}]); // Initialisierung mit einem leeren Objekt im Array

  useEffect(() => {
    fetch('/api')
      .then(response => response.text())
      .then(data => {setBackendData(data)})
        .catch(err => console.error("Fehler beim Abruf!!!!", err));
  }, []);

  return (
    <div>
    </div>
  );
}

export default App;