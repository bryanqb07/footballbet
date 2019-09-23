import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }

    sessionLinks(){
        return (
            <nav className="login-signup">
                <button onClick={() => this.props.openModal('login')}>Login</button>
                &nbsp;or&nbsp;
                <button onClick={() => this.props.openModal('signup')}>Signup</button>
            </nav>
        )
    }

    render(){
        return (
            this.props.currentUser ? (
                <div className="welcome-wrapper">
                    <h3>Welcome {this.props.currentUser.username}</h3>
                    <button onClick={this.handleClick}>Logout</button>
                </div>
            ) : 
            <div className="signup-wrapper">     
                { this.sessionLinks() }
            </div>
        )
    }
}



export default Navbar;