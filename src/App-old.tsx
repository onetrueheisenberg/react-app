import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons/Buttons";
import { useState } from "react";
import "./App.css";
import { BsFillCalendar2DayFill } from "react-icons/bs";
import Like from "./components/Like";
import { produce } from "immer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  const [isAlertVisible, setAlertVisibility] = useState(false);
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Bug 1",
      active: true,
    },
    { id: 2, title: "Bug 2", active: true },
  ]);
  const [products, setProducts] = useState(["Product1", "Product2"]);
  const [game, setGame] = useState({
    id: 1,
    name: "Game 1",
    player: {
      name: "Ron",
      age: 48,
      occupation: "Builder",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Mozzarella",
    toppings: ["Tomato", "Cauliflower"],
  });
  const handleClick = () => {
    // setBugs(
    //   // bugs.map((bug) => (bug.id === 1 ? { ...bug, active: false } : bug))
    //   produce((draft) => {
    //     const bug = draft.find((bug) => bug.id === 1);
    //     if (bug) bug.active = false;
    //   })
    // );
    setProducts([...products, "Product 3"]);
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 500 },
      { id: 2, title: "Product 2", quantity: 400 },
    ],
  });

  const handleIncreaseCartItemSize = () => {
    setCart({
      ...cart,
      items: [...cart.items].map((item) =>
        item.id === 1 ? { ...item, quantity: 5000 } : item
      ),
    });
  };

  const handleClickGame = () => {
    // setGame(
    //   produce((draft) => {
    //     const game = draft.find((game: { id: number; }) => game.id === 1);
    //     if (bug) bug.active = false;
    //   })
    // );
    setGame({
      ...game,
      player: { ...game.player, name: "James" },
    });
  };

  const handleAddToppings = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Buttermilk"] });
  };

  const emptyCart = () => setProducts([]);
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
      {/* <ListGroup
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
      <BsFillCalendar2DayFill color="red" size="40" /> */}
      {/* <Like onClick={() => console.log("Clicked")} /> */}
      {/* <Navbar productsSize={products.length} />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.active ? "To Be fixed" : "FiXeD"}
        </p>
      ))}
      <button onClick={handleClick}>Fix Bug!</button>
      <Cart cartItems={products} onClear={emptyCart} />
      {[game].map((game) => (
        <p key={game.id}>
          {game.player.name} {game.player.age} {game.player.occupation}
        </p>
      ))}
      <button onClick={handleClickGame}>Edit Player nAME</button>
      {[pizza].map((pizza) => (
        <p key={pizza.name}>
          {pizza.name} {pizza.toppings.join(" and ")}
        </p>
      ))}
      <button onClick={handleAddToppings}>Add Toppings</button>
      {[cart].map((item) => (
        <p key={item.discount}>
          <ul>
            {item.items.map((item, index) => (
              <li>
                {item.id} {item.title} {item.quantity}
              </li>
            ))}
          </ul>
        </p>
      ))}
      <button onClick={handleIncreaseCartItemSize}>Improve Cart Size</button> */}
      {/* <ExpandableText maxChars={20}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A debitis
        tempore minima harum saepe esse at dolorem nisi! Iste recusandae omnis,
        eligendi nemo velit vel saepe nam, incidunt quos beatae illum quam
        adipisci quia ad, ea nisi dolorum aperiam commodi officia assumenda
        veritatis officiis aut est. Ipsam maxime facilis atque aut temporibus,
        explicabo tempora assumenda earum animi sapiente iste consectetur cum,
        alias, non similique. Ad est tenetur obcaecati mollitia adipisci, cumque
        saepe cum, deserunt blanditiis eum quos quia sed, enim autem omnis et
        accusamus quo? Repellendus ratione consectetur aspernatur tempore quidem
        ipsum quaerat voluptatem nobis, aperiam, omnis deleniti necessitatibus
        harum?
      </ExpandableText> */}
      <Form />
    </div>
  );
}

export default App;
