import React from "react";
import styles from "./LoginInput.module.css";

class LoginInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

      let isLogin = this.props.login;
      
      if(isLogin === 'login'){
        return (
          <>
              <div className={styles.optionsFormRight} id='bounceLeft'>

                <div className={styles.formLogin} id='login'>
                  <h1 className={styles.title}>邮箱登录</h1>
                  <form>
                    <div>
                      <div>
                        <input type="email"
                          placeholder="邮箱"
                        className={styles.formInput}></input>
                      </div>
                      <div>
                        <input type="password"
                          placeholder="密码"
                        className={styles.formInput}></input>
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <button className={styles.buttomForgot} type="button">忘记密码?</button>
                      <input className={styles.buttonsAction} type="submit" value="登录"></input>
                    </div>
                  </form>
                </div>

              </div>
        </>
      );
      } else {
          return (
            <>
                <div className={styles.optionsFormLeft} id='bounceRight'>
                  <div className={styles.formLogin} id='signup'>
                    <h1 className={styles.title}>账号注册</h1>
                    <form>
                      <div>
                        <div>
                            <input type="text"
                              placeholder="昵称"
                            className={styles.formInput}></input>
                        </div>
                        <div>
                          <input type="email"
                            placeholder="邮箱"
                          className={styles.formInput}></input>
                        </div>
                        <div>
                          <input type="password"
                            placeholder="输入密码"
                          className={styles.formInput}></input>
                        </div>
                      </div>
                      <div className={styles.buttons}>
                        <input className={styles.buttonsAction} type="submit" value="注册"></input>
                      </div>
                    </form>
                  </div>
                </div>
            </>
        );
      }
      
    }
}

export default LoginInput;