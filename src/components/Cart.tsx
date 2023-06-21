interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <h1>currCart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li>
            {index} {item}
          </li>
        ))}
      </ul>
      <button onClick={onClear}>Empty Cart</button>
    </>
  );
};

export default Cart;
