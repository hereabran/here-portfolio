import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

function Breadcrumbs({
  root,
  firstChild,
  secondChild,
  thirdChild,
  lastChild
}) {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{ root }</Breadcrumb.Item>
          <Breadcrumb.Item>{ firstChild }</Breadcrumb.Item>
          <Breadcrumb.Item>{ secondChild }</Breadcrumb.Item>
          <Breadcrumb.Item>{ thirdChild }</Breadcrumb.Item>
          <Breadcrumb.Item>{ lastChild }</Breadcrumb.Item>
      </Breadcrumb>
    );
}

export default Breadcrumbs;
