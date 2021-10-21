import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ecom from "../assets/ecom.png";
import message from "../assets/message.svg";
import offline from "../assets/offline.svg";
import mailchimp from "../assets/mailchimp.png";
import zapier from "../assets/zapier.png";
import zendesk from "../assets/zendesk.png";
import hubspot from "../assets/hubspot.png";
import wordpress from "../assets/wordpress.png";
import shopify from "../assets/shopify.png";
import nin1 from "../assets/nin1.svg";
import nin2 from "../assets/nin2.svg";
import nin3 from "../assets/nin3.svg";
import nin4 from "../assets/nin4.svg";

const handleWidget = () => {
  window.BigRadar?.open();
};

function Ecommerce() {
  return (
    <div
      style={{ backgroundColor: "#FFFEFC" }}
      className="px-6 sm:px-12 xl:px-24 2xl:px-60"
    >
      <Head>
        {/* HTML Meta Tags */}
        <title> E-Commerce - Industry - BigRadar.io </title>
        <meta
          name="description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />

        {/* Google / Search Engine Tags */}
        <meta itemprop="name" content="E-Commerce - Industry - BigRadar.io" />
        <meta
          itemprop="description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />
        <meta
          itemprop="image"
          content="https://www.bigradar.io/static/media/new-dash.db7c11af.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://coworly.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="E-Commerce - Industry - BigRadar.io"
        />
        <meta
          property="og:description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />
        <meta
          property="og:image"
          content="https://www.bigradar.io/static/media/new-dash.db7c11af.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E-Commerce - Industry - BigRadar.io"
        />
        <meta
          name="twitter:description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />
        <meta
          name="twitter:image"
          content="https://www.bigradar.io/static/media/new-dash.db7c11af.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home Banner */}

      <div class="md:flex items-center justify-between">
        <div class="md:w-6/12">
          <h5 class="text-gray-400 font-light text-lg">Email</h5>
          <h1 class="text-3xl md:text-5xl font-semibold md:leading-snug m-0">
            E-Commerce Industry Lorem Ipsum Dolor Sitr
          </h1>
          <p class="w-10/12 text-lg xl:w-3/4 text-gray-400 font-light m-0">
            Leverage your user database potential by engaging them with email
            marketing
          </p>
        </div>

        <div class="md:w-6/12">
          <div class="">
            <Image src={ecom} alt="banner" />
          </div>
        </div>
      </div>

      {/* Home Banner End */}

      {/* Message Feature */}

      <div
        style={{ backgroundColor: "#F9F5F2" }}
        class="flex items-center justify-between rounded p-6"
      >
        <div class="p-6 md:w-6/12">
          <Image src={message} alt="message"></Image>
        </div>

        <div class="p-6 md:w-6/12">
          <h1 class="text-3xl font-semibold">
            Lorem Ipsum dolor sitor is a heading<br></br> here It Will be
            Changed
          </h1>
          <p class="text-base">
            Leverage your user database potential by engaging them with email
            marketing everage your user database potential by engaging them with
            email marketingeverage your user database potential by engaging them
            with email marketing
          </p>
        </div>
      </div>

      {/* Message Feature End */}

      {/* Increase Productivity */}

      <div class="mt-20">
        <div>
          <h1 class="text-3xl font-semibold text-center">
            Increase Productivity Lorem <br></br>Ipsum dolor Sitor by 60%
          </h1>
          <p class="text-base text-center px-72">
            Leverage your user database potential by engaging them with email
            marketing everage your user database potential by engaging them with
            email marketingeverage your user database potential by engaging them
            with email marketing
          </p>
        </div>

        <div class="grid grid-cols-4 gap-16 mt-10">
          {/* div 1 */}
          <div>
            <div class="flex items-center">
              <div class="">
                <Image width={40} src={offline} alt="icons" />
              </div>
              <div class="ml-4">
                <h1 class="text-xl">Marketing</h1>
              </div>
            </div>
            <p>
              everage your user database potential by engaging them with email
              marketingeverage your user database
            </p>
          </div>
          {/* div 1 end */}
          {/* div 2 */}
          <div>
            <div class="flex items-center">
              <div class="">
                <Image width={40} src={offline} alt="icons" />
              </div>
              <div class="ml-4">
                <h1 class="text-xl">Marketing</h1>
              </div>
            </div>
            <p>
              everage your user database potential by engaging them with email
              marketingeverage your user database
            </p>
          </div>
          {/* div 2 end */}
          {/* div 3 */}
          <div>
            <div class="flex items-center">
              <div class="">
                <Image width={40} src={offline} alt="icons" />
              </div>
              <div class="ml-4">
                <h1 class="text-xl">Marketing</h1>
              </div>
            </div>
            <p>
              everage your user database potential by engaging them with email
              marketingeverage your user database
            </p>
          </div>
          {/* div 3 end */}
          {/* div 4 */}
          <div>
            <div class="flex items-center">
              <div class="">
                <Image width={40} src={offline} alt="icons" />
              </div>
              <div class="ml-4">
                <h1 class="text-xl">Marketing</h1>
              </div>
            </div>
            <p>
              everage your user database potential by engaging them with email
              marketingeverage your user database
            </p>
          </div>
          {/* div 4 end */}
        </div>

        {/* company logos */}

        <div class="grid grid-cols-6 gap-10 opacity-50 mt-10">
          <div>
            <Image src={mailchimp} alt="company logos" />
          </div>
          <div>
            <Image src={mailchimp} alt="company logos" />
          </div>
          <div>
            <Image src={mailchimp} alt="company logos" />
          </div>
          <div>
            <Image src={mailchimp} alt="company logos" />
          </div>
          <div>
            <Image src={mailchimp} alt="company logos" />
          </div>
          <div>
            <Image src={mailchimp} alt="company logos" />
          </div>
        </div>

        {/* company logos end */}
      </div>

      {/* Increase Productivity End */}

      {/* contact us */}

      <div class="bg-black p-10 text-white mt-32 rounded">
        <div class=" text-center">
          <h1 class="text-2xl lg:text-2xl sm:text-2xl font-semibold text-white">
            Register Now and Take Your E-Commerce Business by 50%
          </h1>
          <p class="w-full sm:text-sm lg:text-base xl:px-36 py-4 text-lg text-white font-light">
            BigRadar can help you build great bonding with your customers, even
            if you are away from your website. build great bonding with your
            customers, even if you are away from your website.
          </p>
          <div>
            <button
              class="w-48 h-14 border border-white text-white rounded mb-6"
              onClick={handleWidget}
            >
              Chat With Us
            </button>
            <button
              class="w-48 h-14 bg-white text-black rounded mb-6 ml-8"
              onClick={handleWidget}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* contact us end */}

      {/* integration start */}

      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60 pt-20">
        <div class="text-center md:px-14 lg:mt-20 lg:px-20">
          <h1 class="text-3xl lg:text-3xl xl:text-4xl sm:text-2xl font-semibold">
            BigRadar works with your favourite tools
          </h1>
          <p class="w-full sm:text-sm lg:text-xl xl:px-24 py-4 text-lg text-gray-400 font-light">
            BigRadar can help you build great bonding with your customers, even
            if you are away from your website.
          </p>
        </div>

        <div class="flex flex-wrap justify-center items-center content-center ">
          <div class="w-24 mr-4 mt-4">
            <Image src={zapier} alt="Zapier" />
          </div>
          <div class="w-24 mr-4 mt-4 xl:mr-8">
            <Image src={zendesk} alt="Zapier" />
          </div>
          <div class="w-24 mr-4 mt-4 xl:mr-8">
            <Image src={hubspot} alt="Zapier" />
          </div>
          <div class="w-24 mr-4 mt-4 xl:mr-8">
            <Image src={wordpress} alt="Zapier" />
          </div>
          <div class="w-24 mr-4 mt-4 xl:mr-8">
            <Image src={mailchimp} alt="Zapier" />
          </div>
          <div class="w-24 mr-4 mt-4">
            <Image src={shopify} alt="Zapier" />
          </div>
        </div>
      </div>

      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
        <hr
          style={{ borderWidth: "1px", borderColor: "#FCD5D5" }}
          class="my-16"
        />

        <div class="flex md:flex hidden  gap-10 my-6 p-10 pl-20 m-auto justify-center">
          <div class="px-8">
            <Image width={100} src={nin1} alt="1" />
          </div>
          <div class="px-8">
            <Image width={120} src={nin2} alt="1" />
          </div>
          <div class="px-8">
            <Image width={100} src={nin3} alt="1" />
          </div>
          <div class="px-8">
            <Image width={120} src={nin4} alt="1" />
          </div>
        </div>

        <div class="text-center md:px-14 lg:px-20 xl:px-32">
          <h1 class="text-3xl lg:text-3xl xl:text-4xl sm:text-2xl font-semibold">
            Our Customer Support Ninjas Are Always Available for you
          </h1>
          <p class="w-full sm:text-sm lg:text-xl py-4 text-lg text-gray-400 font-light">
            BigRadar can help you build great bonding with your customers, even
            if you are away from your website.
          </p>
          <button
            class="w-48 h-14 bg-black text-white hover:bg-gray-800 rounded mt-6 mb-6"
            onClick={handleWidget}
          >
            Chat With Us
          </button>
        </div>
      </div>

      {/* intergration End */}

      {/* End Div */}
    </div>
  );
}

export default Ecommerce;
