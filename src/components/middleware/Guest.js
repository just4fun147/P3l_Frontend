import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { authenticated } from "../../store";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { role } from "../../Api";

function Guest(props) {
  const auth = useRecoilValue(authenticated);
  const [roles, setRoles] = useState(role());
  const location = useLocation();

  if (roles === process.env.REACT_APP_ADMIN) {
    return <Navigate to="/room-management" state={{ from: location }} />;
  }
  return props.children;
}

export default Guest;
