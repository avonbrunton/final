import { useSelector } from "react-redux";

const TabDashboard = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div class="ltn__myaccount-tab-content-inner">
      <p>
        Hello <strong>{user?.first_name + " " + user?.last_name}</strong> (not{" "}
        <strong>{user?.first_name + " " + user?.last_name}</strong>?{" "}
        <small>
          <a href="login-register.html">Log out</a>
        </small>{" "}
        )
      </p>
      <p>
        From your account dashboard you can view your <span>recent orders</span>
        , manage your <span>shipping and billing addresses</span>, and{" "}
        <span>edit your password and account details</span>.
      </p>
    </div>
  );
};
export default TabDashboard;
