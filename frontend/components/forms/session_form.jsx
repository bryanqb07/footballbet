// import React from 'react';
// import merge from 'lodash/merge';
// import { Link } from 'react-router-dom';

// class SessionForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//             email: ""
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const user = merge({}, this.state);
//         this.props.processForm(user)
//             .then(() => this.props.closeModal());
//     }

//     handleInput(type) {
//         return (e) => this.setState({ [type]: e.target.value });
//     }

//     render() {
//         const header = this.props.formType == "signup" ? ({
//             title: "Signup",
//             url: "/login",
//             text: "Login",
//             //    passwordType: "current-password",
//         }) : ({
//             title: "Login",
//             url: "/signup",
//             text: "Signup",
//             //    passwordType: "new-password",
//         });

//         const errors = this.props.errors;
//         const errorsDisplay = errors ? (this.props.errors.map(error => <li key={error}>{error}</li>)
//         ) : "";
//         const isLogin = this.props.formType == "login"

//         const emailForm = isLogin ? "" : (
//             <input
//                 type="text"
//                 value={this.state.email}
//                 onChange={this.handleInput("email")}
//             />

//         );

//         return (
//             <div className="login-form-container">
//                 <header className="login-header">
//                     <span>{ this.isLogin ? "Register for account" : "Have an account already?" } &nbsp;&nbsp;&nbsp;
//                         <Link to={header.url} >
//                             {header.text}
//                         </Link>
//                     </span>

//                     <h1>
//                         {header.title}
//                     </h1>
//                 </header>
//                 <form>
//                     <span> Username</span>
//                     <input
//                         type="text"
//                         value={this.state.username}
//                         onChange={this.handleInput("username")} />

//                     <span> Password </span>
//                     <input
//                         type="password"
//                         value={this.state.password}
//                         onChange={this.handleInput("password")} />

//                     {isLogin ? "" : <span>Email</span>}
//                     {emailForm}

//                     <button onClick={this.handleSubmit}>
//                         {header.title}
//                     </button>
//                 </form>
//                 <ul>
//                     {errorsDisplay}
//                 </ul>
//             </div>
//         )
//     }

// }

// export default SessionForm;


import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to FootballBetting!
                <br />
                    Please {this.props.formType} or {this.props.otherForm}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        { this.props.formType == "signup" ? (
                            <label>Email:
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                        )
                        : ""}
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);