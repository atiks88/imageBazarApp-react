import React, { useState } from 'react';
import  "../App.css";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip,Input } from 'antd';

function Searching({UpdateQuery}) {
  const [search,setSearch]=useState("");

  // const setvalue=(e)=>{
  //   setSearch(e.target.value);
    
  // }

  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      chacha();
    }
  };

  const chacha = () => {
    UpdateQuery(search);
  };
  return (
    <div className='SearchContainer'>
        <Input
        placeholder="Search image ..."
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyPress} // Call handleKeyPress function on key press
      />
        <Button icon={<SearchOutlined />} onClick={chacha} >Search</Button>
    </div>
  )
}

export default Searching