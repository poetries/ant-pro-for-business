import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

/* eslint react/no-multi-comp:0 */
export default
@connect(({setting}) => ({
  setting
}))
class newPage2 extends PureComponent {
  state = {

  };

  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    return (
      <PageHeaderWrapper title="">
        new page 2
      </PageHeaderWrapper>
    );
  }
}
