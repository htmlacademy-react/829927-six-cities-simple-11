import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

interface PrivateRouteProps {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({ authorizationStatus, children }: PropsWithChildren<PrivateRouteProps>): React.ReactNode {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
