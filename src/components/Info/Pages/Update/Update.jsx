import React from 'react';
import styles from './Update.module.css'
import axios from "axios";
import { message } from 'antd';

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
      this.handleChangePhoto = this.handleChangePhoto.bind(this);
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
    handleChangePhoto(event) {
      this.setState({avatar: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      //验证输入的有效性和格式
      if(this.state.username.length >= 10) {
        message.warning('用户名不能超过10个字符');
      }
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(this.state.email !== '') {
        if(!reg.test(this.state.email)) {
          message.warning('请输入有效邮箱');
        }
        if(this.state.email.length >= 20) {
          message.warning('邮箱长度不能超过20个字符');
        }
      }
      this.updateRequest()
    }

    updateRequest() {

      if(this.state.username === '' && this.state.password === ''
        && this.state.email === '' && this.state.avatar === '') {
        message.warning('输入不能为空');
        return
      }
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
      if (this.state.avatar !== '') {
        updateData['avatar'] = this.state.avatar
      }

      console.log(updateData)
      console.log('Bearer ' + JSON.parse(localStorage.getItem("profile")).token)
      axios({
        method: 'patch',
        url: 'https://frontendwiki.mitsuha.space/api/v1/user',
        data: updateData,
        headers: {
          Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("profile")).token
        }
      })
      .then(function(response) {
        // let ret = response.data
        message.success('更新成功');
        window.location.href = "/user.html"
      })
      .catch(function (error) {
        message.error('更新失败');
      });
    }

    render() {
        return (
            <div className="Update animate__animated animate__fadeIn">
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
                    <div>
                      <input type="link"
                        placeholder="输入头像链接(可选)"
                        className={styles.formInput}
                        avatar={this.state.avatar} onChange={this.handleChangePhoto}
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