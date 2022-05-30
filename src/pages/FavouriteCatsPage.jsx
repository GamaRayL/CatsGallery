/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from "react-redux";
import Card from "components/Surfaces/Card";

export const FavouriteCatsPage = () => {
  const favouritesCatsArray = useSelector(
    (state) => state.favouritesCats.favouritesCatsItems
  );
  return (
    <>
      {favouritesCatsArray.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </>
  );
};
