import React from 'react';

import ParentComponent from './component/ParentComponent';

const Content = () => {
    const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Dave'];
		const int = Math.floor (Math.random() * 3);
		return names[int];
	}
  const myHandleClick =() =>{
    console.log("button is click")
  }
  const myHandleClick2 =(fname) =>{
    console.log(` ${fname}  button is clicked`)
  }
  const myHandleClick3 =(e) =>{
    console.log(e)
  }
  
  return (
    <main>
        <header className="App-header">
        <p onDoubleClick={myHandleClick}>
          Hello {handleNameChange()}!
        </p>
      </header>
        <button onClick={myHandleClick}>Click Button</button>
        <button onClick={() =>myHandleClick2('sagar')}>Click Button</button>
        <button onClick={(e) =>myHandleClick3(e.target.innerText)}>Click Button3</button>
      <ParentComponent/>
      </main>
  )
}

export default Content