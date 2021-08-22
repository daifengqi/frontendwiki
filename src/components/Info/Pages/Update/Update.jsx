import React from 'react';
import styles from './Update.module.css'
import axios from "axios";

class Update extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        avatar: ''
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

    handleSubmit(event) {
      event.preventDefault();
      //验证输入的有效性和格式
      if(username.length >= 10) {
        alert("新用户名不能超过10个字符")
      }

      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(email !== '') {
        if(!reg.test(email)) {
          alert("请输入有效邮箱")
        }
        if(email.length >= 20) {
          alert("邮箱长度不能超过20个字符")
        }
      }
      this.updateRequest()
    }

    updateRequest() {
      let updateData = {}
      if (this.state.username !== '') {
        updateData['username'] = this.state.username
      }
      if (this.state.email !== '') {
        updateData['email'] = this.state.email
      }
      if (this.state.password !== '') {
        updateData['password'] = this.state.password
      }
      console.log(updateData)
      console.log('Bearer ' + JSON.parse(localStorage.getItem("profile")).token)
      axios({
        method: 'patch',
        url: 'http://localhost:8001/api/v1/user',
        data: updateData,
        headers: {
          Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("profile")).token
        }
      })
      .then(function(response) {
        let ret = response.data
        alert('更新成功')
        window.location.href = "/user.html"
      })
      .catch(function (error) {
        alert("更新失败")
      });
    }

    render() {
        return (
            <div className="Update">
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <div>
                        <input type="text"
                          placeholder="用户名(可选)"
                          className={styles.formInput}
                          username={this.state.username} onChange={this.handleChangeName}
                        ></input>
                    </div>
                    <div>
                      <input type="email"
                        placeholder="邮箱(可选)"
                        className={styles.formInput}
                        email={this.state.email} onChange={this.handleChangeEmail}
                      ></input>
                    </div>
                    <div>
                      <input type="password"
                        placeholder="输入密码(可选)"
                        className={styles.formInput}
                        password={this.state.password} onChange={this.handleChangePassword}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <input className={styles.buttonsAction} type="submit" value="更新"></input>
                  </div>
                </form>
        </div>
        );
    }
}

export default Update;