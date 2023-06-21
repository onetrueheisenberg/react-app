import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useState } from "react";
import styles from "./Like.module.css";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <IconButton>
        <FavoriteBorderIcon
          className={selected ? styles.hideElement : null}
          color="error"
          fontSize="large"
          onClick={() => {
            onClick();
            setSelected(!selected);
          }}
        />
        <FavoriteIcon
          className={!selected ? styles.hideElement : null}
          fontSize="large"
          color="error"
          onClick={() => {
            onClick();
            setSelected(!selected);
          }}
        />
      </IconButton>
    </>
  );
};

export default Like;
