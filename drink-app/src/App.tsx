import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import { ClerkProvider, RedirectToSignIn, SignedOut } from "@clerk/clerk-react";
import Home from "./pages/home/Home";
import SignInCustom from "./pages/sign-in/SignInCustom";
import SignUpCustom from "./pages/sign-up/SignUpCustom";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignInCustom />} />
          <Route path="/sign-up" element={<SignUpCustom />} />
          <Route
            path="/home"
            element={
              <>
                <Home />{" "}
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </Router>{" "}
    </ClerkProvider>
  );
}

export default App;
