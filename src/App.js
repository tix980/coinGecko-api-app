import './App.css';
import {useEffect, useState} from "react";
import {Link, Route, Routes, useParams} from "react-router-dom";
import Platform from "./Platform";

//A FUNCTION THAT DISPLAY THE TOP 10 EXCHANGE LIST
function ExchangeList() {
	//DECLARE DATA STATE VARIABLE
	const [data, setData] = useState([]);
	// DEFINE THE TITLE OF THE LIST
	const title = "Top 10 Crypto Exchange Platform";

	const coins = ['bitcoin','matic-network'];


	//RENDER EACH EXCHANGE INFO OBJECT IN THE TABLE BODY
	const exchangeList = data.map(platform => (
			<tr key={platform.id}>
				<td>{platform.trust_score_rank}</td>

				<Link to={`/${platform.id}`}>
					<td className="icon-and-name"><img src={platform.image} alt={platform.name}/>
					<div>{platform.name}</div></td>
				</Link>
				<td>{platform.trust_score}</td>
				<td>{platform.country}</td>
				<td className="url"><a href={platform.url}>{platform.url}</a></td>
			</tr>
		)
	)

	//FETCH THE COINGECKO API AND ACCESS THE TOP 10 EXCHANGE INFORMATION
	useEffect(() => {
		{
			let requestOptions = {
				method: 'GET',
				redirect: 'follow'
			};

			fetch("https://api.coingecko.com/api/v3/exchanges?per_page=10", requestOptions)
				.then(response => response.json())
				.then(result => setData(result))
				.catch(error => console.log('error', error));
		}
	}, [data]);

	return (
		<div className="App">
			<header className="App-header">
				<h1>{title}</h1>
				<table>
					<thead>
					<tr>
						<th>Rank</th>
						<th>Exchange</th>
						<th>Trust Score</th>
						<th>country</th>
						<th>Website Link</th>
					</tr>
					</thead>
					<tbody>
					{exchangeList}
					</tbody>

				</table>
			</header>
		</div>
	)
}




function App() {

	return (
		<Routes>
			<Route path="/" element={<ExchangeList/>}/>
			<Route path="/:id" element={<Platform/>}/>
		</Routes>
	);
}

export default App;
