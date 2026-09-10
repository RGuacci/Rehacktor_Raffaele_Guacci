export async function getAllGamesLoader() {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2026-01-01,2026-12-31&page_size=30`,
  );
  const data = await response.json();
  return data.results;
}

export async function getFilteredGames({ params }) {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${params.slug}`,
  );
  const data = await response.json();
  return data.results;
}

export async function getAllGenres() {
  const response = await fetch(
    `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`
  );
  const data = await response.json();
  return data.results;
}

export async function getFilteredByGenres({ params }) {
   const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`
  );
  const data = await response.json();
  return data.results;
}

export async function getGameDetails ({ params }) {
  const response = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`);
  const data = await response.json();
  return data;
}