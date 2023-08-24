import ProductEditMenu from '../productEditMenu/productEditMenu'

import './productEdit.css'

function ProductEdit({item,handlerEdit}){
    return(
        <div className='edit'>
                <button className='edit_btn' onClick={() => handlerEdit(item)}>Edit</button>
        </div>
    )
}

export default ProductEdit

