import { getGifs } from "../helpers/GetGifs";

export const GifGrid = ({ category }) => {
  const gifs = [1, 2, 3, 4, 5];

  getGifs(category);
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
