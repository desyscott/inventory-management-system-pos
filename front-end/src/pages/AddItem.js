import React from 'react'
import FormSelect from '../components/FormSelect'

function AddItem() {
  return (
    <div >
   
     <form className="form">
        <div>
         <h1>add items</h1>
        </div>
        <div>
          <label htmlFor="itemName">Item Name</label>
          <input 
          type="text"
          name="itemName"
          id="itemName"
          placeholder="Enter item name"
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
          name="city"
          id="city"
          placeholder="Enter city"
          required/>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input 
          type="text"
          name="price"
          id="price"
          placeholder="Enter price"
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
          required/>
        </div>
        <div>
        <label/>
        <button type="submit" className="btn btn-primary">Continue</button>
        </div>
      </form>
   
    </div>
  )
}

export default AddItem