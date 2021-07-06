import './App.css';
import StepsComponent from './compoenet/StepsComponent'
import { Layout,Menu,Breadcrumb} from 'antd'


function App() {
  const { Header,Content, Footer }=Layout

  return (
    <div className="App">
     
    <Layout>
      <Header>
        {/* <div/> */}
        <Menu theme="dark" mode="horizontal" >
          Form
        </Menu>
      </Header>
      <Content style={{ padding:'0 50px' }}>
        <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Registration</Breadcrumb.Item>

        </Breadcrumb>
        <div className='site-layout-content' >
        <StepsComponent/>
        </div>
      </Content>
      <Footer style={{ textAlign:'center' }}>
        Form Design Using Ant.JS
      </Footer>

    </Layout>




    </div>
  );
}

export default App;
