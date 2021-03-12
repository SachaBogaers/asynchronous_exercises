const API_KEY = "5fdbbdadf89111b85a1e09b51393c754";


const getData = async () => {
	const apiURL = "https://api.themoviedb.org/3/genre/movie/list";
	try {
		const res = await fetch(`${apiURL}?api_key=${API_KEY}`, {
			method: "GET",
		});
		const resJson = await res.json();
		console.log(res, resJson);
	} catch (error) {
		console.log(error);
	}


}

