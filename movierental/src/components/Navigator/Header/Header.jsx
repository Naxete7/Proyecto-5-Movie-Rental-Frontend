import React from "react";

import "./Header.scss"

import { useNavigate } from "react-router-dom";
//import navbar from "../Navegacion/navbar";
import { AudioOutlined } from '@ant-design/icons';
import { Button, Space,Dropdown } from 'antd';
import { Input} from 'antd';
import type { MenuProps } from 'antd';

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
      <a rel="noopener noreferrer" href="https://www.antgroup.com">
        Películas
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="https://www.aliyun.com">
        Series
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a  onClick={() => navigate("/Login")} href="../../../Login/">
        Inicio de sesión
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Mi cuenta
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Cerrar sesión
      </a>
    ),
  },
];


  return (
      <div className='headerDesign'>
      
<Dropdown className="menuDesign" menu={{ items }} placement="bottomRight" arrow>
      <Button>Menú</Button>
    </Dropdown>


<div className="searchDesign" ><Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /></div>

 <div className="buttonHeader">
                {/*<button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Login</button>*/}
        <Button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/">Login</Button>
        <Button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/" >Subscríbete</Button>
                {/*<button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Subscríbete ya</button>*/}
            </div>


      {/*<div onClick={()=>navigate("/login")} className="linkDesign">Login</div>
      <div onClick={()=>navigate("/login")} className="linkDesign">Register</div>
     
    */}
    
      </div>
  )




}

export default Header;