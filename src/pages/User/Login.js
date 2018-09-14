import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Checkbox, Alert, Icon ,Input} from 'antd';
import Login from '@/components/Login';
import styles from './Login.less';
import {appLogin} from '@/services'

// 组件用法详情
// https://github.com/ant-design/ant-design-pro/blob/master/src/components/Login/index.zh-CN.md
const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

export default
@connect(({ login,loading }) => ({
  login
}))
class LoginPage extends Component {
  state = {
    loading:false
  };

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['captcha'], {}, (err, values) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          dispatch({
            type: 'login/getCaptcha',
            payload: values.captcha,
          })
            .then(resolve)
            .catch(reject);
        }
      });
  });

  handleSubmit = (err, values) => {
    this.setState({loading:true})
    if (!err) {
      const { dispatch } = this.props;

      appLogin(values).then(response=>{
        dispatch({type:'login/loginAfter',payload:response})
      }).catch(error=>{
        dispatch({type:'login/getCaptcha'})
        this.setState({loading:false})
      })
    }
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/getCaptcha',
    })
  }

  render() {
    const { login,dispatch } = this.props;

    return (
      <div className={styles.main}>
          <Login
            // defaultActiveKey={type}
            // onTabChange={this.onTabChange}
            onSubmit={this.handleSubmit}
            ref={form => {
              this.loginForm = form;
            }}
          >
          <UserName name="email" placeholder="邮箱" />

          <Password
            name="password"
            placeholder="密码"
          />

          <Captcha
            name="captcha"
            placeholder="验证码"
            captchaUrl={login.captchaUrl}
            onGetCaptcha={() => dispatch({type:'login/getCaptcha'})}
            onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
          />

        <Submit loading={this.state.loading}>登录</Submit>

        </Login>
      </div>
    );
  }
}
