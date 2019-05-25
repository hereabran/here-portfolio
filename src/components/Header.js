import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Icon } from 'antd';

function Header({
  title1,
  title2
}) {
    const { Header } = Layout;

    return (
          <Header style={{ background: '#fff', padding: 0 }}>
            <h2 style={{ marginLeft: '30px' }}>{ title1 }<span style={{ color: '#1e90ff' }}>{ title2 }</span></h2>
          </Header>
    );
}

export default Header;
