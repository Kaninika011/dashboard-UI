import styles from "./Dashboard.module.css";

import Profile from "../../components/profile";
import Uploader from "../../components/Uploader";
import SideBar from "../../components/Sidebar/SideBar"

const Dashboard = () => {
  return (
    <div>
      <div className={styles["dashb__container"]}>
        <Profile />
        <SideBar/>
        <Uploader />
      </div>
    </div>
  );
};

export default Dashboard;
