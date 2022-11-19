import React from "react";

import "./Header.scss"

import { useNavigate } from "react-router-dom";
//import navbar from "../Navegacion/navbar";
import { AudioOutlined } from '@ant-design/icons';

import { Input} from 'antd';
//import onSearch from 'antd';

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
 
  

//);



  return (
      <div className='headerDesign'>
      
<div className="searchDesign" ><Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /></div>

 <div className="buttonHeader">
                <button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Login</button>
                
                <button className="buttonHeaderDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Subscríbete ya</button>
            </div>


      {/*<div onClick={()=>navigate("/login")} className="linkDesign">Login</div>
      <div onClick={()=>navigate("/login")} className="linkDesign">Register</div>
     
    */}
    
      </div>
  )




}

export default Header;