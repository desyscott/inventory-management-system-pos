import React,{useState,useEffect} from 'react'
import FormSelect from '../FormSelect';
import "./index.css"

const AddItemModal=({closeModal,toggleModal,product})=>{
  const [values,setValues]=useState({
    itemName: "",
    quantity: "",
    price: "",
   description: "",
  });
  
  const handleChange = (e) => {
    const {name,value}=e.target
    setValues({
      ...values,
      [name]:value,
    });
  };
      
useEffect(()=>{
  if(product){
 
    setValues({
      itemName:product.itemName,
      price:product.price,
      quantity:product.quantity,
      description:product.description,
    })
  }
    
},[product,setValues])
  
  return (
    <div className="modal-background">
    <div className="overlay"></div>
    <div className="modal-container">
    <div className="titleCloseBtn">
    <button onClick={()=>closeModal(false)}>X</button>
    </div>
    <form className="form">
        <div>
         {product? (<h2> Edit items</h2>):(<h2>Add items</h2>)}
        </div>
        <div>
          <label htmlFor="itemName">Item Name</label>
          <input 
          type="text"
          name="itemName"
          id="itemName"
          placeholder="Enter item name"
          value={values.itemName}
          onChange={handleChange}
          required/>
        </div>
        <div>
        <FormSelect
          label="Brand"
              options={[
                {
                name: "Choose Brand",
                value: ''
              },
              {
                name: "Sneakers",
                value: 'sneakers'
              },
              {
                name: "Shirts",
                value: 'shirts'
              },
              {
                name: "Watches",
                value: 'watches'
              },
             
                        ]}/>
        </div>
        <div>
          <label htmlFor="city">Quantity</label>
          <input 
          type="text"
          name="qty"
          id="qty"
          placeholder="Enter qty"
          value={values.quantity}
          onChange={handleChange}
          required/>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input 
          type="text"
          name="price"
          id="price"
          placeholder="Enter price"
          value={values.price}
          onChange={handleChange}
          required/>
        </div>
        <div>
         <FormSelect
          label="Category"
          
              options={[
                {
                name: "Choose Category",
                value: ''
              },
              {
                name: "Sneakers",
                value: 'sneakers'
              },
              {
                name: "Shirts",
                value: 'shirts'
              },
              {
                name: "Watches",
                value: 'watches'
              },
             
                        ]}/>
        </div>
      
        <div>
          <label htmlFor="country">Description</label>
          <input 
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          required/>
        </div>
        <div>
        <label/>
        <button type="submit" className="btn btn-primary">Continue</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddItemModal;