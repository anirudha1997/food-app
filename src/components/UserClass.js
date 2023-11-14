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
  }

  componentDidMount = async () => {
    const data = await fetch("https://api.github.com/users/anirudha1997");
    const json = await data.json();
    this.setState({
      user: json,
    });
  };

  render() {
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
