import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { categories } from "./Data";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiSunHorizon } from "react-icons/pi";
import { Link, Route, Routes } from "react-router-dom";
import Categories from "./Categories";




function Header(){
    return(
        <>
        {/* // top start */}
        <div className="section top">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 d-flex">
               <p className="bg-danger text-white py-2 px-2 ">Trending</p>
<div id="carouselExampleInterval" className="carousel slide  py-2" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
    <p>Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now </p>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <p>Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now </p>
    </div>
    <div className="carousel-item">
     <p>Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now </p>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden ">Next</span>
  </button>
</div>
 </div>


            <div className="col-lg-4 d-flex gap-3">
                <p className="border-end px-3">Thursday, March 26, 2020</p>
                <div className="d-flex gap-3">
                    <p className=""><FaFacebookF /> </p>
                   <p className=""> <FaTwitter /> </p>
                   <p className=""> <FaYoutube /></p> 
                   <p className=""> <FaInstagram /></p>
                </div>
                
            </div>
        </div>
    </div>
</div>
{/* // top end */}

<div className="section">
    <div className="container">
        <div className="row">
        <div className="col-lg-4 py-4">
            <img className="logo" src="https://quomodosoft.com/html/newsprk/assets/images/logo.png" alt="" />
            
        </div>

        <div className="col-lg-8 py-3">
            <img className="banner" src="https://quomodosoft.com/html/newsprk/assets/images/ad/ad-1.png" alt="" />
        </div>
        </div>
    </div>
</div>

{/* headerstart */}

    <div className="container">
      <div className="row">
        <div className="col-lg-6">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
         <li className="nav-item dropdown px-2">
          <a className="nav-link dropdown-toggle text-black nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul className="dropdown-menu">
            <li className="py-2"><a className="dropdown-item" href="#">Home 1</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Home 2</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Home 3</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Home 4</a></li>
          </ul>
        </li>
         <li className="nav-item dropdown  px-2">
          <a className="nav-link dropdown-toggle text-black  nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu text-black">
            <li className="py-2"><a className="dropdown-item" href="#">Aobuts Us</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Archive</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Contact</a></li>
             <li className="py-2"><a className="dropdown-item" href="#">404</a></li>
          </ul>
        </li>

         <li className="nav-item dropdown  px-2">
          <a className="nav-link dropdown-toggle text-black  nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Posts
          </a>
          <ul className="dropdown-menu text-black">
            <li className="py-2"><a className="dropdown-item" href="#">General Post</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Video Post</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Audio Post</a></li>
          </ul>
        </li>

         <li className="nav-item dropdown  px-2">
          <a className="nav-link dropdown-toggle text-black  nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu text-black ">
            {categories.map((a)=>(
               <li className="px-3 pt-3">
                 
              <Link className="text-decoration-none text-dark">  {a.name}</Link> 
         </li>
            ))}
          
          </ul>
        </li> 

        <li className="nav-item px-2">
          <a className="nav-link active  nav" aria-current="page" href="#">World</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link text-black  nav" href="#">Sports</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link text-black  nav" href="#">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>

        <div className="col-lg-4 offset-2 text-end">
          <ul className="d-flex gap-2">
            <li className="fs-4"><CiSearch /></li>
            <li className="fs-4 border-end px-2"><FaRegCircleUser /></li>
            <li className="nav-item dropdown  px-2 border-end">
          <a className="nav-link dropdown-toggle text-black  nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            English
          </a>
          <ul className="dropdown-menu text-black ">
            <li className="py-2"><a className="dropdown-item" href="#">English</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Bangal</a></li>
            <li className="py-2"><a className="dropdown-item" href="#">Hindi</a></li>
             <li className="py-2"><a className="dropdown-item" href="#">Option</a></li>
              <li className="py-2"><a className="dropdown-item" href="#">Potato</a></li>
          </ul>
        </li> 

        <li className="fs-2"><PiSunHorizon className="text-primary" /></li>
        <li>
          <ul>
            <li>13 0C</li>
<li className="text-black-50">San Francisco</li>
          </ul>

        </li>
          </ul>
        </div>
      </div>



        
    </div>


{/* headerend */}
<Routes>
  <Route path="/cata/:cid/" element={<Categories/>}/>
</Routes>

</>

    )

}

export default Header;