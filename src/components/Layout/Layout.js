import React from "react";
import styles from "./Layout.module.css"

const layout = (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrops</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </>
)

export default layout;