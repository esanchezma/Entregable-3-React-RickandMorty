import Locations from "./components/Locations";

import "./styles.css";

document.body.style = "background: #272121";

function App() {
  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <h1>Rick and Morty</h1>
        <Locations />
      </div>
    </>
  );
}

export default App;
