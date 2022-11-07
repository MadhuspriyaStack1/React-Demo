// import React, { useState } from "react";

// const Form = () => {
//   const data = {
//     name: "",
//     email: "",
//   };
//   const [state, setState] = useState(data);
//   console.log("🚀 ~ file: Form.js ~ line 9 ~ Form ~ state", state)
//   const [error, setError] = useState(false);

//   const handleChange = (e) => {
//     if(state.name.length < 3){
//         setError(true)
//     }
//     setState( {...state, [e.target.name]: e.target.value} )
//       setError(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setState(data);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter the UserName"
//             value={state.name}
//             onChange={handleChange}
//             name="name"
//           />
//           {error ? "message" : ""}
//           <br />
//           <input
//             type="email"
//             placeholder="Enter the Email"
//             value={state.email}
//             onChange={handleChange}
//             name="email"
//             // error={setError}
//           />
//           <br />
//           <div>
//             <button disabled={error ? true : false} type="submit" value="submite">
//               Save changes
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;
