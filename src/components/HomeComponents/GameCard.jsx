function GameCard ({ game }){
  return(
    <>
     <div className="aspect-video overflow-hidden relative">
       <img src={`${game.background_image}`} className="w-full h-full brightness-50" alt="An image of the game in the card" />
       <p className="absolute bottom-px w-full text-center text-white">{game.name}</p>
     </div>
    </>
  )
}

export default GameCard;