import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import almamater from '../assets/images/profile/almamater.jpg';
import pattern from '../assets/images/5.png';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class PageMenu extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          { !collapsed && (
            <div className="logo" style={{
              height: '14em',
              paddingTop: '2em',
              paddingBottom: '1em'
            }}>
              <img style={{
                width: '7em',
                display: 'block',
                margin: '0px auto',
                marginBottom: '1em',
                borderRadius: '100%'
              }} src={ almamater } />
              <h3 style={{
                fontSize: '20px',
                color: '#fff',
                textAlign: 'center'
              }}>Here-Abran</h3>
            </div>
          )}
          { collapsed && (
            <div className="logo" style={{
              height: '8em',
              paddingTop: '2em'
            }}>
              <img style={{
                width: '4.5em',
                display: 'block',
                margin: '0px auto',
                borderRadius: '100%'
              }} src={ almamater } />
            </div>
          )}
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to='/'>
                <Icon type="pie-chart" /><span>Prolog</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/profile'>
                <Icon type="user" /><span>Profile</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/portfolio'>
                <Icon type="file" /><span>Portfolio</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/contact'>
                <Icon type="phone" /><span>Contact</span>
              </Link>
            </Menu.Item>

            { !collapsed && (
              <div style={{
                fontSize: '20px',
                position: 'fixed',
                top: '90%',
                color: '#fff',
                marginLeft: '1.5em'
              }}>
                <a href="http://instagram.com" target="blank" style={{ color: '#fff' }}><Icon type="instagram"  />&nbsp;&nbsp;&nbsp;</a>
                <a href="http://facebook.com" target="blank" style={{ color: '#fff' }}><IconFont type="icon-facebook"  />&nbsp;&nbsp;&nbsp;</a>
                <a href="http://github.com" target="blank" style={{ color: '#fff' }}><IconFont type="icon-github"  />&nbsp;&nbsp;&nbsp;</a>
                <a href="http://linkedin.com" target="blank" style={{ color: '#fff' }}><Icon type="linkedin"  /></a>
              </div>
            ) }

          </Menu>
        </Sider>
    );
  }
}

export default PageMenu;
