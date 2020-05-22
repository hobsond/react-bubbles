import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
const getColorList=()=>{
  axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(res=>{
      setColorList(res.data)
    })
    .catch(err=>console.log(err))

}
  useEffect(()=>{
    getColorList()
    
  },[])

  return (
    <>
      <ColorList colors={colorList} getColorList={getColorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
