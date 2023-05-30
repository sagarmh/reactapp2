import React, { Fragment } from "react";

// const Child1 = () => {
// 	return(
// 	<h2> {data1} </h2>
// 	);
// }

// export default Child1
class Child1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empid: "001",
      empfname: "Dibya",
      empdob: "Jan2020",
    };
  }

  updateempdob = () => {
    this.setState({ empdob: "Jan1980" });
  };

  render() {
    return (
      <Fragment>
        <h1> My {this.state.empfname} </h1>
		<p>Emp ID is {this.state.empid}</p>
        <p>Emp DOB is {this.state.empdob}</p>
      </Fragment>
    );
  }
}

export default Child1;
