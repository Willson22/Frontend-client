import React from "react";
import styles from "../css/area.module.css"

function Area({ place }) {
    return (
        <h1>
            Oblast{" "}
            <span area={styles.areaNameHeader}>
                { place }
            </span>
        </h1>
    )
}

export default Area;