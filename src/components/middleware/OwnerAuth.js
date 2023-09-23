import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authenticated } from "../../store";
import { role, token } from "../../Api";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

function OwnerAuth(props) {
  const auth = useRecoilValue(authenticated);
  const [tokens, setTokens] = useState(token());
  const [roles, setRoles] = useState(role());
  const location = useLocation();

  if (roles != process.env.REACT_APP_OWNER || tokens === undefined) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return props.children;
}

export default OwnerAuth;
