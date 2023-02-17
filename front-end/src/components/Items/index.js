import React,{ useEffect,useState,useRef} from 'react'
import {Link} from "react-router-dom"
import AddItemModal from "../Modal/index"
import { addSaleItem } from '../Redux/Reducer/salesReducer/saleAction';
import {useDispatch} from "react-redux"
// import { GoSearch} from "react-icons/go";
// import ReactToPrint from "react-to-print"
// import {ComponentToPrint} from "../components/Print/index"
import "./index.css"

function Items({product}) {
   const [openModal,setOpenModal] = useState(false);
   const dispatch=useDispatch()
   
   const handleModal=()=>{
    setOpenModal(true)
  }
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  if(openModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  const handleAddToSale=()=>{
    dispatch(addSaleItem(product._id))
  }
    
    // const componentRef=useRef();
    // const handleReactToPrint=ReactToPrint({
    //   content:()=> componentRef.current,
    // })
    
    // const handlePrint=()=>{
    //   handleReactToPrint()
    // }
  return (
    <>
    
       <tbody>
              <tr key={product._id}>
              <td>{product.itemCode}</td>
              <td>{product.itemBrand}</td>
              <td>{product.itemName}</td>
              <td>{product.description}</td>
              <td>{product.price}</td> 
              <td>
                <Link to="/" className="action-btn primary" onClick={handleAddToSale} >Add to Sale</Link>
                {' '}
                <Link className="action-btn primary" onClick={handleModal}>Edit</Link>
                {' '}
                <button type="button"  className="action-btn danger">Delete</button>
               </td>
               </tr>
       </tbody>
    {/* <div style={{display:"none"}}>
    <ComponentToPrint products={products} ref={componentRef}/>
    </div> */}
    {/* <button onClick={handlePrint}>Print</button> */}
    {openModal && <AddItemModal  closeModal={setOpenModal} product={product} toggleModal={toggleModal}/>}
    </>
  )
}

export default Items
