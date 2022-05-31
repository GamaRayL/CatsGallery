import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setItemInState,
  dontAddItemInState,
} from "store/favouritesCats/reducer";
import { Paper } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import css from "./styles.module.css";

const Card = ({ cat }) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(
    (state) => state.favouritesCats.favouritesCatsItems
  );
  const isCatInArray = items.some((item) => item.id === cat.id);

  const handleClick = () => {
    if (isCatInArray) {
      dispatch(dontAddItemInState(cat.id));
    } else {
      dispatch(setItemInState(cat));
    }
  };

  return (
    <Paper
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      key={cat.id}
      className={css.paper}
    >
      {isShow ? (
        <div className={css.iconContainer} onClick={handleClick}>
          {isCatInArray ? (
            <FavoriteIcon
              className={css.iconHollow}
              sx={{ color: "#FF3A00", fontSize: 48 }}
            />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 48 }} />
          )}
        </div>
      ) : null}
      <img className={css.image} src={cat.url} alt="cat" loading="lazy" />
    </Paper>
  );
};

export default Card;
