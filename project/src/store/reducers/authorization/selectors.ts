import { AuthorizationStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';
import { IUser } from '../../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.Authorization].authorizationStatus;
export const getUser = (state: State): IUser => state[NameSpace.Authorization].user;
