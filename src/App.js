import Header from "./components/Header";
import Card from "./components/Card";
import { data } from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });
  return (
    <div className="App">
      <Header />
      <div className="Card-Container">{cards}</div>
    </div>
  );
}

export default App;
