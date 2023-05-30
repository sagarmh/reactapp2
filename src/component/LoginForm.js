import * as React from 'react';

const LoginForm = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value

    alert(email + ' ' + password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export { LoginForm };

//controlled form

// import * as React from 'react';

// const LoginForm = () => {
//   const [form, setForm] = React.useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (event) => {
//     setForm({
//       ...form,
//       [event.target.id]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     alert(form.email + ' ' + form.password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="text"
//           value={form.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           value={form.password}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export { LoginForm };