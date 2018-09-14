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
@connect(({customers}) => ({
  customers:customers.data
}))
class Dashboard extends PureComponent {
  state = {

  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'customers/fetchCustomers',
    })
  }

  render() {
    const {customers} = this.props
    return (
      <PageHeaderWrapper title="">
           <List
              size="large"
              bordered
              dataSource={customers}
              renderItem={item => (<List.Item>{item.customerId}-{item.customerName}</List.Item>)}
        />
      </PageHeaderWrapper>
    );
  }
}
