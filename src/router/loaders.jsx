async function getAllGamesLoader (){
    const response = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2026-01-01,2026-12-31&page_size=30`);
    const data = await response.json();
    return data.results;
}

export default getAllGamesLoader;