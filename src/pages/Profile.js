import React from 'react';
import 'antd/dist/antd.css';
import { Button, Layout, Row, Timeline, Col, Icon } from 'antd';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadscrumb';
import fotoResmi from '../assets/images/profile/resmi2.png';

const { Content, Footer } = Layout;

function Profile() {
    return (
        <Layout>
          <Header title1="Muhammad" title2=" Abdurrahman" />

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumbs root="Home" firstChild="Profile" />


            <div style={{ padding: "30px 90px", background: '#fff', minHeight: 360 }}>
              <Row>
                <Col>
                  <img className="fotoResmi" alt="Foto Resmi" width="200px" src={ fotoResmi } style={{
                    border: '5px solid #ffffff',
                    boxShadow: '0px 0px 7px #aaaaaa',
                    transition: '.3s all'
                   }} />
                </Col>
              </Row>

              <Row gutter={48}>
                <Col span={12}>
                  <Timeline>
                    <h1 style={{ fontSize: 20, marginBottom: 30}}>Education</h1>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                    <div style={{
                      borderLeft: '2px solid #1e90ff',
                      boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                      padding: "5px 12px",
                    }}>
                      <h1>Computer & Information System</h1>
                      <p style={{
                        color: '#1e90ff',
                        margin: "-7px 0px 2px 0px",
                        fontSize: 11,
                        fontWeight: '500'
                      }}>2017 - Current <span style={{ color: '#aaa' }}>| Universitas Gadjah Mada</span> </p>
                      <p style={{
                        color: '#57606f',
                        margin: "7px 0px 0px 0px",
                        fontSize: 11,
                        fontWeight: '500'
                      }}>2nd Winner of Higher Jump TGES</p>
                      <p style={{
                        color: '#57606f',
                        margin: "2px 0px 0px 0px",
                        fontSize: 11,
                        fontWeight: '500'
                      }}>Partisipant of ATK cup</p>
                    </div>
                    </Timeline.Item>
                    <Timeline.Item>
                      <div style={{
                        borderLeft: '2px solid #1e90ff',
                        boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                        padding: 10,
                      }}>
                        <h1>Islamic Boarding School - Senior High School</h1>
                        <p style={{
                          color: '#1e90ff',
                          margin: "-7px 0px 2px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2014 - 2017 <span style={{ color: '#aaa' }}>| Darussalam Subang</span> </p>
                        <p style={{
                          color: '#57606f',
                          margin: "7px 0px 0px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>1st Winner of Darussalam Got Talent</p>
                        <p style={{
                          color: '#57606f',
                          margin: "2px 0px 0px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>1st Winner of Calisthenic PORSENI Darussalam</p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item>
                      <div style={{
                        borderLeft: '2px solid #1e90ff',
                        boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                        padding: 10,
                      }}>
                        <h1>Islamic Boarding School - Junior High School</h1>
                        <p style={{
                          color: '#1e90ff',
                          margin: "-7px 0px 2px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2010 - 2013 <span style={{ color: '#aaa' }}>| Al-Ihsan Bandung</span> </p>
                        <p style={{
                          color: '#57606f',
                          margin: "7px 0px 0px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2nd Winner of Musabaqoh Syarhil Qur'an</p>
                        <p style={{
                          color: '#57606f',
                          margin: "2px 0px 0px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>3rd Winner of Islamic Public Speaking at UPI Bandung</p>
                        <p style={{
                          color: '#57606f',
                          margin: "2px 0px 0px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>Partisipant of LP3 24 GONTOR</p>
                      </div>
                    </Timeline.Item>
                  </Timeline>

                  <Timeline>
                    <h1 style={{ fontSize: 20, marginBottom: 30}}>Organization</h1>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                    <div style={{
                      borderLeft: '2px solid #1e90ff',
                      boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                      padding: "5px 12px",
                    }}>
                      <h1>Leader Division of ADPA</h1>
                      <p style={{
                        color: '#1e90ff',
                        margin: "-7px 0px 2px 0px",
                        fontSize: 11,
                        fontWeight: '500'
                      }}>2018 - Current <span style={{ color: '#aaa' }}>| HIMAKOMSI UGM</span> </p>
                    </div>
                    </Timeline.Item>
                    <Timeline.Item>
                      <div style={{
                        borderLeft: '2px solid #1e90ff',
                        boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                        padding: 10,
                      }}>
                        <h1>Leader Division of DIKLAT</h1>
                        <p style={{
                          color: '#1e90ff',
                          margin: "-7px 0px 2px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2017 - 2018 <span style={{ color: '#aaa' }}>| Merpati Putih UGM</span> </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item>
                      <div style={{
                        borderLeft: '2px solid #1e90ff',
                        boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                        padding: 10,
                      }}>
                        <h1>Leader Division of Media Creative and Design</h1>
                        <p style={{
                          color: '#1e90ff',
                          margin: "-7px 0px 2px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2017 <span style={{ color: '#aaa' }}>| Panggung Gembira 632</span> </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item>
                      <div style={{
                        borderLeft: '2px solid #1e90ff',
                        boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                        padding: 10,
                      }}>
                        <h1>Secretary of Central Language Improvement</h1>
                        <p style={{
                          color: '#1e90ff',
                          margin: "-7px 0px 2px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2016 - 2017 <span style={{ color: '#aaa' }}>| OPPD Darussalam</span> </p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item>
                      <div style={{
                        borderLeft: '2px solid #1e90ff',
                        boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                        padding: 10,
                      }}>
                        <h1>Leader and Trainer</h1>
                        <p style={{
                          color: '#1e90ff',
                          margin: "-7px 0px 2px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2015 - 2017 <span style={{ color: '#aaa' }}>| PERSADA Darussalam</span> </p>
                      </div>
                    </Timeline.Item>
                  </Timeline>
                </Col>
                <Col span={12}>
                  <Timeline>
                    <h1 style={{ fontSize: 20, marginBottom: 30}}>Experiences</h1>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                    <div style={{
                      borderLeft: '2px solid #1e90ff',
                      boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                      padding: 10,
                    }}>
                      <h1>Part-time Developer</h1>
                      <p style={{
                        color: '#1e90ff',
                        margin: "-7px 0px 2px 0px",
                        fontSize: 11,
                        fontWeight: '500'
                      }}>2019 - Current <span style={{ color: '#aaa' }}>| ByTechnology</span></p>
                    </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                      <div style={{
                        borderLeft: '2px solid #1e90ff',
                        boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                        padding: 10,
                      }}>
                        <h1>Private Tutor</h1>
                        <p style={{
                          color: '#1e90ff',
                          margin: "-7px 0px 2px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2019 - Current <span style={{ color: '#aaa' }}>| SURPLUS Private</span></p>
                      </div>
                    </Timeline.Item>
                  </Timeline>

                  <Timeline>
                    <h1 style={{ fontSize: 20, marginBottom: 30}}>Projects</h1>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                    <div style={{
                      borderLeft: '2px solid #1e90ff',
                      boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                      padding: 10,
                    }}>
                      <h1>Part-time Developer</h1>
                      <p style={{
                        color: '#1e90ff',
                        margin: "-7px 0px 2px 0px",
                        fontSize: 11,
                        fontWeight: '500'
                      }}>2019 - Current <span style={{ color: '#aaa' }}>| ByTechnology</span></p>
                    </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                      <div style={{
                        borderLeft: '2px solid #1e90ff',
                        boxShadow: '0px 0px 3px 0.1px #aaaaaa',
                        padding: 10,
                      }}>
                        <h1>Private Tutor</h1>
                        <p style={{
                          color: '#1e90ff',
                          margin: "-7px 0px 2px 0px",
                          fontSize: 11,
                          fontWeight: '500'
                        }}>2019 - Current <span style={{ color: '#aaa' }}>| SURPLUS Private</span></p>
                      </div>
                    </Timeline.Item>
                  </Timeline>
                </Col>
              </Row>
            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}>Copyright ©2019 By Muhammad Abdurrahman</Footer>
        </Layout>
    );
}

export default Profile;
