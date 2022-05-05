import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./faribase";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { AppRouter } from "./navigate/AppRouter";
import { authActionCreator } from "./store/reducers/auth/actionCreator";

function App() {
  const dispatch = useDispatch();
  const { loading } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((user) => {
      dispatch(authActionCreator.autologin(user));
      return unsubsribe;
    });
  }, [dispatch]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
