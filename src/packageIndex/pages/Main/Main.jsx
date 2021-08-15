import React,{Component} from "react";
import HomeHead from '../../components/HomeHead/index.jsx';
import HomeMain from '../../components/HomeMain/index.jsx';
import style from './Main.module.css';

class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{width:'100vw'}} className="flexColumn">
                <HomeHead/>
                <HomeMain/>
            </div>
        )
    }
}

export default Main;