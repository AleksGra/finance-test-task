import React from "react";
import loadingSpinner from "../assets/Loading_icon.gif";
import styles from "../styles/Preloader.module.css";

const Preloader = () => {
    return (
        <div className={styles.container}>
            <img src={loadingSpinner} alt="loadingSpinner"/>
        </div>
    );
};

export default Preloader;
