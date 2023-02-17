import React,{ useEffect,useState,useRef} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetchItemsRequest} from "../components/Redux/Reducer/ItemsReducer/itemAction"
import AddItemModal from "../components/Modal/index"
import Items from "../components/Items/index"

const mapState=({itemsData})=>({
 items:itemsData.items,
  loading:itemsData.loading,
  error:itemsData.error,
})

const  Home=()=>{
  const dispatch=useDispatch();
  const { items,loading,error}=useSelector(mapState);
  const [openModal,setOpenModal] = useState(false)
  
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
  useEffect(()=>{
    dispatch(fetchItemsRequest())
  },[dispatch])
  
  return (
    <div style={{  padding: "1rem",
  marginTop:"2rem" }}>
       <div className="search_bar">
     <button type="button"  className="action-btn addBtn" onClick={handleModal}>Add new item</button>
       <div>
       <input placeholder="Search" /> 
        {/* <GoSearch size={15}  className="search-icon"/> */}
       </div>
       </div>
       <table className="table">
          <thead>
            <tr>
              <th>ITEM CODE</th>
              <th>ITEM BRAND</th>
              <th>ITEM NAME</th>
              <th>DESCRIPTION</th>
              <th>UNIT PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
    { items &&  items.map(product=>(
   <Items product={product}/>
   ))}
   </table>
   {openModal && <AddItemModal  closeModal={setOpenModal} toggleModal={toggleModal} />}
    </div>
  )
}
export default Home;