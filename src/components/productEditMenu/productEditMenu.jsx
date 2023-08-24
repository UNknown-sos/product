import './productEditMenu.css'

function ProductEditMenu({menu,display,show,item,itemData}){
console.log(itemData,'itemDataitemData');
    return (
        <div className='modal_menu' style={{display:show}}>
            <input type="text" value={itemData.title}/>
            <input type="text"  value={itemData.price}/>
            <button>Update</button>
        </div>
    )
}

export default ProductEditMenu