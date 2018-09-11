import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryPoetry() {
  return request('http://api.partner.yesdat.com/v1/tang-shis')
}



