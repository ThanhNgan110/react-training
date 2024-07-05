import { useState, useRef, useEffect } from "react";

const tempMovieData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		imdbID: "tt0133093",
		Title: "The Matrix",
		Year: "1999",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		imdbID: "tt6751668",
		Title: "Parasite",
		Year: "2019",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
];

const tempWatchedData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: "tt0088763",
		Title: "Back to the Future",
		Year: "1985",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Loader = () => {
	return <p className="loader">Loading...</p>;
};

const ErrorMessage = ({ message }) => {
	return (
		<p className="error">
			<span>💥</span> {message}
		</p>
	);
};

const NavBar = ({ children }) => {
	return (
		<>
			<nav className="nav-bar">{children}</nav>
		</>
	);
};

const Search = ({ query, setQuery }) => {
	const inputEl = useRef(null);

	useEffect(() => {
		inputEl.current.focus();
	}, []);

	return (
		<>
			<input
				className="search"
				type="text"
				placeholder="Search movies..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				ref={inputEl}
			/>
		</>
	);
};

const Logo = () => {
	return (
		<>
			<div className="logo">
				<span role="img">🍿</span>
				<h1>usePopcorn</h1>
			</div>
		</>
	);
};

const NumResult = ({ movies }) => {
	return (
		<>
			<p className="num-results">
				Found <strong>{movies.length}</strong> results
			</p>
		</>
	);
};

const Main = ({ children }) => {
	return <main className="main">{children}</main>;
};

const Box = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<>
			<div className="box">
				<button
					className="btn-toggle"
					onClick={() => setIsOpen((open) => !open)}
				>
					{isOpen ? "–" : "+"}
				</button>
				{isOpen && children}
			</div>
		</>
	);
};

const MovieList = ({ movies, onSelectMovie }) => {
	return (
		<ul className="list list-movies">
			{movies?.map((movie) => (
				<Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
			))}
		</ul>
	);
};

const Movie = ({ movie, onSelectMovie }) => {
	return (
		<li onClick={() => onSelectMovie(movie.imdbID)}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
};

const WatchedSummary = ({ watched }) => {
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));

	return (
		<div className="summary">
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{watched.length} movies</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{avgImdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{avgUserRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	);
};

const WatchedMovieList = ({ watched }) => {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<WatchedMovie movie={movie} key={movie.imdbID} />
			))}
		</ul>
	);
};

const WatchedMovie = ({ movie }) => {
	return (
		<li key={movie.imdbID}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime} min</span>
				</p>
			</div>
		</li>
	);
};

const MovieDetail = ({ selectedId, onCloseMovie }) => {
	const [movie, setMovie] = useState({});

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	  } = movie;

	  console.log(title, year);

	useEffect(() => {
		const getMovieDetails = async () => {
			const res = await fetch(
				`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
			);
			const data = await res.json();
			setMovie(data);
		};
		getMovieDetails();
	}, []);

	return (
		<div className="details">
		   <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
		  <section>
			
			<p><em>{plot}</em></p>
			<p>Staring {actors}</p>
			<p>Directed by {director}</p>
		  </section>
		</div>
	);
};

const KEY = "bbf6f65b";

export default function App() {
	const [query, setQuery] = useState("inception");
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState("");
	const [selectedId, setSelectedId] = useState(null);

	// const tempQuery = "interstellar";

	/* useEffect(() => {
		console.log("After initial render");
	}, []);

	useEffect(() => {
		console.log("After very render");
	});

	useEffect(()=> {
		 console.log("D");
	}, [query]);

	console.log("E");
	*/
	const handleSelectMovie = (id) => {
		setSelectedId((selectedId) => (id === selectedId ? null : id));
	};

	const handleCloseMovie = () => {
		setSelectedId(null);
	};
	useEffect(() => {
		const controller = new AbortController();
		const fetchMovies = async () => {
			try {
				setIsLoading(true);
				const res = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
					{ signal: controller.signal }
				);
				if (!res.ok) {
					throw new Error("Something went wrong with fetching movies");
				}
				const data = await res.json();
				if (data.Search) {
					setMovies(data.Search);
					setIsLoading(false);
				} else {
					console.log("No movies found.");
				}
			} catch (error) {
				console.error("Error fetching movies:", error.message);
				if (error.name !== "AbortError") {
					setIsError(error.message);
				}
			}
		};

		if (query.length < 3) {
			setMovies([]);
			setIsError("");
			return;
		}

		fetchMovies();

		// clean up function
		return () => {
			// Abort the request when the component unmounts or when a dependency changes
			controller.abort();
		};
	}, [query]);

	return (
		<>
			<NavBar>
				<Logo />
				<Search query={query} setQuery={setQuery} />
				<NumResult movies={movies} />
			</NavBar>
			<Main>
				<Box>
					{isLoading && <Loader />}
					{!isLoading && !isError && (
						<MovieList movies={movies} onSelectMovie={handleSelectMovie} />
					)}
					{isError && <ErrorMessage message={isError} />}
				</Box>
				<Box>
					{selectedId ? (
						<MovieDetail
							selectedId={selectedId}
							onCloseMovie={handleCloseMovie}
						/>
					) : (
						<>
							{" "}
							<WatchedSummary watched={watched} />
							<WatchedMovieList watched={watched} />
						</>
					)}
				</Box>
			</Main>
		</>
	);
}
