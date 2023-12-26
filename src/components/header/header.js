import React from "react";
import { Button } from "react-bootstrap";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../../assests/header_logo.png";
import "./header.css";
import BadgeCount from "../counts/count";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img className="header_logo" src={logo} alt="header_logo" />
      </div>
      <div className="header_dropdown">
        <span>
          Home <ExpandMoreIcon />{" "}
        </span>
        <span>
          Pages <ExpandMoreIcon />{" "}
        </span>
        <span>
          Courses <ExpandMoreIcon />{" "}
        </span>
        <span>
          Blog <ExpandMoreIcon />{" "}
        </span>
        <span>
          Contact <ExpandMoreIcon />{" "}
        </span>
      </div>
      <div className="header_icons">
        <SearchIcon className="icons" />
        <span style={{ position: "relative" }}>
          <BadgeCount />
          <FavoriteBorderIcon className="icons" />
        </span>
        <span style={{ position: "relative" }}>
          <BadgeCount />
          <ShoppingCartOutlinedIcon className="icons" />
        </span>
      </div>
      <div className="header_button">
        <Button variant="success">
          Try for free <ArrowForwardIcon className="header_arrow_icon" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
