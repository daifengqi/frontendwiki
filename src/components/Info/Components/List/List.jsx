/**
 * @author 季悠然
 * @date 2021-08-19
 */
import React from 'react';
import LinkItem from "../../Items/LinkItem/LinkItem.jsx";
import CommentItem from "../../Items/CommentItem/CommentItem.jsx";

class List extends React.Component {
    constructor(props) {
        super(props);
        let { data, type } = props;
        this.state = {
            originData: data,
            type: type
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //根据nextProps和prevState计算出预期的状态改变，返回结果会被送给setState
        return {
            originData: nextProps.data
        };
    }

    DeleteItem = (id) =>{
        this.props.onDelete(id);
    }

    display = ()=>{
        if(this.state.type !== 'comments')
            return this.state.originData.map((item, index) => {
                return <LinkItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    thumbs={item.thumbs}
                    author={item.author}
                    tag={item.tag}
                    intro={item.intro}
                    url={item.url}
                    onDelete={this.DeleteItem.bind(this)}
                />
            })
        else
            return this.state.originData.map((item, index)=>{
                return <CommentItem
                    key={index}
                    content={item.content}
                    author={item.creator}
                    date={item.createDate}
                    id={item.id}
                    link_id={item.linkId}
                    onDelete={this.DeleteItem.bind(this)}
                />
            })
    }

    render() {
        return (
            <>
                { this.display() }
            </>
        );
    }
}

export default List;