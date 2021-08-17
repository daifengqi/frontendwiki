import React from "react";
import styles from "./StatusItem.module.css";

class StatusItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { title, count } = this.props;

        return (
            <>
                <div className={styles.Item}>
                    <p>{count}</p>
                    <h3>{title}</h3>
                </div>
            </>
        );
    }
}

export default StatusItem;
