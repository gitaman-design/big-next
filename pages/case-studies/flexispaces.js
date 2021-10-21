import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import fsCase from "../assets/fs-case.png";
import client5 from "../assets/client-5.png";
import stat1 from "../assets/26.png";
import stat2 from "../assets/44.png";
import ss1 from "../assets/fsSS1.png";
import ss2 from "../assets/fsSS2.png";
import cli from "../assets/ProShivam.png";

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
        <title> FlexiSpaces - Case Study - BigRadar.io </title>
        <meta
          name="description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />

        {/* Google / Search Engine Tags */}
        <meta
          itemprop="name"
          content="FlexiSpaces - Case Study - BigRadar.io"
        />
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
          content="FlexiSpaces - Case Study - BigRadar.io"
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
          content="FlexiSpaces - Case Study - BigRadar.io"
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

      <div class="pt-10 rounded md:flex">
        <div class="md:w-6/12 md:pt-6 xl:pr-20 xl:pt-20">
          <div class="w-20 mb-6">
            <Image src={client5} alt="flexi-spaces" />
          </div>
          <h1 class="text-3xl lg:text-3xl xl:text-4xl sm:text-2xl font-semibold">
            How FlexiSpaces uses BigRadar to acquire new customers.
          </h1>
          <p class="text-base xl:text-lg">
            FlexiSpaces.com is a dynamic startup in India which is disrupting
            the traditional capital intensive office spaces. They operate like a
            AirBnb like model where office space landlords can list their
            furnished spaces to tenants on pay-as-you-go basis.{" "}
          </p>
        </div>

        <div class="md:w-6/12 m-auto mt-10 md:mt-2 w-full lg:mt-0">
          <Link href="/case-study/flexispaces">
            <Image src={fsCase} alt="Shivam-Abrol" />
          </Link>
        </div>
      </div>

      <div class="mt-20 xl:mt-32 lg:flex">
        <div class="lg:w-9/12 lg:pr-32">
          <div class="py-10">
            <h4
              style={{ color: "#FFB008" }}
              class="text-xl xl:text-3xl font-semibold italic"
            >
              The Challenge: People reached to website via organic and paid
              channels but left with any enquiries or sale.
            </h4>
          </div>
          <div>
            <h4 class="text-lg xl:text-2xl font-semibold">
              FlexiSpaces.com is a dynamic startup in India which is disrupting
              the traditional capital intensive office spaces. They operate like
              a AirBnb like model where office space landlords can list their
              furnished spaces to tenants on pay-as-you-go basis.
            </h4>
            <p class="text-base xl:text-lg">
              In just one-year of starting up it reached $200k in sales and
              quickly scaled further. FlexiSpaces marketing team made further
              efforts to extend their reach, but they realized a gap in the
              communication with new potential customers who reached to
              FlexiSpaces website
              <span class="underline">
                {" "}
                but ordering office space is not like placing an ordering a book
                on Amazon.
              </span>
            </p>

            <p class="text-base xl:text-lg">
              In most of the cases, their customers want to visit the space
              first before they actually consider any ordering any of the
              available space.
            </p>
          </div>
          <div>
            <div class="md:flex md:py-10">
              <div class="py-8 md:px-20">
                <Image class="m-auto" src={stat1} alt="stats" />
                <p class="text-center text-base">New Conversations</p>
              </div>
              <div class="py-8 md:px-20">
                <Image class="m-auto" src={stat2} alt="stats" />
                <p class="text-center text-base">Increased MoM</p>
              </div>
            </div>
          </div>
          <div>
            <Image class=" m-auto" src={ss1} alt="widget" />
          </div>
          <div class="mt-20">
            <p class="text-base xl:text-lg">
              People do visit multiple spaces but left the website due to
              unknown reasons.
              <br></br>
              <br></br>
              So, at some point of time FlexiSpaces team needed a platform which
              can help them to speak to such customers and further engage their
              audience using Chatbots, Live Chat and Email.
            </p>
          </div>
          <div class="pt-10">
            <h4
              style={{ color: "#FFB008" }}
              class="text-xl xl:text-3xl font-semibold italic"
            >
              The Solution: Speak to your customers and build more business
              relationships
            </h4>
          </div>
          <div class="mt-20 border-l-4 border-black pl-4 ">
            <p class="text-base xl:text-lg">
              Initially i searched and tried plenty of chatbot and such tools
              but nothing worked as we thought. Few lacked with chatbot
              capabilities and few were just live chat tools. Finally, we landed
              to BigRadar which looked like similar tools as other but it's team
              really help us in setting up the platform to achieve our goals.
            </p>
            <div class="flex items-center">
              <div>
                <Image src={cli} alt="client" />
              </div>
              <div class="pl-4">
                <h3 class="m-0 font-semibold text-base">Shivam Abrol</h3>
                <p class="m-0">Head of marketing, FlexiSpaces</p>
              </div>
            </div>
          </div>
          <div class="mt-20">
            <p class="text-base xl:text-lg">
              BigRadar beautifully initiates a conversation with new visitor and
              makes them feel like privileged member. It really helped us in
              generating more inquiries for the space partners.
            </p>
          </div>
          <div>
            <Image class="pt-10 m-auto" src={ss2} alt="widget" />
          </div>
        </div>
        <div class="lg:w-4/12">
          <div class="mt-20 lg:mt-0">
            <h3 class="text-lg">Company</h3>
            <p class="text-base">
              FlexiSpaces is a dynamic startup in India which is disrupting the
              traditional capital intensive office spaces. They operate like a
              AirBnb like model where office space landlords can list their
              furnished spaces to tenants on pay-as-you-go basis.
            </p>
            <a
              href="https://www.flexispaces.com"
              target="_blank"
              rel="noreferrer"
            >
              <p class="underline text-black text-lg">www.flexispaces.com</p>
            </a>
          </div>
          <div class="mt-10">
            <h3 class="text-lg">Headquarters</h3>
            <p class="text-base">Delhi, India</p>
          </div>
          <div class="mt-10">
            <h3 class="text-lg">Industry</h3>
            <p class="text-base">Software, Co-working</p>
          </div>
          <div class="mt-10">
            <h3 class="text-lg">Product Used</h3>
            <Link href="/product/livechat">
              <p class="text-base underline text-black">Live Chat</p>
            </Link>
            <Link href="/product/chatbots">
              <p class="text-base underline text-black">ChatBots</p>
            </Link>
            <Link href="/product/email">
              <p class="text-base underline text-black">Email Campaigns</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
