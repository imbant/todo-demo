import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return <>12</>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
