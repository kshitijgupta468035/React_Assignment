import React from 'react';


import { Link } from 'react-router-dom';
export default function NavBar() {
	return (
		<div>
			<div class="header">
				<h2>Demo Streaming</h2>
				<input type="checkbox" id="chk" />
				<label for="chk" class="show-btn">
					<i class="fa fa-bars"></i>
				</label>

				<ul class="menu">
					<li class="list-items">
						<Link className="links" to="/login">
							Login
						</Link>
					</li>
					<li class="list-items list-item-2">
						<Link className="second-link" to="/free">
							Start your free strial
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h3 className="heading2">Popular Titles</h3>
				<div className="titles">
					<div>
						<Link to="/series">
							<div className="ser">
								<p className="inner-titles">SERIES</p>
							</div>
						</Link>
						<p>Popular Series</p>
					</div>
					<div>
						<Link to="/movies">
							<div className="mov">
								<p className="inner-titles">MOVIES</p>
							</div>
						</Link>
						<p>Popular Movies</p>
					</div>
				</div>
			</div>
		</div>
	);
}
