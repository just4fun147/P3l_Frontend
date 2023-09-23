import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authenticated } from "../../store";
import { token, role } from "../../Api";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

function Authenticated(props) {
  const auth = useRecoilValue(authenticated);
  const [roles, setRoles] = useState(role());
  const [tokens, setTokens] = useState(token());
  const location = useLocation();

  if (tokens === undefined || roles != process.env.REACT_APP_CONSUMEN) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return props.children;
}

export default Authenticated;
