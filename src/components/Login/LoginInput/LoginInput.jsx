import React from "react";
import $ from 'jquery'
import styles from "./LoginInput.module.css";

class LoginInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          email: '',
          password: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //读取输入的内容
    handleChangeName(event) {
      this.setState({username: event.target.value});
    }
    handleChangeEmail(event) {
      this.setState({email: event.target.value});
    }
    handleChangePassword(event) {
      this.setState({password: event.target.value});
    }
    
    //点击submit触发的事件
    handleSubmit(event) {
      // if(this.state.userName.length >= 20) {
      //   return alert("用户名不能超过20个字符，请重新输入")
      // }
      event.preventDefault();
      event.preventDefault();
      let username =this.state.username
      let password =this.state.password
      let email =this.state.email
      if(username !== '') alert('输入的用户名是：' + username + '输入的邮箱是：' + email + '输入的密码是：' + password)
      else alert('输入的邮箱是：' + email + '输入的密码是：' + password)
      // let hash = {'username': username, 'password': password, 'email': email}
      // $.post('/user/register', hash) // 第一个参数与是路径，第二个参数要传给服务端的数据
      //   .then((response) => {
      //     alert('success')
      //     console.log(response)
      //   }, () => {
      //     alert('error')
      //     console.log(response)
      //     let {errors} = JSON.parse(response.responseText)
      //     if(errors.message && errors.message !== '注册成功'){
      //       arert(errors.message)
      //     }
      //   })
    }

    // //点击login触发的事件
    // handleLogin(event) {
    //   // if(this.state.userName.length >= 20) {
    //   //   return alert("用户名不能超过20个字符，请重新输入")
    //   // }
    //   event.preventDefault();
    //   event.preventDefault();
    //   let password =this.state.password
    //   let email =this.state.email
    //   alert('输入的邮箱是：' + email + '输入的密码是：' + password)
    // }

    render() {


      let isLogin = this.props.login;
      if(isLogin === 'login'){
        return (
          <>
              <div className={styles.optionsFormRight} id='bounceLeft'>

                <div className={styles.formLogin} id='login'>
                  <h1 className={styles.title}>邮箱登录</h1>
                  <form onSubmit={this.handleSubmit}> 
                    <div>
                      <div>
                        <input type="email"
                          placeholder="邮箱"
                          className={styles.formInput}
                          email={this.state.email} onChange={this.handleChangeEmail}
                        ></input>
                      </div>
                      <div>
                        <input type="password"
                          placeholder="密码"
                          className={styles.formInput}
                          password={this.state.password} onChange={this.handleChangePassword}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <button className={styles.buttomForgot} type="button">忘记密码?</button>
                      <input
                        className={styles.buttonsAction}
                        type="submit" value="登录"
                        onClick={this.handleSignup}
                      >
                      </input>
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
                    <form onSubmit={this.handleSubmit} id='register-form'>
                      <div>
                        <div>
                            <input type="text"
                              placeholder="用户名"
                              className={styles.formInput}
                              username={this.state.username} onChange={this.handleChangeName}
                            ></input>
                        </div>
                        <div>
                          <input type="email"
                            placeholder="邮箱"
                            className={styles.formInput}
                            email={this.state.email} onChange={this.handleChangeEmail}
                          ></input>
                        </div>
                        <div>
                          <input type="password"
                            placeholder="输入密码"
                            className={styles.formInput}
                            password={this.state.password} onChange={this.handleChangePassword}
                          ></input>
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