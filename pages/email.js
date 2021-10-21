import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import email2 from "./assets/email-send.png";
import emailConvo from "./assets/email-convo.png";
import emailFill from "./assets/email-fill.png";
import conversationReturn from "./assets/conversation-return.png";
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

export default function Email() {
  return (
    <div
      style={{ backgroundColor: "#FFFEFC" }}
      className="px-6 sm:px-12 xl:px-24 2xl:px-60"
    >
      <Head>
        {/* HTML Meta Tags */}
        <title> Email Campaigns - BigRadar.io </title>
        <meta
          name="description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />

        {/* Google / Search Engine Tags */}
        <meta itemprop="name" content="Email Campaigns - BigRadar.io" />
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
        <meta property="og:title" content="Email Campaigns - BigRadar.io" />
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
        <meta name="twitter:title" content="Email Campaigns - BigRadar.io" />
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
          <h5 class="text-gray-400 font-light text-lg">Email</h5>
          <h1 class="text-3xl md:text-5xl font-semibold md:leading-snug m-0">
            Email Campaigns
          </h1>
          <p class="w-10/12 text-lg xl:w-3/4 text-gray-400 font-light m-0">
            Leverage your user database potential by engaging them with email
            marketing
          </p>
          {/* <div class="w-full pt-10">
                    <Link to="/demo">
                        <button class="w-8/12 md:w-60 h-14 bg-black rounded text-white" >
                                    Book Demo
                        </button>
                    </Link>
                    </div> */}
        </div>
      </div>

      <div>
        <div class="md:pt-24 lg:pt-20 xl:pt-24 lg:flex">
          {/* hero image start */}
          <div class="w-full sm:w-9/12 pt-24 md:pt-0 lg:w-2/4  flex justify-start">
            <Image class="w-full" src={email2} alt="Hero" />
          </div>
          {/* hero image end */}

          {/* hero text start */}
          <div class="w-full pt-16 lg:pt-24 md:pt-20 xl:pt-48 md:pt-16 lg:w-2/4 lg:pl-14 ">
            <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl  font-semibold">
              Engage with Email
            </h1>
            <p class="lg:py-4 pt-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
              Send more personalized email than ever before to your customers
              based on 100s of behavior events.
            </p>
            <p class="lg:py-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
              Auto Campaigns: Preset the campaigns and let BigRadar handle it
              while you are enjoying your holidays in Bahamas 🙂
            </p>
            <p class="lg:py-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
              Manual Campaigns: Ofcourse, you can send email to your user base
              by segments and other parameters
            </p>
          </div>
          {/* Hero text Ends */}
        </div>
      </div>

      <div class="md:pt-24 lg:pt-40 xl:pt-72 pt-16 lg:flex lg:flex-wrap">
        <div class="md:w-10/12 lg:w-6/12">
          <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl  font-semibold">
            BigRadar will never let your visitor go out of your reach
          </h1>

          <p class="lg:py-4 pt-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
            Customers can start conversations at any time, even when your team
            is not online.
          </p>

          <div class="w-full lg:w-9/12 pt-10">
            <Image src={emailFill} alt="widget" />
          </div>
        </div>

        <div class="md:pt-20 md:w-full lg:pt-72 lg:pl-4 lg:w-5/12">
          <p class="lg:py-4 pt-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
            If your customer steps away and doesn’t see your message, BigRadar
            automatically sends messages to their email where they can continue
            the conversation.
          </p>

          <div class="w-full xl:w-11/12 pt-10">
            <Image src={emailConvo} alt="widget" />
          </div>
        </div>

        <div class="pt-16 md:pt-20 md:w-10/12 lg:w-full lg:pt-0 lg:flex">
          <div>
            <Image
              class="w-full lg:w-11/12 xl:w-full pt-10"
              src={conversationReturn}
              alt="widget"
            />
          </div>
          <div class="lg:pt-40 lg:pl-20">
            <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl  font-semibold">
              Chat conversations continue
            </h1>

            <p class="lg:py-4 pt-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
              When your customer goes back to your website, they’ll be able to
              pick up the conversation in the live chat widget there too.
            </p>
            <p class="lg:py-4 pt-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light">
              No need to start the conversation all over again, and no need for
              your customer to repeat themselves.
            </p>
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
