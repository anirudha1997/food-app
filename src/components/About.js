import React from "react";
import UserClass from "./UserClass";
import UserContext from "./UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }

  componentDidMount = () => {
    console.log("Parent componentDidMount called");
  };

  componentWillUnmount = () => {
    console.log("About unmounted!");
  };

  render = () => {
    console.log("Parent render called");
    return (
      <div className="ml-5">
        <h1 className="text-lg mt-10 mb-5 font-extrabold">About Page</h1>
        <h2>This is a Food App developed using ReactJS.</h2>
        <h3>Author : Anirudh Agarwal</h3>
        <UserClass name={"First"} location={"Hyderabad"} />
        <UserContext.Consumer>
          {({ loggedinUser }) => (
            <h3 className="text-2xl mt-5">Current User : {loggedinUser}</h3>
          )}
        </UserContext.Consumer>
      </div>
    );
  };
}

export default About;
