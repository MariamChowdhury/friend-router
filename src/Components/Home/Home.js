import { useEffect, useState } from "react";
import Friends from "../Friends/Friends";

const Home = () => {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    
    <div>
      {friend.map((friend) => (
        <Friends friend={friend}></Friends>
      ))}
    </div>
  );
};

export default Home;