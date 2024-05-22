import React from 'react'

function App() {
  fetch('http://localhost:5000/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}
export default App;