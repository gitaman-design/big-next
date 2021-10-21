import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import aicfCase from "../assets/aicf-case.png";
import client4 from "../assets/client-4.png";
import stat1 from "../assets/30min.png";
import stat2 from "../assets/55.png";
import ss1 from "../assets/aicfSS.png";
import cli from "../assets/ProBharat.png";

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
        <title> All India Chess Federation - Case Study - BigRadar.io </title>
        <meta
          name="description"
          content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
        />

        {/* Google / Search Engine Tags */}
        <meta
          itemprop="name"
          content="All India Chess Federation - BigRadar.io"
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
          content="All India Chess Federation - BigRadar.io"
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
          content="All India Chess Federation - BigRadar.io"
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
          <div class="w-72 mb-6">
            <Image src={client4} alt="flexi-spaces" />
          </div>
          <h1 class="text-3xl lg:text-3xl xl:text-4xl sm:text-2xl font-semibold">
            All India Chess Federation giving support to their members with new
            AI and conversational based technology.
          </h1>
          <p class="text-base xl:text-lg">
            The All India Chess Federation (AICF) is central administrative body
            for the game of chess in India. Founded in 1951, the federation is
            affiliated to Fédération Internationale des Échecs (FIDE), the world
            body for chess.{" "}
          </p>
        </div>

        <div class="md:w-6/12 m-auto mt-10 md:mt-2 w-full lg:mt-0">
          <Link href="/case-study/flexispaces">
            <Image src={aicfCase} alt="bharat-singh-chauhan" />
          </Link>
        </div>
      </div>

      <div>
        <div class="mt-20 xl:mt-32 lg:flex">
          <div class="lg:w-9/12 lg:pr-32">
            <div class="py-10">
              <h4
                style={{ color: "#FFB008" }}
                class="text-xl xl:text-3xl font-semibold italic"
              >
                The Challenge:With no support system in place, AICF always
                delayed in helping the members.
              </h4>
            </div>
            <div>
              <h4 class="text-lg xl:text-2xl font-semibold">
                The All India Chess Federation (AICF) is central administrative
                body for the game of chess in India. Founded in 1951, the
                federation is affiliated to Fédération Internationale des Échecs
                (FIDE), the world body for chess. The AICF has produced
                champions Viswanathan Anand, Nihal Sarin, Pentala Harikrishna,
                Rameshbabu Praggnanandhaa and Vidit Santosh Gujrathi and many
                other grandmasters. The organisation is also in charge of
                managing women's chess in India.
              </h4>
              <p class="text-base xl:text-lg">
                All India Chess Federation (AICF) is a really big sports
                organisation. They organise chess tournaments through out the
                year in india also manage membership, records for all the chess
                players and arbiters thats why chess community need support
                regularly but AICF did not have any support system in place.
              </p>

              <p class="text-base xl:text-lg">
                Without any support system hundreds of enquires are only handled
                on email and phone and because of this AICF team was not able to
                track anything. Team has to go through old emails to know the
                history or the enquiry and if enquiry came on phone so there
                were no history.
              </p>
              <p class="text-base xl:text-lg">
                AICF support team were putting efforts and time but still there
                were enquiries which they were missing and the response time to
                single enquiry was increasing day by day
              </p>
            </div>
            <div>
              <div class="md:flex md:py-10">
                <div class="py-8 md:px-20">
                  <Image class="m-auto" src={stat1} alt="stats" />
                  <p class="text-center text-base">Response Time</p>
                </div>
                <div class="py-8 md:px-20">
                  <Image class="m-auto" src={stat2} alt="stats" />
                  <p class="text-center text-base">More Issues Resolved</p>
                </div>
              </div>
            </div>
            <div>
              <Image class=" m-auto" src={ss1} alt="widget" />
            </div>
            <div class="mt-20">
              <p class="text-base xl:text-lg">
                so, at some point AICF team needs a system to support their
                community faster with the less men power behind the scene.
              </p>
            </div>
            <div class="pt-10">
              <h4
                style={{ color: "#FFB008" }}
                class="text-xl xl:text-3xl font-semibold italic"
              >
                The Solution: Use AI and conversation based approach to support
                members
              </h4>
            </div>
            <div class="mt-20 border-l-4 border-black pl-4 ">
              <p class="text-base xl:text-lg">
                We knew without the support system we are not supporting our
                members on time and our members are getting frustrated day by
                day, So we started finding the fast and easy way for customer
                support. Luckily we found BigRadar and they made our shift to
                conversation based customer support really smooth. Now we can
                help our community really fast with less men power
              </p>
              <div class="flex items-center">
                <div>
                  <Image src={cli} alt="client" />
                </div>
                <div class="pl-4">
                  <h3 class="m-0 font-semibold text-base">
                    Bharat Singh Chauhan
                  </h3>
                  <p class="m-0">Secretary, All India Chess Federation</p>
                </div>
              </div>
            </div>
            <div class="mt-20">
              <p class="text-base xl:text-lg">
                By switching to BigRadar now AICF support team gets player's
                enquiry in real time, its like chatting on WhatsApp. It doesn't
                matter support team is on the computer or not they can resolve
                the issues with their phone using BigRadar Mobile App.
                Everything can happen on the go.
              </p>
              <p class="text-base xl:text-lg">
                Detailed information of enquiries and users are handled by
                Bigradar so that support team can understand the history of the
                enquiry and resolve it as soon as possible.
              </p>
              <p class="text-base xl:text-lg">
                With the help ChatBots, if any enquiry comes in the night or on
                any holiday BigRadar handle the enquiry itself and save all the
                user information so that whenever support team come online they
                can contact the user and solve their issues.
              </p>
            </div>
          </div>
          <div class="lg:w-4/12">
            <div class="mt-20 lg:mt-0">
              <h3 class="text-lg">Company</h3>
              <p class="text-base">
                The All India Chess Federation (AICF) is central administrative
                body for the game of chess in India. Founded in 1951, the
                federation is affiliated to Fédération Internationale des Échecs
                (FIDE), the world body for chess. The AICF has produced
                champions Viswanathan Anand, Nihal Sarin, Pentala Harikrishna,
                Rameshbabu Praggnanandhaa and Vidit Santosh Gujrathi and many
                other grandmasters. The organisation is also in charge of
                managing women's chess in India.
              </p>
              <a href="https://www.aicf.in" target="_blank" rel="noreferrer">
                <p class="underline text-black text-lg">www.aicf.in</p>
              </a>
            </div>
            <div class="mt-10">
              <h3 class="text-lg">Headquarters</h3>
              <p class="text-base">Delhi, India</p>
            </div>
            <div class="mt-10">
              <h3 class="text-lg">Industry</h3>
              <p class="text-base">Government Organisation, Sports</p>
            </div>
            <div class="mt-10">
              <h3 class="text-lg">Product Used</h3>
              <Link href="/product/livechat">
                <p class="text-base underline text-black">Live Chat</p>
              </Link>
              <Link href="/product/chatbots">
                <p class="text-base underline text-black">ChatBots</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
