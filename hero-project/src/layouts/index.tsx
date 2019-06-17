import React from 'react';
import styles from './index.css';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';

const { Header, Content, Footer } = Layout;
const menuData = [
  { route: 'hero', name: '英雄' },
  { route: 'item', name: '装备' },
  { route: 'skill', name: '技能' },
]

// const BasicLayout: React.FC = props => {
function BasicLayout(props) {
  const {
    location: { pathname },
    children,
  } = props;
  // const location = props.location;
  // const pathname = location.pathname;
  return (
    <Layout>
      <Header>
        {/* <div style={{ color: 'white' }}>王者荣耀资料库</div> */}
        <div className={ styles.logo }>王者荣耀资料库</div>
        <Menu 
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[pathname]}
        style={{ lineHeight: '64px' }}
      >
        {/* <Menu.Item key="/hero">
          <Link to="hero">英雄</Link>
        </Menu.Item>
        <Menu.Item key="/item">
          <Link to="item">道具</Link>
        </Menu.Item>
        <Menu.Item key="/skill">
          <Link to="skill">技能</Link>
        </Menu.Item> */}
        {menuData.map(menu => (
          <Menu.Item key={`/${menu.route}`}>
            <Link to={menu.route}>{menu.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
      </Header>
      <Content style={{ padding: '0 50px'}}>
        <div style={{background: '#fff', padding: 24, minHeight: 280}}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', fontFamily: 'Microsoft YaHei' }}>Fanye的umi教程</Footer>
    </Layout>
  );
};

export default BasicLayout;
