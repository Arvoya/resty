import React from 'react';

function History(props): React.ReactElement {


	const handleClick = (targetHistory) => {
		props.handleClick(targetHistory);
	}



	return (
		<section>
			<ul>
				{props.historyData.map((history: { method: string, url: string }, idx: number) => {
					return (
						<li key={idx}>
							<button onClick={() => handleClick(history)} >{history.method}{history.url}</button>
						</li>
					);
				})}
			</ul>
		</section >
	);
}

export default History;
