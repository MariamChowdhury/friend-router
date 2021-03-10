import { useEffect, useState } from "react";
import "./App.css";
import Friends from "./Components/Friends/Friends";

function App() {
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
}

export default App;
