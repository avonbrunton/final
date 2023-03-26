import Header from "../components/Header";
import Fotter from "../components/Fotter";
import AccountSection from "../components/AccountSection";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Account = () => {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user == null) {
      window.location.href = "/login";
    }
  }, [user]);
  return (
    <>
      <Header />
      <AccountSection />
      <Fotter />
    </>
  );
};
export default Account;
