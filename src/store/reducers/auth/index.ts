import { IUser } from "../../../models"
import { AuthAction, AuthActionEnum, AuthState } from "./types"

const initialState: AuthState =  {
    isAuth: false,
    user: {} as IUser,
    error: "",
    loading: false
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch(action.type) {
        case AuthActionEnum.SET_AUTH: 
        return {...state, isAuth: action.payload}
        case AuthActionEnum.SET_USER:
        return {...state, user: action.payload, loading: false}
        case AuthActionEnum.SET_LOADING:
        return {...state, loading: action.payload}
        case AuthActionEnum.SET_ERROR:
        return {...state, error: action.payload, loading: false}
        default: 
        return state
    }
}


