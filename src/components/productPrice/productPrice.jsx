import './productPrice.css'

function ProductPrice({price}){
    return(
        <div className='productPrice'>
            <p>{price}</p>
        </div>
    )
}

export default ProductPrice