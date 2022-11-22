import React from "react";

import "./Header.scss"

import { useNavigate } from "react-router-dom";
//import navbar from "../Navegacion/navbar";
import { AudioOutlined } from '@ant-design/icons';
import { Button, Space, Dropdown } from 'antd';
import { Input } from 'antd';
import { MenuProps } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { userData, userout } from "../../containers/User/userSlice";
//import Image from 'react-bootstrap/Image'


const Header = () => {

  const dispatch = useDispatch();
  const userReduxCredentials = useSelector(userData);
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

  const logout = () => {

    //aqui borraremos el token y haremos log out :)
    dispatch(userout({ credentials: {} }))

    //inmediatamente despues del logout, conduzco al usuario a home.
    return navigate("/");

  }

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
        <a rel="noopener noreferrer" href="">
          Películas
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a rel="noopener noreferrer" href="">
          Series
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a onClick={() => navigate("/Login")} href="../../../Login/">
          Inicio de sesión
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a rel="noopener noreferrer" href="">
          Mi cuenta
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a onClick={() => logout()} rel="noopener noreferrer" href="">
          Cerrar sesión
        </a>
      ),
    },
  ];


  return (<div className="container-fluid fixed-top">
    <div className='headerDesign row display-grid'>

      <Dropdown className="menuDesign col-3 col-lg-1 justify-content-center d-flex align-items-center mt-3 ps-0 ps-lg-3" menu={{ items }} placement="bottomRight" arrow>
        <Button>Menú</Button>
      </Dropdown>
      {/*
<div className="col-3 col-lg-1 justify-content-center d-flex align-items-center mt-3 ps-0 ps-lg-3">
        <img src="logo" className="logo image-fluid" alt="logo" />*/}
      <div className="searchDesign  col-3 col-lg-2 justify-content-end d-flex align-items-center " ><Search placeholder="input search text" onSearch={onSearch} /></div>

      <div className="buttonHeader col-4  d-flex  ">
        {/*<button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Login</button>*/}
        <Button className="buttonHeaderDesign col-4" onClick={() => navigate("/login")} href="../Login/">Login</Button>
        <Button className="buttonHeaderDesign col-4" onClick={() => navigate("/register")} href="../Register" >Suscríbete</Button>
        {/*<button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Subscríbete ya</button>*/}
      </div>
      <div className="linkDesign">{userReduxCredentials?.credentials?.mail}</div>


      {/*<div onClick={()=>navigate("/login")} className="linkDesign">Login</div>
      <div onClick={()=>navigate("/login")} className="linkDesign">Register</div>
     
    */}

    </div>
  </div>
    //</div>
  )




}

export default Header;