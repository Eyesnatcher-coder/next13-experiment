// "use client"
import Movie from "./about/movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=09b21d2ae53f8f0ecdc84761bf917653`)
  const res = await data.json()
  return (
    <main>
    <div className="grid gap-16 grid-cols-fluid">
    {res.results.map((movie)=>(
      <Movie 
        id={movie.id}
        key={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
      ></Movie>
    ))}</div>
    </main>
  )
}
