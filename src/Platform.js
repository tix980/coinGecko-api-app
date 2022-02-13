import './App.css';
import './Platform.css';
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

			let requestOptions = {
				method: 'GET',
				redirect: 'follow'
			};

			fetch(`https://api.coingecko.com/api/v3/exchanges/${params.id}`, requestOptions)
				.then(response => response.json())
				.then(result => setDetailData(result))
				.catch(error => console.log('error', error));
	});

	//DISPLAY THE SELECTED PLATFORM INFORMATION
	const selectedExchangeDetail =

		<div>
			<nav>
				<Link to="/">Go Back to Home</Link>

			</nav>
			<div className="row detail-row">


				<div className="col-md-4 platform-icon-name">
					<div><img src={detailData.image} width="120px" alt="platform icon" /></div>
					<div className="platform-name">{detailData.name}</div>
				</div>



				<div className="detail-info col-md-8">
					<div><span className="desc-tag">Country:</span> {detailData.country}</div>
					<div><span className="desc-tag">Rank:</span> {detailData.trust_score_rank}</div>
					<div><span className="desc-tag">Year:</span>{detailData.year_established}</div>
					<div><div className="desc-tag">Facebook:</div><a href={detailData.facebook_url}>{detailData.facebook_url}</a></div>
					<div><div className="desc-tag">Subreddit:</div><a href={detailData.reddit_url}>{detailData.reddit_url}</a></div>
					<div><div className="desc-tag">Description:</div>{detailData.description}</div>
				</div>


			</div>



		</div>;

	return (
		<div className="App-detail">
			<header className="App-detail-header">
				{selectedExchangeDetail}
			</header>
		</div>
	);
}

export default Platform;