interface Props {
  productsSize: number;
}

const Navbar = ({ productsSize }: Props) => {
  return <div>Items in Cart: {productsSize}</div>;
};

export default Navbar;
