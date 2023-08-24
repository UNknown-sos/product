import './productCard.css'
import ProductImg from '../productImg/productImg'
import ProductName from '../productName/productName'
import ProductPrice from '../productPrice/productPrice'
import CountInput from '../countInputbox/countInputbox'
import ProductEdit from '../productEdit/productEdit'
import ProductEditMenu from '../productEditMenu/productEditMenu'

function ProductCard({show,menu,setMenu,setShow,itemData, handlerEdit,item}){
    return(
        <div className='productCard'>
            <div className='img_box'>
                <ProductImg />
            </div>
            <div className='productTitle'>
                <ProductName title={item.title}/>
            </div>
            <div className='productPrice'>
                <ProductPrice price={item.price}/>
            </div>
            <div className='productEdit'>
                <ProductEdit setShow={setShow} item={item} itemData={itemData} show={show} menu={menu} handlerEdit={handlerEdit}/>
            </div>
        </div>
    )
}

export default ProductCard