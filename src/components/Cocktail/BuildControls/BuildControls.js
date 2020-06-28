import React from "react";
import styles from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "SourMix", type: "sourmix" },
    { label: "Cranberry", type: "cranberry" },
    { label: "PeachLiquor", type: "peachliquor" }
]


const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
             />
        ))}
        <button className={styles.ShakeButton}
                disabled = {!props.shakable}>SHAKE</button>
    </div>
);

export default buildControls;