import React from 'react'

const Popup = () => {
  return (
    <>
    <div>
        <form >
           <div>
             <label htmlFor="id">id</label>
            <input type="text" placeholder='Enter Id' />
            <label htmlFor="name">name</label>
            <input type="text" placeholder='Enter the name of the product' />
            <label htmlFor="category">Category</label>
            <input type="text" placeholder='Enter the Category' />
            <label htmlFor="stock">Stock</label>
            <input type="text" placeholder='Enter Stock' />
            <label htmlFor="price">Price</label>
            <input type="text" placeholder='Enter Price' />
            <label htmlFor="status">Status</label>
            <input type="text" placeholder='Enter Status' />
           </div>
           <button onClick={handleSubmit
            
           }>Submit</button>
        </form>
    </div>
    
    </>
  )
}

export default Popup