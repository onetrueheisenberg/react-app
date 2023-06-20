import Button from "@mui/material/Button";
import styles from "./Buttons.module.css";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  // color?: "primary" | "contained" | "outlined";
  onClick: () => void;
}

const Buttons = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      {/* <Button sx={{ color: "Red" }} onClick={onClick}>
        {children}
      </Button> */}
      <button
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Buttons;
