// import './App.css';
// import Header from './Header.js';
// import Content from './Content.js';
// import Footer from './Footer.js';
// import { LoginForm } from './component/LoginForm';

// function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header/>
//         <Content />
//         <LoginForm/>
//         <Footer/>
//       </header>
//     </div>
//   );
// }

// export default App;
// function App() {
//   const handlepreventDefault = e => {
//       e.preventDefault();
//       console.log("clicked on preventDefault")
//   }
//   const handlestopPropagation = e => {
//       e.stopPropagation();
//       console.log("clicked on stopPropagation")
//   }

//   const insideDiv = (e) => {
//       e.stopPropagation();
//       console.log("clicked on Div")
//   }
//   return (
//       <div className="App">
//           <form>
//               Type anything: <input />
//               <button type="submit" 
//                   onClick={handlepreventDefault}>
//                   preventDefault()
//               </button>
//               <span onClick={handlestopPropagation}>
//                   stopPropagation()
//                   <span onClick={insideDiv}> Inside div</span>
//               </span>
//               <button type="submit">submit</button>

//           </form>
//       </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';


/*
import React, { useRef } from 'react';

function App() {
const inputRef = useRef(null);

function handleSubmit() {
	alert(`Name: ${inputRef.current.value}`);
}

return (
	<div className="App">
	<h3>Uncontrolled Component</h3>
	<form onSubmit={handleSubmit}>
		<label>Name :</label>
		<input type="text" name="name" ref={inputRef} />
		<button type="submit">Submit</button>
	</form>
	</div>
);
}

export default App;

*/

// import { useState } from 'react';

// function App() {
// const [name, setName] = useState('');

// function handleSubmit() {
// 	alert(`Name: ${name}`);
// }
	
// return (
// 	<div className="App">
// 	<h3>Controlled Component</h3>
// 	<form onSubmit={handleSubmit}>
// 		<label>Name:</label>
// 		<input name="name" value={name} onChange={(e) => setName(e.target.value)} />
// 		<button type="submit">Submit</button>
// 	</form>
// 	</div>
// );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("Dibya");
//   const changeName = () => {
//     setName("Prakash");
//   };

//   return (
//     <div>
//       <p>My name is {name}</p>
//       <button onClick={changeName}> Click me </button>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your Name"
//         />
//         <p>{name}</p>
//       </form>
//     </div>
//   );
// }

// export default App;



/*

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the button ${count} times`)
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;

*/


// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`You have clicked the first button ${count} times`);
//   }, [count]);

//   const [count2, setCount2] = useState(0);

//   useEffect(() => {
//     console.log(`You have clicked the second button ${count2} times`)
//   }, [count2]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <button onClick={() => setCount2(count2 + 1)}>Click me</button>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect} from 'react'

// function useFetchData(url) {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => setData(data))
//         .catch((err) => console.log(`Error: ${err}`));
//     }, [url]);

//     return { data };
// }

// export default useFetchData

// import useFetchData from './useFetchData'
 
// function Users() {
//     const { data } = useFetchData("https://api.github.com/users");

//   return (
//       <div>
//           {data && (
//             data.map((user) =>(
//                 <div className="text-white" key={user.id}>
//                     <h1> {user.login} </h1>
//                     <p> { user.type } </p>
//                 </div>
//             ))
//           )}
//       </div>
//   )
// }

// export default Users;
