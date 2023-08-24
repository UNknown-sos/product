import { useState } from 'react'
import { fruits } from './fruits'
import axios from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Header from './components/header/header'
import FruitSection from './components/fruitsSection/fruitsSection'
import ProductCard from './components/productCard/productCard';


import './App.css';

function App() {
  const [show,setShow] = useState('none')
  const [objects,setObjects] = useState([fruits])
  const [itemData,setItemData] = useState({
    title: '',
    price: ''
  })

  // if(menu === 'none'){
  //     setMenu('block')
  // }else if(menu === 'block'){
  //     setMenu('none')
  // }

const  handlerEdit = (item) =>{
  setItemData(item)
  console.log(item,'222222');

    if(show === 'none'){
        setShow('block')
    }else if(show === 'block'){
        setShow('none')
    }
}

 const [currentPage,setCurrentPage] = useState('Home')
 if(currentPage === 'Home'){
    return <Header setCurrentPage = {setCurrentPage}/>
 }else if(currentPage === 'FruitSection'){
    return <FruitSection show={show}  setShow={setShow} itemData={itemData} handlerEdit={handlerEdit} currentPage = {setCurrentPage}/>
 }


 return (
      <div className='App'>
        <div>
          <Header/>
        </div>
      </div>
  );
}

export default App;
