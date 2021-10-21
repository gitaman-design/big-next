import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import fsCase from "../assets/fs-case.png";
import aicfCase from "../assets/aicf-case.png";
import client5 from "../assets/client-5.png";
import client4 from "../assets/client-4.png";
import zapier from "../assets/zapier.png";
import zendesk from "../assets/zendesk.png";
import hubspot from "../assets/hubspot.png";
import wordpress from "../assets/wordpress.png";
import shopify from "../assets/shopify.png";
import mailchimp from "../assets/mailchimp.png";
import nin1 from "../assets/nin1.svg";
import nin2 from "../assets/nin2.svg";
import nin3 from "../assets/nin3.svg";
import nin4 from "../assets/nin4.svg";

const handleWidget = () => {
  window.BigRadar?.open();
};

export default function CaseStudy() {
  return (
    <div
      style={{ backgroundColor: "#FFFEFC" }}
      className="px-6 sm:px-12 xl:px-24 2xl:px-60"
    >
      <Head>
        {/* HTML Meta Tags */}
        <title> Case Studies - BigRadar.io </title>
        <meta
          name="description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />

        {/* Google / Search Engine Tags */}
        <meta itemprop="name" content="Case Studies - BigRadar.io" />
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
        <meta property="og:title" content="Case Studies - BigRadar.io" />
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
        <meta name="twitter:title" content="Case Studies - BigRadar.io" />
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

      <div class="pt-10 ">
        <div>
          <h5 class="text-gray-400 font-light text-lg">
            Our customer’s stories
          </h5>
          <h1 class="text-3xl md:text-5xl font-semibold md:leading-snug">
            Case Studies.
          </h1>
          {/* <h5 class="text-black font-light text-lg">Our customer’s stories lorem ipsum dolor sitor lorem ipsum dolor sitor 🙂 </h5> */}
        </div>
      </div>

      <div
        style={{ backgroundColor: "#F9F5F1" }}
        class="mt-10 p-6 lg:p-10 rounded md:flex"
      >
        <div class="md:w-6/12 md:pt-6 xl:pr-20 xl:pt-20">
          <div class="w-20 mb-6">
            <Image src={client5} alt="flexi-spaces" />
          </div>
          <h2 class="text-xl xl:text-2xl">
            How FlexiSpaces uses BigRadar to acquire new customers
          </h2>
          <p class="xl:text-lg">
            FlexiSpaces.com is a dynamic startup in India which is disrupting
            the traditional capital intensive office spaces. They operate like a
            AirBnb like model where office space...
          </p>
          <Link href="/case-studies/flexispaces">
            <h4 class="underline text-base xl:text-lg xl:mt-8">
              Read Case Study >
            </h4>
          </Link>
        </div>

        <div class="md:w-6/12 m-auto mt-10 md:mt-2 w-full lg:mt-0">
          <Link href="/case-studies/flexispaces">
            <Image class="  " src={fsCase} alt="Shivam-Abrol" />
          </Link>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#F9F5F1" }}
        class="mt-10 lg:p-10 p-6 rounded md:flex"
      >
        <div class="md:w-6/12 mt-10 md:mt-2 w-full m-auto lg:mt-0">
          <Link href="/case-studies/aicf">
            <Image class="" src={aicfCase} alt="Bharat-Singh-Chauhan" />
          </Link>
        </div>

        <div class="md:w-6/12 md:pl-4 md:pt-6 xl:pl-10 xl:pt-20 pt-12">
          <div class="w-52 mb-6">
            <Image src={client4} alt="flexi-spaces" />
          </div>
          <h2 class="text-xl xl:text-2xl">
            All India Chess Federation giving support to their members with new
            AI and conversational based technology.
          </h2>
          <p class="xl:text-lg">
            The All India Chess Federation (AICF) is central administrative body
            for the game of chess in India. Founded in 1951, the federation is
            affiliated to Fédération Internationale des Échecs (FIDE),
          </p>
          <Link href="/case-studies/aicf">
            <h4 class="underline text-base xl:text-lg xl:mt-8">
              Read Case Study >
            </h4>
          </Link>
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
