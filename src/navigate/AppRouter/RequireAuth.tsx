import { Navigate, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuth } = useTypedSelector((state) => state.auth);
  let location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
