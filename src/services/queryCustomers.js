import request from '@/utils/request';

export const queryCustomers = () => {
  return request({
    endpoint: `/v1/customers`,
    query:{
      method:'get',//默认get
      data:{
        filter_status:5,
        page_size:100
      }
    }
  })
}
