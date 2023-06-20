import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { authenticated } from "../../store";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { token } from "../../Api";

function Guest(props) {
  const auth = useRecoilValue(authenticated);
  const [tokens, setTokens] = useState(token());
  const location = useLocation();

  if (tokens !== undefined) {
    return <Navigate to="/home" state={{ from: location }} />;
  }
  return props.children;
}

export default Guest;
