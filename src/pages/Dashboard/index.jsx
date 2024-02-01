import styles from "./Dashboard.module.css";

import Profile from "../../components/Profile";
import Uploader from "./components/Uploader";
import SideBar from "../../components/Sidebar/SideBar";
import { useState } from "react";

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div>
      <div className={styles["dashb__container"]}>
        <Profile setOpenSideBar={setOpenSideBar} />
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <Uploader />
      </div>
    </div>
  );
};

export default Dashboard;
