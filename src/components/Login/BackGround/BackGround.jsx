import React from "react";
import styles from "./BackGround.module.css";
import LoginInput from "../LoginInput/LoginInput.jsx";



class BackGround extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          login: "login"
        }
    }

    render() {
        return (
            <>
                <a href="./index.html" className={styles.back}>
                  返回主页
                </a>
                
                <div className={styles.container}>
                  <div className={styles.optionsContainer}> 
                    <div className={styles.optionsText}>
                      <div className={styles.optionsUnregistered}>
                        <h2>没有账号？</h2>
                        <p>点击按钮注册成为会员</p>
                        <button
                          className={styles.choiceButton}
                          onClick={() => this.setState({login: 'signup'})}
                        >
                          注册
                        </button>
                      </div>
                      <div className={styles.optionsRegistered}>
                        <h2>已有账号?</h2>
                        <p>点击按钮会员登录</p>
                        <button
                          className={styles.choiceButton}
                          onClick={() => this.setState({login: 'login'})}
                        >
                          登录
                        </button>
                      </div>
                    </div>

                    <LoginInput login={this.state.login} />
                  </div>
                </div>
            </>
        );
    }
}

export default BackGround;
