import React from "react";

class UserSignupPage extends React.Component {

    // render returns a query functions we will query the header component
    // let's introduce state to our component, state is just a simple json object where we can add any field we want

    state = {
        // when this inout is empty, there will be no text inside the input
        // we need to update it when ever user types
        displayName: "", username: "", password: "", pendingApiCall: false
    };

    onChangeDisplayName = (event) => {
        const value = event.target.value;
        this.setState({displayName: value})
    };
    onChangeUserName = (event) => {
        const value = event.target.value;
        this.setState({username: value})
    };
    onChangePassword = (event) => {
        const value = event.target.value;
        this.setState({password: value})
    };

    onClickSignUp = () => {
        const user = {
            userName: this.state.username, password: this.state.password, displayName: this.state.displayName
        }
        this.setState({pendingApiCall: true});
        this.props.actions.postSignup(user).then((resp) => {
            this.setState({pendingApiCall: false})
        })
        .catch((error) =>{
            this.setState({pendingApiCall: false})

        })
    }

    render() {
        // this is our form, now we need fill the form and click on the button


        return (<div className="contaoner">
            <h1 className="text-center">Sign Up</h1>
            <div className="col-12 mb-3">
                <input className="form-control" placeholder="Your Display name" value={this.state.displayName}
                       onChange={this.onChangeDisplayName}/>
            </div>
            <div className="col-12 mb-3">
                <input className="form-control" placeholder="User Name" value={this.state.username}
                       onChange={this.onChangeUserName}/>
            </div>
            <div className="col-12 mb-3">
                <input className="form-control" placeholder="Password" type="password" value={this.state.newPassword}
                       onChange={this.onChangePassword}/>
            </div>

            {/* <div className="col-12 mb-3">
                <input className="form-control" placeholder="Repeat your Password" type="password"
                       value={this.state.repeatedPassword}
                       onChange={this.onChangePassword}/>
            </div> */}

            <div className="text-center">
                <button className="btn btn-primary" onClick={this.onClickSignUp}
                        disabled={this.state.pendingApiCall}>Sign up
                    {this.state.pendingApiCall && (

                        <span className="spinner-border spinner-border-sm"></span>

                    )}
                </button>

            </div>

        </div>)
    }

}

// later we will use redux and that will change our default export
export default UserSignupPage;