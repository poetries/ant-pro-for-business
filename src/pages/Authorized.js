import React from 'react';
import RenderAuthorized from '@/components/Authorized';
import Exception from '@/components/Exception';
import { matchRoutes } from 'react-router-config';
import uniq from 'lodash/uniq';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import config from '../../config/project'

const auth = JSON.parse(localStorage.getItem('auth'))
const Authorized = RenderAuthorized(['devboss', 'bosslite']);

export default ({ children, route, location }) => {
  const routes = matchRoutes(route.routes, location.pathname);
  let authorities = [];
  routes.forEach(item => {
    if (Array.isArray(item.route.authority)) {
      authorities = authorities.concat(item.route.authority);
    } else if (typeof item.route.authority === 'string') {
      authorities.push(item.route.authority);
    }
  });
  const noMatch = (
    <Exception
      type="403"
      desc={formatMessage({ id: 'app.exception.description.403' })}
      linkElement={Link}
      backText={formatMessage({ id: 'app.exception.back' })}
    />
  );

  if (!auth||!auth.data) {
    if(!config.debug){
      window.location.href = `/user/login`
    }
  }
  return (
    <Authorized
      authority={authorities.length === 0 ? undefined : uniq(authorities)}
      noMatch={noMatch}
    >
      {children}
    </Authorized>
  );
};
