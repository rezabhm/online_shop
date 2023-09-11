import About from "./Pages/About";

import Home from "./Pages/Home";

import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignUpPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  {
    path: "/SignupPage",
    element: <SignupPage />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
];
export default routes;
