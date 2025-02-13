import { useEffect, useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <div>
      <h2>Welcome to University Insights</h2>
      {isLoggedIn ? <p>You are logged in!</p> : <p>Please login or register.</p>}
    </div>
  );
};

export default Home;
