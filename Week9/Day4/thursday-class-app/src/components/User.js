// import { userStyle } from "./styling";
// import Button from "react-bootstrap/Button";
import "./User.css";

import React from "react";

// class User extends React.Component {
//   render() {
//     const { name, email, id, username } = props.userinfo;
//     return (
//       <div className="tc bg-light-green br3 ma2 dib bw2 grow shadow-5">
//         <img
//           src={`https://robohash.org/${id}?size=150x150
// `}
//           alt=""
//         />
//         <h2>{name}</h2>
//         <h2>{email}</h2>
//         <h2>{username}</h2>
//       </div>
//     );
//   }
// }

const User = (props) => {
  const { name, email, id, username } = props.userinfo;

  return (
    <div className="tc bg-light-green br3 ma2 dib bw2 grow shadow-5">
      <img
        src={`https://robohash.org/${id}?size=150x150
`}
        alt=""
      />
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{username}</h2>
      {/* <Button variant="warning">More Info</Button> */}
    </div>
  );
};

export default User;
