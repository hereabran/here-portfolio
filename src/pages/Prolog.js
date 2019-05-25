import React from 'react';
import 'antd/dist/antd.css';
import { Button, Layout, Row, Col, Icon } from 'antd';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadscrumb';
import fotoResmi from '../assets/images/profile/resmi2.png';
import CV from '../assets/CV/Resume Muhammad Abdurrahman.pdf';

const { Content, Footer } = Layout;

function Prolog() {
    return (
        <Layout>
          <Header title1="Muhammad" title2=" Abdurrahman" />

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumbs root="Home" firstChild="Prolog" />


            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Row>
                <Col span={ 6 } offset={ 4 }>
                  <img className="fotoResmi" alt="Foto Resmi" width="200px" src={ fotoResmi } style={{
                    border: '5px solid #ffffff',
                    boxShadow: '0px 0px 7px #aaaaaa',
                    transition: '.3s all'
                   }} />
                </Col>
                <Row>
                  <Col>
                    <h1 style={{ fontSize: 40, color: '#2f3542' }}>Muhammad Abdurrahman</h1>
                    <h1 style={{ marginTop: -22, marginBottom: 35, fontSize: 20, color: '#1e90ff' }}>Software Engineer</h1>
                  </Col>
                  <Row>
                    <Col span={ 4 }>
                      <h3 style={{ color: '#57606f' }}><Icon type="book" theme="twoTone"/> Study</h3>
                      <h3 style={{ color: '#57606f' }}><Icon type="pushpin" theme="twoTone"/> Location</h3>
                      <h3 style={{ color: '#57606f' }}><Icon type="mail" theme="twoTone"/> Email</h3>
                      <h3 style={{ color: '#57606f' }}><Icon type="phone" theme="twoTone"/> Phone/Whatsapp</h3>
                    </Col>
                    <Col span={ 6 }>
                      <h3 style={{ color: '#a4b0be' }}>Universitas Gadjah Mada</h3>
                      <h3 style={{ color: '#a4b0be' }}>Yogyakarta, Indonesia</h3>
                      <h3 style={{ color: '#a4b0be' }}><a href="mailto:here.abran@gmail.com">here.abran@gmail.com</a></h3>
                      <h3 style={{ color: '#a4b0be' }}><a href="http://wa.me/+6287837440698" target="blank">+62 8783 7440 698</a></h3>
                    </Col>
                  </Row>
                </Row>
              </Row>
              <Row type="flex">
                <Col span={ 8 } offset={ 2 } style={{ marginTop: 20 }}>

                </Col>
                <Col span={ 8 }>
                  <Button type="dashed" icon="download" size="large" href={ CV }>
                    Download Resume
                  </Button>
                </Col>
              </Row>
            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}>Copyright ©2019 By Muhammad Abdurrahman</Footer>
        </Layout>
    );
}

export default Prolog;
