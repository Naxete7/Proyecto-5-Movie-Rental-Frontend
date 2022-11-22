import React from "react";

import "./Header.scss"

import { useNavigate } from "react-router-dom";
//import navbar from "../Navegacion/navbar";
import { AudioOutlined } from '@ant-design/icons';
import { Button, Space,Dropdown } from 'antd';
import { Input} from 'antd';
import { MenuProps } from 'antd';
//import Image from 'react-bootstrap/Image'
import img from '../../../assets/img/rentLogo.png'

    const Header = () => {

    const navigate = useNavigate();
    const { Search } = Input;

    const suffix = (
    <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

//const App: React.FC = () => (
  //const App: React.FC = () => (

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a onClick={() => navigate("/")} href="../../../">
        Home
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="https://www.antgroup.com">
        Películas
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a rel="noopener noreferrer" href="https://www.aliyun.com">
        Series
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a  onClick={() => navigate("/Login")} href="../../../Login/">
        Inicio de sesión
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Mi cuenta
      </a>
    ),
  },
  {
    key: '6',
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Cerrar sesión
      </a>
    ),
  },
];


  return ( <div className="container-fluid fixed-top">
      <div className='headerDesign row display-grid'>
      
<Dropdown className="menuDesign col-3 col-lg-1 justify-content-center d-flex align-items-center mt-3 ps-0 ps-lg-3" menu={{ items }} placement="bottomRight" arrow>
      <Button>Menú</Button>
      </Dropdown>
      

      <div className="logo col-2"><img src={img} alt="imagen de portada" /></div>
{/*
<div className="col-3 col-lg-1 justify-content-center d-flex align-items-center mt-3 ps-0 ps-lg-3">
        <img src="logo" className="logo image-fluid" alt="logo" />*/}
<div className="searchDesign  col-3 col-lg-2 justify-content-end d-flex align-items-center " ><Search placeholder="input search text" onSearch={onSearch}  /></div>

      <div className="buttonHeader col-4  d-flex  ">
                {/*<button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Login</button>*/}
        <text className="buttonHeaderDesign col-4" onClick={() => navigate("/login")} href="../Login/">Login</text>
        <text className="buttonHeaderDesign col-4" onClick={() => navigate("/register")} href="../Register" >Suscríbete</text>
                {/*<button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Subscríbete ya</button>*/}
            </div>


    

    
    </div>
    </div>
    //</div>
  )




}

export default Header;