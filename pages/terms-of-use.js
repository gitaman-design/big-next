// import {useEffect} from 'react'
// import { useLocation } from "react-router-dom";
import Link from "next/link";
import Head from "next/head";

// function ScrollToTop() {
//     const { pathname } = useLocation();

//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);

//     return null;
// }

const renderHero = () => {
  return (
    <>
      <div>
        <Head>
          {/* HTML Meta Tags */}
          <title> Terms of Use - BigRadar.io </title>
          <meta
            name="description"
            content="Switch to BigRadar and get 35% more conversations from your website. Easy to use Live Chat and Email Marketing Platform."
          />

          {/* Google / Search Engine Tags */}
          <meta itemprop="name" content="Terms of Use - BigRadar.io" />
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
          <meta property="og:title" content="Terms of Use - BigRadar.io" />
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
          <meta name="twitter:title" content="Terms of Use - BigRadar.io" />
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

        <div>
          {/* <h5 class="text-gray-400 font-light text-lg">Terms of use</h5> */}
          <h1 class="text-3xl md:text-5xl font-semibold md:leading-snug">
            Terms of Use
          </h1>
          <p class="w-10/12 text-lg xl:w-3/4 text-black font-semibold">
            1. Terms
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-gray-700 font-light">
            By accessing the website at{" "}
            <a href="https://www.bigradar.io">http://www.bigradar.io</a>, you
            are agreeing to be bound by these terms of service, all applicable
            laws and regulations, and agree that you are responsible for
            compliance with any applicable local laws. If you do not agree with
            any of these terms, you are prohibited from using or accessing this
            site. The materials contained in this website are protected by
            applicable copyright and trademark law.
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-black font-semibold">
            2. Use License
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-gray-700 font-light">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on BigRadar’s website for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not: modify or copy the materials; use the materials for any
            commercial purpose, or for any public display (commercial or
            non-commercial); attempt to decompile or reverse engineer any
            software contained on BigRadar’s website; remove any copyright or
            other proprietary notations from the materials; or transfer the
            materials to another person or “mirror” the materials on any other
            server. This license shall automatically terminate if you violate
            any of these restrictions and may be terminated by BigRadar at any
            time. Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-black font-semibold">
            3. Disclaimer
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-gray-700 font-light">
            The materials on BigRadar’s website are provided on an ‘as is’
            basis. BigRadar makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further,
            BigRadar does not warrant or make any representations concerning the
            accuracy, likely results, or reliability of the use of the materials
            on its website or otherwise relating to such materials or on any
            sites linked to this site.
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-black font-semibold">
            4. Limitations
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-gray-700 font-light">
            In no event shall BigRadar or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on BigRadar’s website, even if
            BigRadar or a BigRadar authorized representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-black font-semibold">
            5. Accuracy of materials
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-gray-700 font-light">
            The materials appearing on BigRadar’s website could include
            technical, typographical, or photographic errors. BigRadar does not
            warrant that any of the materials on its website are accurate,
            complete or current. BigRadar may make changes to the materials
            contained on its website at any time without notice. However
            BigRadar does not make any commitment to update the materials.
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-black font-semibold">
            6. Links
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-gray-700 font-light">
            BigRadar has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by BigRadar of the
            site. Use of any such linked website is at the user’s own risk.
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-black font-semibold">
            7. Modifications
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-gray-700 font-light">
            BigRadar may revise these terms of service for its website at any
            time without notice. By using this website you are agreeing to be
            bound by the then current version of these terms of service.
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-black font-semibold">
            8. Governing Law
          </p>

          <p class="w-10/12 text-lg xl:w-3/4 text-gray-700 font-light">
            These terms and conditions are governed by and construed in
            accordance with the laws of London, United Kingdom and you
            irrevocably submit to the exclusive jurisdiction of the courts in
            that State or location.
          </p>

          <div class="w-full pt-10">
            <Link href="/demo">
              <button class="w-8/12 md:w-60 h-14 bg-black rounded text-white">
                Book Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

function TermsOfUse() {
  return (
    <div
      style={{ backgroundColor: "#FFFEFC" }}
      class="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60"
    >
      {/* <ScrollToTop /> */}

      {renderHero()}
    </div>
  );
}

export default TermsOfUse;
