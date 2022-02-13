import './App.css';
import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";



function Platform() {

	//DECLARE DETAIL DATA STATE VARIABLE
	const [detailData, setDetailData] = useState([]);

	//ACCESS THE SELECTED PLATFORM'S PARAMETERS
	let params = useParams();

	//FETCH THE COINGECKO API AND ACCESS THE SELECTED EXCHANGE PLATFORM INFORMATION
	// WITH SELECTED PLATFORM ID
	useEffect(() => {

		{
			let requestOptions = {
				method: 'GET',
				redirect: 'follow'
			};

			fetch(`https://api.coingecko.com/api/v3/exchanges/${params.id}`, requestOptions)
				.then(response => response.json())
				.then(result => setDetailData(result))
				.catch(error => console.log('error', error));
		}
	}, []);

	//DISPLAY THE SELECTED PLATFORM INFORMATION
	const selectedExchangeDetail =
		<div>
			<nav>
				<Link to="/">Home</Link>

			</nav>
			<h1>{detailData.id} Detail Page</h1>
			<div>{detailData.name}</div>
			<div>{detailData.country}</div>
			<div><img src={detailData.image} /></div>
			<div>{detailData.trust_score_rank}</div>
			<div>{detailData.year_established}</div>
			<div>{detailData.facebook_url}</div>
			<div>{detailData.reddit_url}</div>
			<div>{detailData.description}</div>
		</div>;

	return (
		<div className="App">
			<header className="App-header">
				{selectedExchangeDetail}
			</header>
		</div>
	);
}

export default Platform;