import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Checkbox, Alert, Icon ,Input} from 'antd';
import Login from '@/components/Login';
import styles from './Login.less';


const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

export default
@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['mobile'], {}, (err, values) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          dispatch({
            type: 'login/getCaptcha',
            payload: values.mobile,
          })
            .then(resolve)
            .catch(reject);
        }
      });
    });

  handleSubmit = (err, values) => {
    if (!err) {
      const { dispatch } = this.props;
     console.log(values)
      dispatch({
        type: 'login/login',
        payload: {
          ...values
        },
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting,dispatch } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.main}>
          <Login
            defaultActiveKey={type}
            onTabChange={this.onTabChange}
            onSubmit={this.handleSubmit}
            ref={form => {
              this.loginForm = form;
            }}
          >
          {login.status === 'error' &&
              login.type === 'account' &&
              !submitting &&
               this.renderMessage('账户或密码错误（admin/888888）')
          }
        
          <UserName name="email" placeholder="邮箱" />

          <Password
            name="password"
            placeholder="密码"
            onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
          />

          <Captcha 
            name="captcha" 
            placeholder="验证码" 
            captchaUrl="http://api.o.yesdat.com/v1/logins/captcha?v=5b9686c45c2e87.14077500"
            onGetCaptcha={() => dispatch({type:'login/getCaptcha'})}
          />

          <Submit loading={submitting}>登录</Submit>

        </Login>
      </div>
    );
  }
}
