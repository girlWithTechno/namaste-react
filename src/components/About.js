import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component {
    render(){
        return (
            <div>
                <h1>
                    About namaste react data
                </h1>
                <UserClass name={"Sonakshi Bhardwaj (Classes)"} location={"Dehraddduun"}/>
            </div>
        )
    }
}

export default About