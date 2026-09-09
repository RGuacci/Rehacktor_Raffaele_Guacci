import { useLoaderData } from 'react-router';
import GameList from '../components/HomeComponents/GameList';

function Homepage () {
    const games = useLoaderData();

    return(
        <>
         <h1 className="font-electro text-center font-bold text-5xl my-10">Reactor</h1>

         <GameList>
            {games.map((game) => {
                return(
                    <GameList.Card key={game.id} game={game}/>
                )
            })}
         </GameList>
        </>
    )
}

export default Homepage;