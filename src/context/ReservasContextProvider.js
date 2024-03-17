import { useContext, useEffect, useState } from "react";
import { ReservasContext } from "./ReservasContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useReservasContext = () => useContext(ReservasContext);

export const ContextProvider = ({ children, auth, app }) => {
  const [userId, setUserId] = useState(10);

  console.log(auth, app);

  useEffect(() => {
    const auth = getAuth();
    auth,
      (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          setUserId(user);
        } else {
          console.log("Not loged");
        }
      };
  }, []);

  console.log(userId);

  const store = {
    userId,
    setUserId,
  };

  return <ReservasContext.Provider value={store}> {children}</ReservasContext.Provider>;
};
