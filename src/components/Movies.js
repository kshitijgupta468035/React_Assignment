import React, { useEffect, useState } from 'react';

import Loading from './Loading';
const Movies = () => {

	//using hooks
	const [programs, setPrograms] = useState([]);
	const [loading, setLoading] = useState(true);
	
	// Fetching data
	const getUsers = async () => {
		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
			);

			setTimeout(() => {
				setLoading(false);
			}, 200);

			await response.json().then((g) => {
				setPrograms(g.entries);
			});
		} catch (error) {
			setLoading(false);
			console.log('Error is' + error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<h2 className="movies-section-h2">Popular Movies</h2>
			<div className="movies">
				{programs.map((current) => {
					const { title, programType, releaseYear, images } = current;
					if (releaseYear > 2010) {
						if (programType === 'movie') {
							return (
								<div className="movies-img">
									<div>
										<img src={images['Poster Art'].url} />
									</div>
									<h4>{title}</h4>
								</div>
							);
						}
					}
				})}
			</div>
		</>
	);
};

export default Movies;
