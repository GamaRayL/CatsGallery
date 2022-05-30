/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from "react-redux";
import Card from "components/Surfaces/Card";

export const AllCatsPage = () => {
  const catsArray = useSelector((state) => state.cats.catsItems);

  return (
    <>
      {catsArray.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </>
  );
};
