import React from "react";
import { useHistory } from "react-router-dom";
const Friends = (props) => {
  const { name, email, id } = props.friend;
  const friendStyle = {
    border: "1px solid lightblue",
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
  };
  let history = useHistory();
  const handleClick = (id) => {
    const link = `/friend/${id}`;
    history.push(link);
  };
  return (
    <div style={friendStyle}>
      <h2>Name: {name}</h2>
      <h4>Email: {email}</h4>
      <button onClick={() => handleClick(id)}>Click for details.</button>
    </div>
  );
};

export default Friends;
