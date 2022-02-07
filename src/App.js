import './App.css';
import {useEffect, useState} from "react";



function App() {
	//DECLARE DATA STATE VARIABLE
	const [data, setData] = useState([]);

	// DEFINE THE TITLE OF THE LIST
	const title = "Top 10 Crypto Exchange Platform";

	//RENDER EACH EXCHANGE INFO OBJECT IN THE TABLE BODY
	const exchangeList = data.map(platform => (
		<tr key={platform.name}>
			<td>{platform.trust_score_rank}</td>
			<td><img src={platform.image} alt={platform.name} /><span>{platform.name}</span></td>
			<td>{platform.trust_score}</td>
			<td>{platform.country}</td>
			<td>{platform.url}</td>
		</tr>
	))

	//FETCH THE COINGECKO API AND ACCESS THE TOP 10 EXCHANGE INFORMATION
	useEffect(() => {
		{
			var requestOptions = {
				method: 'GET',
				redirect: 'follow'
			};

			fetch("https://api.coingecko.com/api/v3/exchanges?per_page=10", requestOptions)
				.then(response => response.json())
				.then(result => setData(result))
				.catch(error => console.log('error', error));
		}
		console.log(data);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>{title}</h1>
				<table>
					<tr>
						<th>Rank</th>
						<th>Exchange</th>
						<th>Trust Score</th>
						<th>country</th>
						<th>Website Link</th>
					</tr>
					{exchangeList}
				</table>
			</header>

		</div>
	);
}

export default App;
