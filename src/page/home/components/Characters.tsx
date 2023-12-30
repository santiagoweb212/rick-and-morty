import { Suspense } from "react";
import Cards from "../../../components/cards/Cards";
import useCharactersStore from "../../../store/useCharactersStore";

const Characters = () => {
  return (
    <Suspense fallback={<div>LoadingPersonajes...</div>}>
      <Cards data={useCharactersStore.getState().characters.results} />
    </Suspense>
  );
};

export default Characters;
