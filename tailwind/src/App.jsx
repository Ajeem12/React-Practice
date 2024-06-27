import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "Azeem",
    age: 25,
  };

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card  username="Wanda" btnText="click me"/>
      
    </>
  );
}

export default App;
