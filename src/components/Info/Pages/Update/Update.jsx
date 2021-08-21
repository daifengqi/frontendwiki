import React from 'react';

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Movies: ['JOJO', 'Gundam', 'EVA']
        }
    }

    render() {
        return (
            <div className="Update">
                <h3>更新个人信息~</h3>
            </div>
        );
    }
}

export default Update;