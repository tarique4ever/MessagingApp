import Signin from "./containers/signin";
import Message from "./containers/message";
import Signup from "./containers/Signup";
import {useSelector} from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Test from "./containers/Test";



function App() {
  // const loggedinUser = useSelector(state=>state.userReducer.users[0].email)
  
  // console.log(loggedinUser)
  function PrivateRoute() {
    const navigate = useNavigate();
    const user =localStorage.getItem('user')
    return user ? <Outlet /> : <Signin />;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact element={<PrivateRoute />}>
            <Route path="/" element={<Message  />} />
          </Route> */}
          <Route path="/" element={<Message  />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/t" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
