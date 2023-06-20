import { check, token } from ".././Api";
import { useEffect, useState } from "react";

const Home = () => {
  const [tokens, setTokens] = useState(token());
  useEffect(() => {
    if (tokens === null || tokens === undefined) {
      window.location = "/login";
    }
  }, []);
  return (
    <>
      <p>{tokens}</p>
    </>
  );
};

export default Home;
