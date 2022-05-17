import logo from "./logo.svg";
import "./App.css";
import Box1 from "./3.1/Box1";
import Button from "./4.1/Button";
import Card from "./4.2/Card";
import "./3.1/boxes.css";
import FuncCards from "./6.1/FuncCards";
import Incriment from "./7.1/incriment";
import Btn from "./7.2/btn";
import PlusMinus from "./7.3/PlusNimus";
import Life from "./8.1/Life";
import BoxesApp from "./8.2/BoxesApp";
import BoxesApp2 from "./8.3/BoxesApp2";

function App() {
  const btn1 = {
    text: "important btn",
    style: "important",
  };

  const btn2 = {
    text: "not important btn",
    style: "",
  };

  const card1 = {
    title: "rock",
    text: "lorem12sdfsdfsdfsdfsdfsdfsdfsdfsdfsdf",
    url: "https://images.thdstatic.com/productImages/94af8836-0338-4802-914e-04cc71e562ad/svn/backyard-x-scapes-fake-rocks-hdd-rof-rocsb-64_1000.jpg",
    link1: "https://www.google.com/",
    link2: "https://www.amazon.com/",
  };

  const card2 = {
    title: "guitar",
    text: "lorem1deiisdf",

    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/GuitareClassique5.png/549px-GuitareClassique5.png",
    link1: "https://www.google.com/",
    link2: "https://www.amazon.com/",
  };

  const card3 = {
    title: "Car",
    text: "lorsdfsdfsdfsdfsdf",

    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/401_Gridlock.jpg/450px-401_Gridlock.jpg",
    link1: "https://www.google.com/",
    link2: "https://www.amazon.com/",
  };

  return (
    <div>
      {/* 3.2 */}
      {/* <Box1 />; */}
      {/* 4.1 */}
      {/* <Button data={btn1} />
      <Button data={btn2} /> */}
      {/* 4.2 */}

      {/* <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} /> */}
      {/* 6.1 */}
      {/* <FuncCards data={card1} />
      <FuncCards data={card2} />
      <FuncCards data={card3} /> */}
      {/* 7.1 */}
      {/* <Incriment /> */}
      {/* 7.2 */}

      {/* <Btn /> */}

      {/* 7.3 */}

      {/* <PlusMinus /> */}

      {/* 8.1 */}
      {/* <Life /> */}
      {/* 8.2 */}
      {/* <BoxesApp /> */}
      {/* 8.3 */}
      <BoxesApp2 />
    </div>
  );
}

export default App;
