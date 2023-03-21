import { async } from "@firebase/util";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { AppDispatch } from "../..";
import { auth, provider } from "../../../firebase";
import { IUser } from "../../../models";
import {
  AuthActionEnum,
  setAuthAction,
  setErrorAction,
  setLoadingAction,
  setUserAction,
} from "./types";

export const authActionCreator = {
  setUser: (user: IUser): setUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),

  setIsAuth: (auth: boolean): setAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),

  setLoading: (loading: boolean): setLoadingAction => ({
    type: AuthActionEnum.SET_LOADING,
    payload: loading,
  }),

  setError: (error: string): setErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),

  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authActionCreator.setLoading(true));
      setPersistence(auth, browserSessionPersistence).then(async () => {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch(
          authActionCreator.setUser({
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
          })
        );
      });
      dispatch(authActionCreator.setIsAuth(true));
    } catch (error) {
      dispatch(authActionCreator.setError("Невірно введений email чи пароль"));
    }
  },

  register:
    (email: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(authActionCreator.setLoading(true));
        setPersistence(auth, browserSessionPersistence).then(async () => {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          dispatch(
            authActionCreator.setUser({
              email: user.email,
              photoURL: user.photoURL,
              displayName: user.displayName,
            })
          );
        });
        dispatch(authActionCreator.setIsAuth(true));
      } catch (error) {
        dispatch(
          authActionCreator.setError("Користувач з таким email вже існує")
        );
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    try {
      await signOut(auth);
      dispatch(
        authActionCreator.setUser({
          email: "",
          photoURL: "",
          displayName: "",
        })
      );
    } catch (error) {
      dispatch(authActionCreator.setError("Щось пішло не так"));
    }
    dispatch(authActionCreator.setIsAuth(false));
  },

  loginWithGoogle: () => async (dispatch: AppDispatch) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      dispatch(
        authActionCreator.setUser({
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
        })
      );
    } catch (error) {
      dispatch(authActionCreator.setError("Щось пішло не так"));
    }
    dispatch(authActionCreator.setIsAuth(true));
  },

  autologin: (user: User | null) => (dispatch: AppDispatch) => {
    dispatch(authActionCreator.setLoading(true));
    dispatch(
      authActionCreator.setUser({
        email: user?.email || "",
        photoURL: user?.photoURL || "",
        displayName: user?.displayName || "",
      })
    );
    if (user) {
      dispatch(authActionCreator.setIsAuth(true));
    }
  },
};

// приймає інфу про киристувача і вертає екшн
// по анології зробити реєстрацію
