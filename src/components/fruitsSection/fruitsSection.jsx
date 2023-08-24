import Header from '../header/header'
import ProductCard from '../productCard/productCard'
import ProductEditMenu from '../productEditMenu/productEditMenu'
import { fruits } from '../../fruits'
import  '../fruitsSection/fruitSection.css' 

function FruitSection({currentPage,setCurrentPage,itemData,handlerEdit,show, setShow}){
    return(
        <div className='mainScreen'>
            <div className='top_Part'>
                <Header/>
            </div>
            <div className='fruits-Section'>
                <div className='fruit-Banner'></div>
                <div className='products_Container'>
                    <div className='options-Box'>
                    <div className='back' onClick={()=>{
                        currentPage("Home")
                    }}></div>
                    </div>
                    <div className='productsCard'>
                        {fruits.map((item) => {
                            return <ProductCard handlerEdit={handlerEdit} itemData={itemData} setShow={setShow} item={item} show={show}/>
                        })}
                        <div className='edit_menu'>
                            <ProductEditMenu handlerEdit={handlerEdit} itemData={itemData} show={show} />
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FruitSection