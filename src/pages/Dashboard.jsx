import "./Dashboard.css";
import SideBar from "../components/SideBar";
import Profile from "../components/profile";
import Uploader from "../components/Uploader";

const Dashboard = () => {
  return (
    <div>
      <div className="dashb__container">
        <Profile />
        <SideBar />
      
        <Uploader />
      </div>
    </div>
  );
};

export default Dashboard;
