import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import classes from "./Dashboard.module.css"
import CustomTable from "../table/CustomTable"
import { useState } from "react";

const Dashboard = () => {
    const [page, setPage] = useState(0);
  const columns = [
    {
      label: "Month",
      id: "month",
    },
    {
      label: "Recommended",
      id: "recommended",
      //   hyperLink: true
    },
    {
      label: "Rejected",
      id: "rejected",
    },
    {
      label: "Extra KM Requested",
      id: "extrakmrequested",
    },
  ];

  const data = [
    {
      month: "January",
      recommended: 15,
      rejected: 10,
      extrakmrequested: 5,
    },
    {
      month: "February",
      recommended: 15,
      rejected: 10,
      extrakmrequested: 5,
    },
    {
      month: "March",
      recommended: 15,
      rejected: 10,
      extrakmrequested: 5,
    },
    {
      month: "April",
      recommended: 15,
      rejected: 10,
      extrakmrequested: 5,
    },
    {
      month: "May",
      recommended: 15,
      rejected: 10,
      extrakmrequested: 5,
    },
    {
      month: "June",
      recommended: 15,
      rejected: 10,
      extrakmrequested: 5,
    },
    {
      month: "July",
      recommended: 15,
      rejected: 10,
      extrakmrequested: 5,
    },
    {
      month: "August",
      recommended: 23,
      rejected: 13,
      extrakmrequested: 34,
    },
    {
      month: "September",
      recommended: 35,
      rejected: 25,
      extrakmrequested: 10,
    },
    {
      month: "October",
      recommended: 10,
      rejected: 12,
      extrakmrequested: 35,
    },
    {
      month: "November",
      recommended: 35,
      rejected: 5,
      extrakmrequested: 50,
    },
    {
      month: "December",
      recommended: 20,
      rejected: 10,
      extrakmrequested: 15,
    },
  ];

  return (
    <>
    <div>
      
      <div  style={{
        display:'flex',
        // flexDirection:'row'
      }}>
      <div>
      <Sidebar></Sidebar>

      </div>
      <div className={classes.MainBody}>
      <CustomTable page={page} setPage={setPage}  columns={columns} data={data} />

      </div>
      </div>
      
      </div>
    </>
  );
};

export default Dashboard;
