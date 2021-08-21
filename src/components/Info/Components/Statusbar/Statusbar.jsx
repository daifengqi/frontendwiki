import React from 'react';
import StatusItem from "../../Items/StatusItem/StatusItem.jsx";
import styles from './Statusbar.module.css'

class Statusbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            Status: {}
        }
    }

    render() {
        return (
            <div className={styles.statusbar}>
                <div className={styles.statusbar}>
                    {
                        this.state.Status.map((item) => {
                            return <StatusItem key={item[0]} title={item[0]} count={item[1]} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Statusbar;