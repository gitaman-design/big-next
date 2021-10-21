import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import tick from "./assets/tick.svg";
import demoChat from "./assets/demo-chat.png";
import dash from "./assets/new-dash.png";
import save from "./assets/save.svg";
import custom from "./assets/custom.svg";
import offline from "./assets/offline.svg";
import GIF from "./assets/GIF.svg";

import zapier from "./assets/zapier.png";
import zendesk from "./assets/zendesk.png";
import hubspot from "./assets/hubspot.png";
import wordpress from "./assets/wordpress.png";
import shopify from "./assets/shopify.png";
import mailchimp from "./assets/mailchimp.png";
import nin1 from "./assets/nin1.svg";
import nin2 from "./assets/nin2.svg";
import nin3 from "./assets/nin3.svg";
import nin4 from "./assets/nin4.svg";

const handleWidget = () => {
  window.BigRadar?.open();
};

export default function LiveChat() {
  return (
    <div style={{ backgroundColor: "#FFFEFC" }} className="">
      <Head>
        {/* HTML Meta Tags */}
        <title> LiveChat - BigRadar.io </title>
        <meta
          name="description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />

        {/* Google / Search Engine Tags */}
        <meta itemprop="name" content="LiveChat - BigRadar.io" />
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
        <meta property="og:title" content="LiveChat - BigRadar.io" />
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
        <meta name="twitter:title" content="LiveChat - BigRadar.io" />
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

      <div class="pt-10 px-6 sm:px-12 xl:px-24 2xl:px-60">
        <div>
          <div class="md:flex">
            {/* hero image start */}
            <div class="w-full sm:w-2/4 pt-4 xl:w-2/4 flex justify-start">
              <Image class="w-full xl:w-9/12" src={demoChat} alt="Hero" />
            </div>
            {/* hero image end */}

            {/* hero text start */}
            <div class="w-full lg:pt-24 xl:pt-32s sm:w-2/4 py-2 sm:py-2 md:pl-8">
              <h5 class="text-gray-400 font-light py-4 text-lg">
                Live Chat Software for Website / Mobile App
              </h5>
              <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl  font-semibold">
                Messaging is what makes the difference.
              </h1>
              <p class="py-1 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
                Real-time messaging increases trust among your website visitors,
                which leads to more conversion and more sales.
              </p>
              <p class=" w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
                BigRadar's Modern chat experience make the customers feel like a
                pro support, even if you're away.
              </p>
              {/* Enter Email field */}
              <div class="my-10 border border-black w-6/12 h-14 xl:w-6/12 rounded">
                <a
                  href="https://app.bigradar.io/register/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="submit"
                    class="w-full h-full bg-black text-white hover:bg-gray-800"
                  >
                    Signup Now
                  </button>
                </a>
              </div>
            </div>
            {/* Hero text Ends */}
          </div>
        </div>
      </div>

      {/* pricing tables */}

      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
        <div>
          <div class="">
            <div class="w-full lg:pt-36 xl:pt-32 pt-20 sm:py-2 md:pt-32">
              <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl  font-semibold">
                Be Informed, pitch them right.
              </h1>
              <p class="lg:py-4 py-4 w-full text-lg xl:w-3/4 text-gray-400 font-light">
                BigRadar brings everything you need to know about the person
                visiting your website. While responding you'll know.
              </p>

              <ul class="list-disc list-inside text-lg font-light text-gray-400">
                <li>Location of the visitor (New York, United States)</li>
                <li class="pt-2">From which page the chat was started.</li>
                <li class="pt-2">First time visitor, or returning back.</li>
                <li class="pt-2">
                  All tech related info like Browser, Device, OS etc.
                </li>
              </ul>
            </div>
            {/* hero image start */}
            <div class="w-full pt-8 flex justify-start xl:w-9/12">
              <Image src={dash} alt="Hero" />
            </div>
            {/* hero image end */}
          </div>
        </div>
      </div>

      {/* FAQ */}

      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
        <div>
          <div class="md:flex pt-32">
            {/* hero image start */}
            <div class="w-full sm:w-2/4 pt-24 md:pt-0 xl:w-2/4 flex justify-start">
              <Image class="w-full xl:w-9/12" src={demoChat} alt="Hero" />
            </div>
            {/* hero image end */}

            {/* hero text start */}
            <div class="w-full lg:pt-24 md:pl-8 md:pt-20 xl:pt-60 sm:w-2/4 py-2">
              <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl  font-semibold">
                Respond on the go: BigRadar Mobile
              </h1>
              <p class="lg:py-4 py-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
                Our live chat mobile app make it easy for you to ditch your
                desktop and get the notification of new visitors on your mobile
                app on iOS and Android devices.
              </p>
            </div>
            {/* Hero text Ends */}
          </div>
        </div>
      </div>

      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
        <div
          style={{ backgroundColor: "#F9F5F1" }}
          class="gap-y-10 lg:gap-y-6 mt-20 pt-6 pb-6 md:flex md:flex-wrap"
        >
          {/* Box 1 */}
          <div class="text-center p-6 lg:p-20 md:w-80  lg:w-6/12">
            <Image class="w-12 m-auto" src={save} alt="icon" />
            <h4 class="text-xl font-medium pt-6 pb-2">Saved Replies</h4>
            <p style={{ color: "#8E8C8C", fontWeight: "normal" }}>
              Yep, you don't need to write the whole messages again and again,
              just type /refund and the auto reply of refund message will be
              typed on your screen.{" "}
            </p>
            {/* <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More ChatBot &gt;</h4> */}
          </div>
          {/* Box 2 */}
          <div class="text-center p-6 lg:p-20 md:w-80  lg:w-6/12">
            <Image class="w-14 m-auto" src={custom} alt="icon" />
            <h4 class="text-xl font-medium pt-6 pb-2">Custom fields</h4>
            <p style={{ color: "#8E8C8C", fontWeight: "normal" }}>
              No more oops, you can customise BigRadar data according to your
              business needs. Create as much as custom fields to make it
              awesome. All inputs like Text, List, Date etc.{" "}
            </p>
            {/* <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More Messaging &gt;</h4> */}
          </div>
          {/* Box 3 */}
          <div class="text-center p-6 lg:p-20 md:w-80 lg:w-6/12">
            <Image class="w-14 m-auto" src={offline} alt="icon" />
            <h4 class="text-xl font-medium pt-6 pb-2">
              Offline: Auto response
            </h4>
            <p style={{ color: "#8E8C8C", fontWeight: "normal" }}>
              You don't have to be online 24 hrs, BigRadar amazing asks your
              visitors to drop their contact information while you are resting
              on your bed, so you can get up and respond to them conveniently.
              No hurries 🙂
            </p>
            {/* <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More Engagement &gt;</h4> */}
          </div>
          {/* Box 4 */}
          <div class="text-center p-6 lg:p-20 md:w-80 lg:w-6/12">
            <Image class="w-14 m-auto" src={GIF} alt="icon" />
            <h4 class="text-xl font-medium pt-6 pb-2">GIFs, Images, Emoji's</h4>
            <p style={{ color: "#8E8C8C", fontWeight: "normal" }}>
              To make your conversations more human, BigRadar supports inputs
              like GIFs, Images, Documents, Emoji's.{" "}
            </p>
            {/* <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More Engagement &gt;</h4> */}
          </div>
        </div>
      </div>

      {/* integrations */}

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
    </div>
  );
}
