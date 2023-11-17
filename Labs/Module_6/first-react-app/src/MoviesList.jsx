function Movie(props){
    return (
        <div>
            <h3>{props.title} ({props.year})</h3>
            <p>{props.synopsis}</p>
        </div>
    )
}

function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];
  return (
    <div className="MoviesList componentBox">
      <ul>
        {" "}
        {/* iterate over each movie, print the title in a list */}
        {movies.map((movie) => (
            <Movie 
                key={movie.id} // key prop is required for lists
                title={movie.title}
                year={movie.year}
                synopsis={movie.synopsis}
            />
            // can also destructure movie into individual props
            // <Movie key={movie.id} {...movie}/>
        ))}
      </ul>
    </div>
  );
}
export default MoviesList;
