import logo from "./logo.svg";
import "./App.css";
import { BlockCard } from "./components/block-card/block_card.jsx";
import BlogCartData from "./data.js";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        {BlogCartData.map((value, index) => {
          console.log(value, index);
          return <BlockCard key={index} data={value} />;
        })}
      </div>
    </div>
  );
}

export default App;
