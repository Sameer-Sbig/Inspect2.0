import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import CustomTable from "../table/CustomTable";
import classes from "./Report.module.css";
import ManageSurveyMain from "../manageSurvey/ManageSurveyMain";
import CustomModal from "../modal/CustomModal";

const Report = () => {
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const height = "calc(100vh - 100px) !important ";

  const columns = [
    {
      label: "PIN Number",
      id: "pinNumber",
      hyperLink: true,
    },
    {
      label: "Registration Number",
      id: "registrationNumber",
    },
    {
      label: "Customer Name",
      id: "customerName",
    },
    {
      label: "Mobile Number",
      id: "mobileNo",
    },
    {
      label: "Email ID",
      id: "emailId",
    },
    {
      label: "City Name",
      id: "cityName",
    },
    {
      label: "District Name",
      id: "districtName",
    },
    {
      label: "Decision",
      id: "decision",
    },
  ];

  const data = [
    {
      pinNumber: "110001",
      registrationNumber: "DL-123456",
      customerName: "Rahul Sharma",
      mobileNo: "9876543210",
      emailId: "rahul.sharma@example.com",
      cityName: "New Delhi",
      districtName: "Central Delhi",
      decision: "Approved",
    },
    {
      pinNumber: "400001",
      registrationNumber: "MH-654321",
      customerName: "Priya Patel",
      mobileNo: "8765432109",
      emailId: "priya.patel@example.com",
      cityName: "Mumbai",
      districtName: "Mumbai City",
      decision: "Pending",
    },
    {
      pinNumber: "600001",
      registrationNumber: "TN-987654",
      customerName: "Suresh Kumar",
      mobileNo: "7654321098",
      emailId: "suresh.kumar@example.com",
      cityName: "Chennai",
      districtName: "Chennai District",
      decision: "Rejected",
    },
    {
      pinNumber: "700001",
      registrationNumber: "WB-234567",
      customerName: "Ananya Das",
      mobileNo: "6543210987",
      emailId: "ananya.das@example.com",
      cityName: "Kolkata",
      districtName: "Kolkata District",
      decision: "Approved",
    },
    {
      pinNumber: "560001",
      registrationNumber: "KA-345678",
      customerName: "Amit Sharma",
      mobileNo: "5432109876",
      emailId: "amit.sharma@example.com",
      cityName: "Bengaluru",
      districtName: "Bangalore Urban",
      decision: "Pending",
    },
    {
      pinNumber: "500001",
      registrationNumber: "AP-456789",
      customerName: "Neha Reddy",
      mobileNo: "4321098765",
      emailId: "neha.reddy@example.com",
      cityName: "Hyderabad",
      districtName: "Hyderabad District",
      decision: "Rejected",
    },
    {
      pinNumber: "411001",
      registrationNumber: "MH-567890",
      customerName: "Akash Verma",
      mobileNo: "3210987654",
      emailId: "akash.verma@example.com",
      cityName: "Pune",
      districtName: "Pune District",
      decision: "Approved",
    },
    {
      pinNumber: "600018",
      registrationNumber: "TN-678901",
      customerName: "Divya Singh",
      mobileNo: "2109876543",
      emailId: "divya.singh@example.com",
      cityName: "Coimbatore",
      districtName: "Coimbatore District",
      decision: "Pending",
    },
    {
      pinNumber: "700032",
      registrationNumber: "WB-789012",
      customerName: "Rajesh Khanna",
      mobileNo: "1098765432",
      emailId: "rajesh.khanna@example.com",
      cityName: "Howrah",
      districtName: "Howrah District",
      decision: "Rejected",
    },
    {
      pinNumber: "110020",
      registrationNumber: "DL-890123",
      customerName: "Swati Gupta",
      mobileNo: "9876543210",
      emailId: "swati.gupta@example.com",
      cityName: "Noida",
      districtName: "Gautam Buddh Nagar",
      decision: "Approved",
    },
    {
      pinNumber: "400706",
      registrationNumber: "MH-901234",
      customerName: "Amit Kumar",
      mobileNo: "8765432109",
      emailId: "amit.kumar@example.com",
      cityName: "Navi Mumbai",
      districtName: "Thane District",
      decision: "Pending",
    },
    {
      pinNumber: "600032",
      registrationNumber: "TN-012345",
      customerName: "Sangeeta Rao",
      mobileNo: "7654321098",
      emailId: "sangeeta.rao@example.com",
      cityName: "Madurai",
      districtName: "Madurai District",
      decision: "Rejected",
    },
    {
      pinNumber: "700027",
      registrationNumber: "WB-345678",
      customerName: "Sanjay Mishra",
      mobileNo: "6543210987",
      emailId: "sanjay.mishra@example.com",
      cityName: "Siliguri",
      districtName: "Darjeeling District",
      decision: "Approved",
    },
    {
      pinNumber: "560011",
      registrationNumber: "KA-678901",
      customerName: "Anusha Pai",
      mobileNo: "5432109876",
      emailId: "anusha.pai@example.com",
      cityName: "Mysuru",
      districtName: "Mysuru District",
      decision: "Pending",
    },
    {
      pinNumber: "500080",
      registrationNumber: "AP-789012",
      customerName: "Kiran Kumar",
      mobileNo: "4321098765",
      emailId: "kiran.kumar@example.com",
      cityName: "Visakhapatnam",
      districtName: "Visakhapatnam District",
      decision: "Rejected",
    },
  ];

  const cellClicked = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className={classes.TableOutline}>
        <CustomModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          width={1200}
          height={height}
          children={ <ManageSurveyMain />}
        >
        </CustomModal>

        <CustomTable
          page={page}
          setPage={setPage}
          columns={columns}
          data={data}
          isNavLink={true}
          cellClicked={cellClicked}
        />

      </div>
    </>
  );
};

export default Report;
