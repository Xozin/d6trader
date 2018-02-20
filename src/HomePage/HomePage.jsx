import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';



class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

	getUserCardList(user) {
		return this.props.dispatch(userActions.getCards(user));
	}
	
	updateUserCardList(user) {
		return this.props.dispatch(userActions.updateCards(user));
	}

    render() {
        const { user } = this.props;
	
		return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.username}!</h1>
                {typeof user.cardList === 'undefined'?<p>ХУЙ</p>:user.cardList.length}
                <button onClick={()=>{this.getUserCardList(user)}}>get</button>
                <button onClick={()=>{this.updateUserCardList(user)}}>update</button>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };