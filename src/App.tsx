import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons/Buttons";
import { useState } from "react";
import "./App.css";
import { BsFillCalendar2DayFill } from "react-icons/bs";

function App() {
  const [isAlertVisible, setAlertVisibility] = useState(false);
  const characters: string[] = ["James", "Bond", "Jon", "Don", "Ron"];
  const charHeading: string = "Characters";
  const things: string[] = [
    "Keyboard",
    "Car",
    "Desk",
    "Powder",
    "Coat",
    "Certificate",
  ];
  const thingHeading: string = "Things";
  return (
    <div>
      <ListGroup
        items={characters}
        heading={charHeading}
        onSelectItem={(item: string): void => {
          console.log(item);
        }}
      />
      <ListGroup
        items={things}
        heading={thingHeading}
        onSelectItem={(item: string): void => {
          console.log(item);
        }}
      />
      {isAlertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>This</strong> is an <strong>alert!!!</strong>
        </Alert>
      )}
      <Buttons
        color="primary"
        onClick={() => setAlertVisibility(!isAlertVisible)}
      >
        My Button
      </Buttons>
      <BsFillCalendar2DayFill color="red" size="40" />
    </div>
  );
}

export default App;
