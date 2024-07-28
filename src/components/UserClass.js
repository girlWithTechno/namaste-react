import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userData: {}
        }
    }

    async componentDidMount() {
        const response = await fetch(`https://api.github.com/users/girlWithTechno`);
        const data = await response.json();
        console.log("show us data", data)
        this.setState({
            userData: data
        })
    }

    render() {
        // Destructing props
        const {name, location, avatar_url, bio} = this.state.userData;

        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <div>Description: {bio}</div>
            </div>
        )
    }
}

export default UserClass