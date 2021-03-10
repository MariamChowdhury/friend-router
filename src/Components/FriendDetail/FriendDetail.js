import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h4>Friend no {friendId}</h4>
      <h2>{friend.name}</h2>
      <h4>{friend.email}</h4>
      <h4>{friend.website}</h4>
    </div>
  );
};

export default FriendDetail;
