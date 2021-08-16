import React,{useEffect} from "react";
import styles from "./index.module.css";


function HomeHead() {
    return (
        <>
            <HomeTopBar/>
            <div className={styles.backBlock + " flexCenter"}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.title}>前端维基 Frontend Wiki</h1>
                    <p>
                        前端维基是一个前端知识库索引，通过建立一个树状知识结构组织的前端知识学习资料链接索引，
                        对知识领域进行分档、标签化归类，让用户可通过点赞、评论等方式推荐出该领域下的优质资源。
                    </p>
                </div>
                <HomeBottom/>
            </div>
        </>
    );
}


class HomeTopBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dark:true
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    handleScroll=(e)=>{
        let top=document.documentElement.scrollTop;
        if(top>=(document.documentElement.clientHeight+50)){
            return;
        }else if(top<=(document.documentElement.clientHeight-80)){
            return;
        }
        if (top>=document.documentElement.clientHeight-50) {
            this.setState({
                dark:false
            })
        }else{
            this.setState({
                dark:true
            })
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll');
    }
    render(){
        return(
            <div className={styles.homeTopBar+" main flexRow "+(this.state.dark?'':styles.homeTopBarDark)} >
                <div className={styles.topBarButton}>
                    注册
                </div>
                <div className={styles.topBarButton}>
                    登录
                </div>
            </div>
        )
    }
}
function HomeBottom() {
    return (
        <div className={styles.homeBottom + " flexCenter"} onClick={()=>document.getElementById('mainContent').scrollIntoView({behavior:'smooth'})}>
            <div className={styles.svgBlock + " flexCenter"}>
                <svg t="1629011076670" className="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4663" width="75" height="75">
                    <path d="M166.912 799.744q-28.672 28.672-69.12 28.672t-69.12-28.672q-29.69599999-28.672-29.696-68.608t29.696-68.608l382.976-380.928q12.288-14.336 30.72-19.968t38.912-4.608 40.448 8.704 34.304 22.016l376.832 374.784q29.69599999 28.672 29.696 68.608t-29.696 68.608q-14.336 14.336-32.256 21.504t-36.864 7.168-37.376-7.168-32.768-21.504l-313.344-309.248z" p-id="4664" fill="#ffffff88"></path>
                </svg>
            </div>
        </div>
    )
}
export default HomeHead;