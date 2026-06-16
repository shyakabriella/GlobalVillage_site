import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

/**
 * Wraps protected routes. Unauthenticated users are redirected to /login
 * with the current path saved as `?returnTo=...` so they land back after
 * logging in.
 */
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ returnTo: location.pathname + location.search }}
        replace
      />
    );
  }

  // Support both <ProtectedRoute><Child /></ProtectedRoute> and nested <Outlet />
  return children ? <>{children}</> : <Outlet />;
}
