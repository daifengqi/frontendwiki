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

    DeleteItem = (id, type) =>{
        this.props.onDelete(id, type);
    }

    display = ()=>{
        if(this.state.type === 'link')
            return this.state.originData.map((item, index) => {
                return <LinkItem
                    key={index}
                    id={item.w_link.id}
                    title={item.w_link.term}
                    thumbs={item.thumbNums}
                    author={item.w_link.creatorId}
                    tag={item.w_link.tag}
                    intro={item.w_link.intro}
                    url={item.w_link.url}
                    onDelete={this.DeleteItem.bind(this)}
                />
            })
        else if(this.state.type === 'posts')
            return this.state.originData.map((item, index)=> {
                return <LinkItem
                    key={index}
                    id={item.id}
                    title={item.term}
                    thumbs={item.thumbNums}
                    author={item.creatorId}
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