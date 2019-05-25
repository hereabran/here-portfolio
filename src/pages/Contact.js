import React from 'react';
import 'antd/dist/antd.css';
import { Button, Layout, Row, Col, Icon } from 'antd';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadscrumb';
import fotoResmi from '../assets/images/profile/resmi2.png';
import CV from '../assets/CV/Resume Muhammad Abdurrahman.pdf';

const { Content, Footer } = Layout;

function Contact() {
    return (
        <Layout>
          <Header title1="Muhammad" title2=" Abdurrahman" />

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumbs root="Home" firstChild="Contact" />


            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Row>
                Contact...
              </Row>
            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}>Copyright ©2019 By Muhammad Abdurrahman</Footer>
        </Layout>
    );
}

export default Contact;
