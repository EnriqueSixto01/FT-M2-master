import React from "react";
import SearchBar from "./SearchBar";
import Logo from "../logoHenry.png";
import n from "../styles/Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <>
      <div className={n.nav}>
        <div>
          <img className={n.logo} src={Logo} alt="logo" />
        </div>
        <p className={n.text}>Henry Weather-App</p>
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
}
