/**
 * @author 季悠然
 * @date 2021-08-19
 */
import React from 'react';
import LinkItem from "../../Items/LinkItem/LinkItem.jsx";

class List extends React.Component {
    constructor(props) {
        super(props);
        let { data } = props;
        this.state = {
            originData: data
        };
    }

    render() {
        return (
            <>
                {
                    this.state.originData.map((item, index) => {
                        return <LinkItem
                            key={index}
                            title={item.title}
                            thumbs={item.thumbs}
                            author={item.author}
                            tag={item.tag}
                            intro={item.intro}
                            url={item.url}
                        />
                    })
                }
            </>
        );
    }
}

export default List;