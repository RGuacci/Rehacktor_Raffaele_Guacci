import { useLoaderData, useParams } from "react-router";
import GameList from "../components/HomeComponents/GameList";

function GenrePage() {
  const games = useLoaderData();
  const { slug } = useParams();

  return (
    <>
      <h1 className="font-electro text-center font-bold text-5xl my-10">
        Genere : {slug}
      </h1>
      <GameList>
        {games.map((game) => {
          return <GameList.Card key={game.id} game={game} />;
        })}
      </GameList>
    </>
  );
}

export default GenrePage;
