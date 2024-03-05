import { Provider } from "react-redux";
import "./App.css";
import RegisterView from "./features/register/RegisterView";
import { useAppSelector } from "./app/hooks";
import Loading from "./components/loading";
import LoginView from "./login/loginView";
import Message from "./components/message";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import ManageEmployee from "./mainPage/manageEmployee";
import { setAuthToken } from "./app/customHooks/setAuthToken";

function App() {
  const LoadCheck = useAppSelector((state) => state.loading.loading);
  const valFailed = useAppSelector((state) => state.message.failed);
  const valSuccess = useAppSelector((state) => state.message.success);
  /* console.log(LoadCheck, "checkkk");
  console.log(valFailed, "failed");
  console.log(valSuccess, "success"); */
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }
 


  return (
    <Router>
      <Routes>
      <Route
          path="/Login"
          element={
            <div>
              {LoadCheck && <Loading />}
              {(valFailed || valSuccess) && <Message />} <LoginView />
            </div>
          }
        />
        <Route
          path="/Register"
          element={
            <div>
              {LoadCheck && <Loading />}
              {(valFailed || valSuccess) && <Message />} <RegisterView />
            </div>
          }
        />

        <Route
          path="/manageEmployees"
          element={
            <div>
              {LoadCheck && <Loading />}
               <ManageEmployee />
            </div>
          }
        />
       
      </Routes>
    </Router>
  );
}

export default App;
