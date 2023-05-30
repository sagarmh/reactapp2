// import React from 'react';
// import Child1 from './Child1.js';
// import Child2 from './Child2.js'

// const ParentComponent = () => {
//     const data = "Hello Everyone";
// 	return(
// 		<div>
// 		<Child1 data1=[data]/>
//         <Child2 data={data}/>
// 		</div>
// 	);
// }

// export default ParentComponent

import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2'

class Parent extends React.Component{	
	state = {
		msg: "",
	}

	handleCallback = (childData) =>{
		this.setState({msg: childData})
	}

	render() {
		const {msg} = this.state;
		return(
		<div>
			<h1> {msg}</h1>
			<Child1/>
			<Child2 parentCallback = {this.handleCallback}/>	
		</div>
		);
	}
}

export default Parent;