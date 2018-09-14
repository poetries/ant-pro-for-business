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
  List
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

/* eslint react/no-multi-comp:0 */
export default
@connect(({loading}) => ({
  loading
}))
class newPage4 extends PureComponent {
  state = {

  };

  componentDidMount() {
    const { dispatch } = this.props;

  }

  render() {
    const {poetries} = this.props

    return (
      <PageHeaderWrapper title="">
          newPage1
      </PageHeaderWrapper>
    );
  }
}
