import React, { useState }from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from "./assets/br-black.svg";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const menu = (
  <Menu>
    <Menu.Item>
      <Link href="/livechat">
        <h4 class="hover:underline font-lg">Live Chat</h4>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/chatbots">
        <h4 class="hover:underline font-lg">Chat Bots</h4>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/email">
        <h4 class="hover:underline font-lg">Email Campaigns</h4>
      </Link>
    </Menu.Item>
    {/* <Menu.Item>
      <Link to="/product/engage">
        <h4 class="hover:underline">Engage People</h4>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/product/conversational-ux">
        <h4 class="hover:underline">Conversational UX</h4>
      </Link>
    </Menu.Item> */}
    
  </Menu>
);



function Header() {
  const [visible, setVisible] = useState(false);
  const renderHeader = () => {
    return (
      <>
        <div class="sm:flex flex justify-between cursor-pointer">
          <div class="w-32">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div class="hidden md:flex pt-10 sm:p-2 flex space-x-6 cursor-pointer">


              <Dropdown overlay={menu}>
                <a href="/" className="ant-dropdown-link text-black hover:text-black" onClick={e => e.preventDefault()}>
                Product <DownOutlined />
              </a>
              </Dropdown>
            <Link href="/pricing">
              <h4 class="hover:underline">Pricing</h4>
            </Link>
            <a href="https://bigradar.io/blog">
              <h4 class="hover:underline">Blog</h4>
            </a>
            <Link href="/case-studies">
              <h4 class="hover:underline">Case Studies</h4>
            </Link>
            <Link href="/demo">
              <h4 class="hover:underline">Demo</h4>
            </Link>
            <a href="https://app.bigradar.io/login">
              <h4 class="hover:underline">Login</h4>
            </a>
            <a href="https://app.bigradar.io/register">

            <h4 class="hover:underline">Signup</h4>
            </a>
          </div>
          {/* mobile button goes here */}
          <div class="md:hidden flex items-center">
            <button id="mobile-menu-button" class="mobile-menu-button" onClick={() => setVisible(!visible)}>
              {!visible ?
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              }
            </button>
                
          </div>
        </div>
        {/* mobile menu items */}
        {visible &&
          <div style={{backgroundColor: '#F9F5F1'}} class="mobile-menu items-center w-full text-center text-lg pt-8 space-y-8 mt-4 pb-8">
          <Dropdown overlay={menu} onClick={e => e.preventDefault()} trigger={['click']}>
                <a href="/" className="ant-dropdown-link text-black hover:text-black" onClick={e => e.preventDefault()}>
                Product <DownOutlined />
              </a>
              </Dropdown>
            <Link href="/pricing">
              <h4 class="pt-4">Pricing</h4>
            </Link>
            <a href="blog">
              <h4 class="pt-4">Blog</h4>
            </a>
            <Link href="/case-studies">
              <h4 class="pt-4">Case Studies</h4>
            </Link>
            <Link href="/demo">
              <h4 class="pt-4">Demo</h4>
            </Link>
            <a href="https://app.bigradar.io/login">
              <h4 class="pt-4">Login</h4>
            </a>
            <a href="https://app.bigradar.io/register">
              <h4 class="pt-4">Signup</h4>
            </a>
          </div>
        }
      </>
    );
  };
  
  

  return <div style={{backgroundColor: '#FFFEFC'}} class="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">{renderHeader()}</div>;
}

// //grab everything we need
// const btn = document.querySelector("btn.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// //add event listeneres
// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

export default Header;
