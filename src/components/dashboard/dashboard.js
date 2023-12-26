import React from "react";
import "./dashboard.css";
import { Button } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard_text">
        <h1>Yoga A Way of Feeling Relaxed & Calm!</h1>
        <p>
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit.
        </p>
        <Button className="dashboard_button">
          Find Course <ArrowForwardIcon className="dashboard_icon" />
        </Button>
      </div>
      <div className="dashboard_image">
        <img
          src="https://edublink.react.devsblink.com/assets/images/banner/girl-3.webp"
          alt="dashboard_image"
        />
      </div>
    </section>
  );
};

export default Dashboard;
