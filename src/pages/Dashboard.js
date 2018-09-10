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
@connect(({poetry}) => ({
  poetries:poetry.poetries
}))
class newPage1 extends PureComponent {
  state = {

  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'poetry/fetchPoetry',
    })
  }

  render() {
    const {poetries} = this.props
    return (
      <PageHeaderWrapper title="">
           <List
              size="large"
              bordered
              dataSource={poetries}
              renderItem={item => (<List.Item>{item.poetry_title}-{item.poetry_body}-{item.author}-{item.poems}</List.Item>)}
        />
      </PageHeaderWrapper>
    );
  }
}
