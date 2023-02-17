import React,{useState} from 'react'
import NavLogo from "../../assests/Nav-logo.svg"
import "./index.css"
import {Link} from "react-router-dom"
import { NavBarItems} from "./NavItems"
import {RiLogoutCircleRLine} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import {BiHelpCircle} from "react-icons/bi"
import {useSelector,useDispatch} from "react-redux"

const mapState=({saleData})=>({
  saleItems:saleData.saleItems,
})

function NavBar () {
  const [selected,setSelected]=useState()
  const {saleItems}=useSelector(mapState);
  
  return (
    <div className="navbar">
  <h2 className="nav-logo">
  <Link to="/"><img alt="" src={NavLogo}/>Merd PartyShop</Link>
  </h2>
  
  <nav>
    <ul className="primary-navigation flex mobile-view">
      {NavBarItems.map((item,index)=>{
    return (
      <li key={index} onClick={()=>setSelected(index)} className={selected===index ? "navbar-list-items nav-active":"navbar-list-items"} >
    { item.title==="Sales"?( <Link to={item.path}>{item.title}   {saleItems.length > 0 && 
        ( <span className="badge">
         {saleItems.length}
         </span>)
       }</Link>)
     :(<Link to={item.path}>{item.title}</Link>)}
    
      </li>
    )})}
    </ul>
  </nav>
  
       <ul className="nav-links">
           <li>
            <Link to="/profile"><CgProfile/>My Profile</Link>
           </li>
           <li>
            <Link to="/help"><BiHelpCircle/>Help</Link>
           </li>
           <li>
            <Link to="#" ><RiLogoutCircleRLine/>Logout</Link>
          </li>
        </ul>
  
    </div>
  )
}

export default NavBar