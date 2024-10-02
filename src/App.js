import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import TestSu from "./pages/auth/TestSu";
import Test from "./pages/pagenotfound/Test";
import { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("/dj-rest-auth/user/");
      setCurrentUser(data);
      console.log(currentUser);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />

          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/testsu" element={<TestSu />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </setCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
