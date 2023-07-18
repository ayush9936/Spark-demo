import React, { useState } from "react";
import "./page.css";
import {
  AiFillHome,
  AiFillSignal,
  AiFillTool,
  AiFillWarning,
} from "react-icons/ai";
import { BiPhoneCall, BiLinkAlt } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import {AiOutlineCheck} from "react-icons/ai"
import hero from "../image/hero.jpg";
const Page = () => {
  const [button, setButton] = useState(1);
  const handle = (btnIndex) => {
    setButton(btnIndex);
  };
  return (
    <>
      <section>
        <div className="container backdrop-opacity-10  ">
          <div className="row   pt-8 ">
            <p className="text-5xl font-bold text-white text-center capitalize">
              what's your plan today
            </p>
            <p className="text-xl text-center text-slate-200 leading-10 mt-5 ">
              All the top locations from restaurants and clubs, to galleries,
              famous places and more...
            </p>
          </div>
          <div className="tabs mt-14 flex justify-start mx-52 ">
            <button
              className={` backdrop-blur-sm bg-white/10 px-5 py-2 rounded-full  font-bold hover:text-[#ff6b6b]  hover:bg-white ${
                button === 1
                  ? " bg-[#ff6b6b] text-white  "
                  : "backdrop-blur-sm bg-white/10 text-white"
              } `}
              onClick={() => handle(1)}
            >
              Places
            </button>
            <button
              className={` backdrop-blur-sm bg-white/10 px-5 py-2 rounded-full  font-bold hover:text-[#ff6b6b]  hover:bg-white mx-2 ${
                button === 2
                  ? " bg-[#ff6b6b] text-white  "
                  : "backdrop-blur-sm bg-white/10 text-white"
              } `}
              onClick={() => handle(2)}
            >
              Event
            </button>
            <button
              className={` backdrop-blur-sm bg-white/10 px-5 py-2 rounded-full  font-bold hover:text-[#ff6b6b]  hover:bg-white mx-2 ${
                button === 3
                  ? " bg-[#ff6b6b] text-white "
                  : "backdrop-blur-sm bg-white/10 text-white"
              } `}
              onClick={() => handle(3)}
            >
              Job
            </button>
            <button
              className={` backdrop-blur-sm bg-white/10 px-5 py-2 rounded-full  font-bold hover:text-[#ff6b6b]  hover:bg-white mx-2 ${
                button === 4
                  ? " bg-[#ff6b6b] text-white  "
                  : "backdrop-blur-sm bg-white/10 text-white"
              } `}
              onClick={() => handle(4)}
            >
              Real State
            </button>
          </div>
          <div className="row mt-10 ">
            <form className=" flex flex-col md:flex-row flex justify-center items-center border rounded-md  h-24 mx-40 bg-white ">
              <input
                type="text"
                placeholder="what are you looking for?"
                className=" block rounded-md w-80  mt-2  border-gray-400"
              />
              <select
                class="
                    block
                   
                   w-80
                    rounded-md
                  mt-2 md:ml-2
                border-gray-400
                  
                    
                  "
              >
                <option>Select location</option>
                <option>usa</option>
                <option>Afganistan</option>
                <option>India</option>
                <option>Austria</option>
                <option>Russia</option>
                <option>India</option>
              </select>
              <select
                class="
                    block
                  w-80
                    
                   mt-2 md:ml-2
                    rounded-md
                    border-gray-400
                    
                  "
              >
                <option>Category</option>
                <option>All Category</option>
                <option>Hotel</option>
                <option>Shop</option>
              </select>
              <button className="bg-rose-500 text-white py-3  px-5 font-bold rounded-sm ml-2">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="container bg-[#f5f7fc]">
        <div className="row">
          <div className="sub-headinig text-center  font-bold text-[333F57] text-3xl my-10">
            Get Started With Bellamension
          </div>
        </div>
        <div class="box-group">
          <div class="box bg-white hover:border w-64 h-64 rounded-lg shadow-lg ">
            <div class="absolute inset-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <img
                src={hero}
                alt="Hover Image"
                class="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div class="circle bg-[#ff6b6b]  ">
              <AiFillHome className=" text-3xl text-white" />
            </div>

            <p class="box-text mt-[120px] p-4  ">
              Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
            </p>
          </div>
          <div class="box hover:border w-64 h-64 bg-white rounded-lg shadow-lg">
            <div class="absolute inset-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <img
                src={hero}
                alt="Hover Image"
                class="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div class="circle bg-[#ff6b6b] ">
              <AiFillSignal className="text-3xl text-white" />
            </div>

            <p class="box-text mt-[120px] p-4">
              Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
            </p>
          </div>
          <div class="box hover:border w-64 h-64 bg-white rounded-lg shadow-lg">
            <div class="absolute inset-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <img
                src={hero}
                alt="Hover Image"
                class="w-full h-full rounded-lg object-cover"
              />
            </div>

            <div class="circle bg-[#ff6b6b] ">
              <AiFillWarning className="text-3xl text-white" />
            </div>
            <p class="box-text mt-[120px] p-4">
              Robotic <br />
              Production Line
            </p>
          </div>
          <div class="box  w-64 h-64 bg-white rounded-lg shadow-lg">
            <div class="absolute inset-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <img
                src={hero}
                alt="Hover Image"
                class="w-full h-full rounded-lg object-cover"
              />
            </div>

            <div class="circle bg-[#ff6b6b] ">
              <AiFillTool className="text-3xl text-white" />
            </div>
            <p class="box-text mt-[120px] p-4 hover:text-white ">
              Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="text-center font-bold text-3xl text-[333F57] my-14">
          Most Visited Places
        </p>
        <div class="box-group ">
          <div class="box bg-white hover:border w-80 h-96 rounded-lg shadow-lg">
            <div className="relative  ">
              <img
                src={hero}
                alt="place image"
                className="rounded-md object-cover h-full w-full"
              />
              <div class="absolute top-0 left-0 p-2 text-white rounded-full bg-green-600 hover:bg-[#ff6b6b] mx-2 my-4">
                <p class="text-xs font-bold ">New Open</p>
              </div>
            </div>
            <div className="flex justify-start mx-2 my-1 font-bold text-[333F57] text-lg">
              Hotel Taj
            </div>
            <div className="flex justify-start mx-2  text-gray-500">
              Bishop Avenue New york
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8  hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white   ">
              <span className="absolute  ">
                {" "}
                <BiPhoneCall />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500">
                254564468
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <BiLinkAlt />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-[#ff6b6b] ">
                <a href="#">www.xyxz.com</a>
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <MdDateRange />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500 ">
                01/02/23
              </span>
            </div>
          </div>
          <div class="box bg-white hover:border w-80 h-96 rounded-lg shadow-lg">
            <div className="relative  ">
              <img
                src={hero}
                alt="place image"
                className="rounded-md object-cover h-full w-full"
              />
              <div class="absolute top-0 left-0 p-2 text-white rounded-full bg-green-600 hover:bg-[#ff6b6b] mx-2 my-4">
                <p class="text-xs font-bold ">New Open</p>
              </div>
            </div>
            <div className="flex justify-start mx-2 my-1 font-bold text-[333F57] text-lg">
              Hotel Taj
            </div>
            <div className="flex justify-start mx-2  text-gray-500">
              Bishop Avenue New york
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8  hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white   ">
              <span className="absolute  ">
                {" "}
                <BiPhoneCall />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500">
                254564468
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <BiLinkAlt />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-[#ff6b6b] ">
                <a href="#">www.xyxz.com</a>
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <MdDateRange />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500 ">
                01/02/23
              </span>
            </div>
          </div>
          <div class="box bg-white hover:border w-80 h-96 rounded-lg shadow-lg">
            <div className="relative  ">
              <img
                src={hero}
                alt="place image"
                className="rounded-md object-cover h-full w-full"
              />
              <div class="absolute top-0 left-0 p-2 text-white rounded-full bg-green-600 hover:bg-[#ff6b6b] mx-2 my-4">
                <p class="text-xs font-bold px-2">Closed</p>
              </div>
            </div>
            <div className="flex justify-start mx-2 my-1 font-bold text-[333F57] text-lg">
              Hotel Taj
            </div>
            <div className="flex justify-start mx-2  text-gray-500">
              Bishop Avenue New york
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8  hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white   ">
              <span className="absolute  ">
                {" "}
                <BiPhoneCall />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500">
                254564468
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <BiLinkAlt />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-[#ff6b6b] ">
                <a href="#">www.xyxz.com</a>
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <MdDateRange />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500 ">
                01/02/23
              </span>
            </div>
          </div>
          <div class="box bg-white hover:border w-80 h-96 rounded-lg shadow-lg">
            <div className="relative  ">
              <img
                src={hero}
                alt="place image"
                className="rounded-md object-cover h-full w-full"
              />
              <div class="absolute top-0 left-0 p-2 text-white rounded-full bg-green-600 hover:bg-[#ff6b6b] mx-2 my-4">
                <p class="text-xs font-bold px-2">Closed</p>
              </div>
            </div>
            <div className="flex justify-start mx-2 my-1 font-bold text-[333F57] text-lg">
              Hotel Govendor
            </div>
            <div className="flex justify-start mx-2  text-gray-500">
              France Belly
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8  hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white   ">
              <span className="absolute  ">
                {" "}
                <BiPhoneCall />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500">
                254564468
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <BiLinkAlt />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-[#ff6b6b] ">
                <a href="#">www.xyxz.com</a>
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <MdDateRange />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500 ">
                05/05/23
              </span>
            </div>
          </div>
          <div class="box bg-white hover:border w-80 h-96 rounded-lg shadow-lg">
            <div className="relative  ">
              <img
                src={hero}
                alt="place image"
                className="rounded-md object-cover h-full w-full"
              />
              <div class="absolute top-0 left-0 p-2 text-white rounded-full bg-green-600 hover:bg-[#ff6b6b] mx-2 my-4">
                <p class="text-xs font-bold ">New Open</p>
              </div>
            </div>
            <div className="flex justify-start mx-2 my-1 font-bold text-[333F57] text-lg">
              Hotel Taj
            </div>
            <div className="flex justify-start mx-2  text-gray-500">
              Bishop Avenue{" "}
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8  hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white   ">
              <span className="absolute  ">
                {" "}
                <BiPhoneCall />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500">
                254564468
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <BiLinkAlt />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-[#ff6b6b] ">
                <a href="#">www.xyxz.com</a>
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <MdDateRange />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500 ">
                01/02/23
              </span>
            </div>
          </div>
          <div class="box bg-white hover:border w-80 h-96 rounded-lg shadow-lg">
            <div className="relative  ">
              <img
                src={hero}
                alt="place image"
                className="rounded-md object-cover h-full w-full"
              />
              <div class="absolute top-0 left-0 p-2 text-white rounded-full bg-green-600 hover:bg-[#ff6b6b] mx-2 my-4">
                <p class="text-xs font-bold ">New Open</p>
              </div>
            </div>
            <div className="flex justify-start mx-2 my-1 font-bold text-[333F57] text-lg">
              Hotel Taj
            </div>
            <div className="flex justify-start mx-2  text-gray-500">
              Bishop Avenue New york
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8  hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white   ">
              <span className="absolute  ">
                {" "}
                <BiPhoneCall />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500">
                254564468
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <BiLinkAlt />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-[#ff6b6b] ">
                <a href="#">www.xyxz.com</a>
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <MdDateRange />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500 ">
                01/02/23
              </span>
            </div>
          </div>
          <div class="box bg-white hover:border w-80 h-96 rounded-lg shadow-lg">
            <div className="relative  ">
              <img
                src={hero}
                alt="place image"
                className="rounded-md object-cover h-full w-full"
              />
              <div class="absolute top-0 left-0 p-2 text-white rounded-full bg-green-600 hover:bg-[#ff6b6b] mx-2 my-4">
                <p class="text-xs font-bold px-2">Closed</p>
              </div>
            </div>
            <div className="flex justify-start mx-2 my-1 font-bold text-[333F57] text-lg">
              Clothing shopping Mall
            </div>
            <div className="flex justify-start mx-2  text-gray-500">
              Bishop Avenue New Delhi
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8  hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white   ">
              <span className="absolute  ">
                {" "}
                <BiPhoneCall />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500">
                254564468
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <BiLinkAlt />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-[#ff6b6b] ">
                <a href="#">www.xxz.com</a>
              </span>
            </div>
            <div className=" relative flex justify-start justify-center items-center mx-5 my-2 rounded-full bg-[hsla(0,100%,71%,.1)] w-8 h-8 hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white ">
              <span className="absolute  ">
                {" "}
                <MdDateRange />{" "}
              </span>{" "}
              <span className="ml-36 text-gray-500 hover:text-gray-500 ">
                07/02/23
              </span>
            </div>
          </div>
        </div>
      </div>






      <div className="container">
        <p className="font-bold text-[333F57] text-center my-20 text-3xl ">Why Choose Us</p>

        <div class="box-group ">
        <div class="box h-40 w-96 border ">
          <div className=" relative  flex justify-center items-center rounded-full w-20 h-20 bg-[hsla(0,100%,71%,.1)] hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white mx-5 my-2"><AiOutlineCheck className="absolute text-2xl"/>
          
          </div>
     <div className="px-2 ">
      <p>There are many variations of passages of Lorem Ipsum available, by injected humour,</p>
     </div>
        </div>
        <div class="box h-40 w-96 border">
          <div className=" flex justify-center items-center rounded-full w-20 h-20 bg-[hsla(0,100%,71%,.1)] hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white mx-5 my-2"><AiOutlineCheck className="text-2xl"/>
          
          </div>
     <div className="px-2 ">
      <p>There are many variations of passages of Lorem Ipsum available, by injected humour,</p>
     </div>
        </div>
        <div class="box h-40 w-96 border">
          <div className=" flex justify-center items-center rounded-full w-20 h-20 bg-[hsla(0,100%,71%,.1)] hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white mx-5 my-2"><AiOutlineCheck className="text-2xl"/>
          
          </div>
     <div className="px-2 ">
      <p>There are many variations of passages of Lorem Ipsum available, by injected humour,</p>
     </div>
        </div>
        <div class="box h-40 w-96 border">
          <div className=" flex justify-center items-center rounded-full w-20 h-20 bg-[hsla(0,100%,71%,.1)] hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white mx-5 my-2"><AiOutlineCheck className="text-2xl"/>
          
          </div>
     <div className="px-2 ">
      <p>There are many variations of passages of Lorem Ipsum available, by injected humour,</p>
     </div>
        </div>
        <div class="box h-40 w-96 border">
          <div className=" flex justify-center items-center rounded-full w-20 h-20 bg-[hsla(0,100%,71%,.1)] hover:bg-[#ff6b6b] text-[#ff6b6b] hover:text-white mx-5 my-2"><AiOutlineCheck className="text-2xl"/>
          
          </div>
     <div className="px-2 ">
      <p>There are many variations of passages of Lorem Ipsum available, by injected humour,</p>
     </div>
        </div>
        
        </div>
      </div>



     

      {/* <div class="relative">
  <img src={hero} alt="Image" class="w-full h-auto"/>
  <div class="absolute top-0 left-0 p-4 text-white">
    <p class="text-lg font-bold">Overlay Text</p>
    <p class="text-sm">Some additional text</p>
  </div>
</div> */}
    </>
  );
};

export default Page;
