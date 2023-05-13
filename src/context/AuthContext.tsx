import { createContext, useReducer } from "react";

import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}


export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}


export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
    logout: () => void;
    changeUserName: (userName: string) => void;
}


export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeUserName = (userName: string) => {
        dispatch({ type: 'chanceUserName', payload: userName })
    }
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            logout,
            changeUserName,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

