import React from 'react';
import {card, set} from 'mtgsdk';

function getCardsByName(name) {
	card.all({ name: name, pageSize: 1 })
	.on('data', card => {
		console.log(card.name)
	})
}

class CardAdder extends React.Component {
	
	render() {
		return (
			<div>
				<input/>
				<button onClick={()=>{getCardsByName('хуй')}}>add</button>
			</div>
		);
	};
	
}

export {CardAdder};