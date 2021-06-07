import React, { useEffect, useState } from 'react';

import Loading from './Loading';
const Series = () => {

	//Using hooks
	const [programs, setPrograms] = useState([]);
	const [loading, setLoading] = useState(true);

	//fetching data
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
			<h2 className="series-section-h2">Popular Series</h2>
			<div className="series">
				{programs.map((current, key) => {
					const { images, title, programType, releaseYear } = current;
					if (key < 22) {
						console.log(key);
						if (releaseYear > 2010) {
							if (programType === 'series') {
								return (
									<div className="series-img">
										<div>
											<img src={images['Poster Art'].url} />
										</div>
										<h4>{title}</h4>
									</div>
								);
							}
						}
					}
					
				})}
			</div>
		</>
	);
};

export default Series;
