import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Dummy User",
        login: "dummy",
      },
    };
    console.log(this.props.name + "Child Constructor called");
  }

  componentDidMount = async () => {
    const data = await fetch("https://api.github.com/users/anirudha1997");
    const json = await data.json();
    console.log("json:", json);
    this.setState({
      user: json,
    });
  };

  componentDidUpdate = () => {
    console.log("Props updated");
  };

  componentWillUnmount = () => {
    // clearInterval(this.timer);
  };

  render() {
    console.log(this.props.name + "Child Render called");
    const { login, name } = this.state.user;
    return (
      <div>
        <h1>{"Name: " + name}</h1>
        <h2>Contact: @anirudhagarwal1997</h2>
        <h3>{"Login: " + login}</h3>
      </div>
    );
  }
}

export default UserClass;
