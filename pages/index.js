import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import client1 from './assets/client-1.png'
import client2 from './assets/client-2.png'
import client3 from './assets/client-3.png'
import client4 from './assets/client-4.png'
import client5 from './assets/client-5.png'
import client6 from './assets/client-6.png'
import iconChat from './assets/iconChat.svg'
import customer from './assets/customer.svg'
import email from './assets/email.svg'
import cli from './assets/cli.png'
import Lottie from 'react-lottie';
import TeamAway from './assets/animation/TeamAway.json';
import TrackOrder from './assets/animation/TrackOrder.json';
import OTP from './assets/animation/OTP.json';
import engage from "./assets/engage.png"
import sell from "./assets/Sell.png"
import retain from "./assets/Retain.png"
import qualify from "./assets/Qualify.png"
import zapier from "./assets/zapier.png"
import zendesk from "./assets/zendesk.png"
import hubspot from "./assets/hubspot.png"
import wordpress from "./assets/wordpress.png"
import shopify from "./assets/shopify.png"
import mailchimp from "./assets/mailchimp.png"
import nin1 from './assets/nin1.svg'
import nin2 from './assets/nin2.svg'
import nin3 from './assets/nin3.svg'
import nin4 from './assets/nin4.svg'
import RenderHome from './RenderHome'




const handleWidget = () => {
    window.BigRadar?.open()
}



const TeamOffline = {
    loop: true,
    autoplay: true,
    animationData: TeamAway,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};
  
const OrderTrack = {
    loop: true,
    autoplay: true,
    animationData: TrackOrder,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};
  
const OTPAni = {
    loop: true,
    autoplay: true,
    animationData: OTP,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



export default function Home() {
  return (
    <div style={{backgroundColor: '#FFFEFC'}} className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Home Banner */}


      <div class="pt-10 px-6 sm:px-12 xl:px-24 2xl:px-60">
        <div class="text-center md:pt-14 pt-10 ">
            <h1 class="text-3xl md:text-5xl lg:px-16 xl:px-24  font-semibold md:leading-snug m-0">
              We Don't Sell ChatBots
              We Power Up Your Conversions.
          </h1>
                  <p class="text-gray-600 md:text-xl mt-2">Convert your visitors into leads</p>
                  
                  {/* Rendering Form */}


          <div>
              <RenderHome />
          </div>
        </div>

          </div>
          
          

      {/* Clients */}

      <div class="flex flex-wrap justify-center items-center content-center p-8 md:p-14">
        
        <div class="w-16 md:w-20 mr-4 mt-4 xl:mr-8">
          <Image src={client1} alt="client" />
        </div>
        <div class="w-16 md:w-24 mr-4 mt-4 xl:mr-8">
          <Image  src={client2} alt="client" />
        </div>
        <div class="w-16 md:w-24 mr-4 mt-4 xl:mr-8">
          <Image  src={client3} alt="client" />
        </div>
        <div class="w-16 md:w-28 mr-4 mt-4 xl:mr-8">
          <Image  src={client4} alt="client" />
        </div>
        <div class="w-16 md:w-20 mr-4 mt-4 xl:mr-8">
          <Image  src={client5} alt="client" />
        </div>
        <div class="w-16 md:w-24 mr-4 mt-4 xl:mr-8">
          <Image  src={client6} alt="client" />
        </div>
      </div>

      {/* Feature Box */}
          <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
              
      <div style={{backgroundColor: '#F9F5F1'}} class="gap-y-10 mt-20 pt-6 pb-6 md:flex">
            {/* Box 1 */}
        <div class="text-center p-6 lg:p-20">
          <div class="w-12 m-auto">
                <Image src={iconChat} alt="icon" />
          </div>
                <h4 class="text-xl font-medium pt-6 pb-2">Lead Qualification</h4>
                    <p style={{ color: '#8E8C8C', fontWeight: 'normal' }}>Chatbot smartly collects specific user inputs and intimate sales team in realtime. </p>
                    <Link href="/chatbots">
                    <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More ChatBot &gt;</h4>
                    </Link>
            </div>
            {/* Box 2 */}
        <div class="text-center p-6 lg:p-20">
          <div class="w-12 m-auto">
                <Image class="w-14 m-auto" src={customer} alt="icon" />
          </div>
                <h4 class="text-xl font-medium pt-6 pb-2">Audience Targeting</h4>
                    <p style={{ color: '#8E8C8C', fontWeight: 'normal' }}>Hyper-personalise your auto-messages with your customers using 200+ audience params.  </p>
                    <Link href="/livechat">
                             <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More Messaging &gt;</h4>
                    </Link>
            </div>
            {/* Box 3 */}
        <div class="text-center p-6 lg:p-20">
          <div class="w-12 m-auto">
                <Image class="w-14 m-auto" src={email} alt="icon" />
          </div>
                <h4 class="text-xl font-medium pt-6 pb-2">Engagement</h4>
                    <p style={{ color: '#8E8C8C', fontWeight: 'normal' }}>Design modern campaigns across platforms like Web, Mobile, In-App to engage your customers.</p>
                    <Link href="/email">
                        <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More Campaigns &gt;</h4>
                    </Link>
            </div>
      </div>
</div>
      
      {/* client testimonial */}


      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
                <div class="sm:flex sm:pt-2 lg:pt-20">
                    { /* Company LOgos */}
                    <div class=" pt-8 w-full items-center flex justify-end" >
                    <div class="">
                        <div style={{backgroundColor: '#F9F5F1'}} class="p-4 text-center rounded w-36 mb-10 ">
                            <p class="m-0">Also Loved By</p>
                        </div>
                        <div class="flex flex-wrap justify-start items-center ">
                            <div class="w-16 md:w-20 mr-4 mt-4 lg:mr-8 lg:mt-8 xl:mr-14 xl:mt-10">
                                <Image src={client1} alt="client" />
                            </div>
                            <div class="w-20 md:w-24 mr-4 mt-4 lg:mr-8 lg:mt-8 xl:mr-14 xl:mt-10">
                                <Image  src={client2} alt="client" />
                            </div>
                            <div class="w-24 md:w-28 mr-4 mt-4 lg:mr-8 lg:mt-8 xl:mr-14 xl:mt-10">
                                <Image  src={client3} alt="client" />
                            </div>
                            <div class="w-28 md:w-28 mr-4 mt-4 lg:mr-8 lg:mt-8 xl:mr-14 xl:mt-10">
                                <Image  src={client4} alt="client" />
                            </div>
                            <div class="w-14 md:w-20 mr-4 mt-4 lg:mr-8 lg:mt-8 xl:mr-14 xl:mt-10">
                                <Image  src={client5} alt="client" />
                            </div>
                            <div class="w-24 md:w-28 mr-4 mt-4 lg:mr-8 lg:mt-8 xl:mr-14 xl:mt-10">
                                <Image  src={client6} alt="client" />
                            </div>
                        </div>
                    </div>
                    </div>
                    { /* Company Logos end */}

                    <div class="sm:pr-8 w-full pt-14 sm:pt-28 xl:pt-36 lg:pt-40 " >
                    <h1 style={{color: '#FDB137'}} class="font-bold text-6xl">"</h1>
                        <h1 class="italic text-2xl lg:text-3xl sm:text-2xl xl:text-4xl xl:w-10/12 font-medium pb-8" >
                        BigRadar amazingly increased
No of leads we get on our platform. Almost 40% increase
                         </h1>
                    <div class="flex w-full items-center">
                        <Image src={cli} alt="Client" />
                        <div class="pl-2">
                            <h5 class="font-bold">Arjun Ahlawat</h5>
                            <p class="text-gray-600 text-sm">CMO, FlexiSpaces</p>
                        </div>
                    </div>
                    </div>
                
                </div>
                
            </div>

      
      {/* ChatBot Feature 1 */}

        <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">

                <div>
                    <h1 class="text-4xl pt-24 font-bold md:pt-44 md:w-5/12">
                        Chatbots for Phenomenal 
                        Customer Experience
                    </h1>
                </div>
                <div class="sm:flex sm:pt-2 lg:pt-10">

                    <div class="sm:pr-8 w-full pt-10 sm:pt-28 xl:pt-36 lg:pt-40 " >
                    <h5 class="text-gray-400 font-light py-4">Don’t Miss Customers</h5>
                        <h1 class="text-3xl lg:text-3xl sm:text-2xl xl:text-4xl xl:w-10/12 font-semibold" >
                        No worries, If you’re 
on vacations
                         </h1>
                        <p class="w-full lg:text-xl xl:w-10/12 sm:text-sm pt-4 text-lg text-gray-400 font-light" >
                        BigRadar smart chatbot senses no reply from business and asks visitor to input their email 
                        even before they leave the website. So when you reply it reaches to their inbox.
                        </p>
                        <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More &gt;</h4>
                    </div> 
                        
                    { /* hero image start */}
                    <div class=" pt-8 w-full items-center flex justify-end" >
                    <Lottie 
                        options={TeamOffline}
                    />
                    </div>
                    { /* hero image end */}
                
                </div>
                
      </div>
      
      {/* Chatbot feature 2 */}


      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
                
                <div class="sm:flex sm:py-16 mt-10">

            { /* hero image start */}
                    <div class="w-11/12 flex justify-start" >
                        
                    <Lottie 
                        options={OrderTrack}
                    />
                        
                    </div>
                    { /* hero image end */}

                    { /* hero text start */}
                    <div class=" pb-20 w-full sm:pl-20 sm:pt-28 lg:pt-36 xl:pt-28 pt-12" >
                        <h5 class="text-gray-400 font-light py-4">BigRadar ChatBots</h5>
                        <h1 class="text-3xl lg:text-3xl xl:text-4xl xl:w-10/12 sm:text-2xl font-semibold" >
                            Personalised Chatbot
                            Experience for every 
                            customer
            </h1>
                        <p class="w-full sm:text-sm lg:text-xl xl:w-10/12 py-4 text-lg text-gray-400 font-light" >
                        BigRadar provides a single window to your customers so the don’t have to look around 
                        on the website for basic info like <span class="underline">track my order</span>, last 5 payments etc.
                        </p>
                        <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More &gt;</h4>
                    </div>
                    { /* Hero text Ends */}

                </div>
            </div>

      
      {/* ChatBot Feature 03 */}

      
      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
                <div class="sm:flex sm:pt-2 lg:pt-10">

                    <div class="sm:pr-8 w-full sm:pt-28 xl:pt-36 lg:pt-40 " >
                    <h5 class="text-gray-400 font-light py-4">Lead Qualification</h5>
                        <h1 class="text-3xl lg:text-3xl sm:text-2xl xl:text-4xl xl:w-10/12 font-semibold" >
                            Qualify leads more accurately
                        </h1>
                        <p class="w-full lg:text-xl xl:w-10/12 sm:text-sm pt-4 text-lg text-gray-400 font-light" >
                        Specially apps in our chatbot allows you to configure the lead qualification process 
                        as per your business needs. 
                        </p>
                        <h4 style={{color: '#FDB137'}} class="underline py-8">Learn More &gt;</h4>
                    </div> 
                        
                    { /* hero image start */}
                    <div class=" pt-8 w-full items-center flex justify-end" >
                    <Lottie 
                        options={OTPAni}
                    />
                    </div>
                    { /* hero image end */}
                
                </div>
      </div>
      

      {/* Feature 04 horizontal slider */}

      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">

            <div class=" pb-20 w-full sm:pl-8 sm:pt-28 lg:pt-36 xl:pt-48 pt-4 " >
                <div class="xl:w-10/12">

                        <h1 class="text-3xl lg:text-3xl xl:text-4xl md:w-8/12 xl:w-10/12 sm:text-2xl font-semibold" >
                        You Don’t Only Need a 
                        Chat Widget to Connect 
                        With Your Customers
                </h1>
                <p class="w-full sm:text-sm lg:text-xl xl:w-8/12 py-4 text-lg text-gray-400 font-light" >
                BigRadar can help you build great bonding with your customers, even if you are away from your website.
                        </p>
                    
                </div>
                <div>

                {/* Mobile and small tab horizontal Scroll starts here */}
                <div class=" flex flex-col  m-auto p-auto cursor-pointer">
                    <div style={{msOverflowStyle: 'none', scrollbarWidth: 'none'}} class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div class="flex flex-nowrap xl:ml-32 mt-10 gap-x-4 ">
                            {/* Card 01 */}
                            <div class="inline-block">
                                <div style={{backgroundColor: '#F9F5F1'}} class="w-96 max-w-lg h-full overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out p-6">
                                    <h4 class="text-xl font-medium pb-2">Engage</h4>
                                    <p style={{color: '#8E8C8C', fontWeight: 'normal'}}>Delight your customers first smart auto-messages to initiate the first dialogue. </p>
                                    <div class="py-6">
                                      <Image  src={engage} alt="am" />
                                    </div>
                                </div>
                            </div>
                            {/* Card 02 */}
                            <div class="inline-block">
                                <div style={{backgroundColor: '#F9F5F1'}} class="w-96 h-full overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out p-6">
                                    <h4 class="text-xl font-medium pb-2">Qualify</h4>
                                    <p style={{color: '#8E8C8C', fontWeight: 'normal'}}>Chatbot asks very specific questions to qualify the leads. Fully-automated. </p>
                                    <div class="py-6">
                                      <Image src={qualify} alt="am" />
                                    </div>
                                </div>
                            </div>
                            {/* Card 03 */}
                            <div class="inline-block">
                                <div style={{backgroundColor: '#F9F5F1'}} class="w-96 h-full overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out p-6">
                                    <h4 class="text-xl font-medium pb-2">Sell</h4>
                                    <p style={{color: '#8E8C8C', fontWeight: 'normal'}}>Offer your products with the messaging and close more deals faster.</p>
                                    <div class="py-6">
                                      <Image src={sell} alt="am" />
                                    </div>
                                </div>
                            </div>
                            {/* Card 04 */}
                            <div class="inline-block">
                                <div style={{backgroundColor: '#F9F5F1'}} class="w-96 h-full overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out p-6">
                                    <h4 class="text-xl font-medium pb-2">Retain</h4>
                                    <p style={{color: '#8E8C8C', fontWeight: 'normal'}}>For e-commerce stores, it's 24x7 automated support desk to retain your customers like never before.</p>
                                    <div class="py-6">
                                      <Image src={retain} alt="am" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* Mobile and small tab horizontal Scroll Ends here */}

            </div>
        </div>

      </div>
      

      {/* inline form here */}

      <div style={{backgroundColor: '#F9F5F1'}} class="p-8 md:py-14 md:px-14 lg:py-20 lg:px-20">
            <div class="text-center">
                <h1 class="text-center text-3xl lg:text-3xl xl:text-4xl xl:px-28 md:px-16 sm:text-2xl font-semibold" >
                            Let's Convert Your Website Visitors Into Qualified Leads
                </h1>
            </div>
            <RenderHome />
      </div>
      

      {/* integrations */}

      <div class="px-6 sm:px-12 xl:px-24 2xl:px-60 pt-20">
            <div class="text-center md:px-14 lg:mt-20 lg:px-20">
            <h1 class="text-3xl lg:text-3xl xl:text-4xl sm:text-2xl font-semibold" >
                    BigRadar works with 
                    your favourite tools
                </h1>
                <p class="w-full sm:text-sm lg:text-xl xl:px-24 py-4 text-lg text-gray-400 font-light" >
                BigRadar can help you build great bonding with your customers, even if you are away from your website.
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
            <hr style={{ borderWidth: '1px', borderColor:'#FCD5D5'}} class="my-16"/>

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
                <h1 class="text-3xl lg:text-3xl xl:text-4xl sm:text-2xl font-semibold" >
                Our Customer Support Ninjas
                Are Always Available for you
                    </h1>
                    <p class="w-full sm:text-sm lg:text-xl py-4 text-lg text-gray-400 font-light" >
                    BigRadar can help you build great bonding with your customers, even if you are away from your website.
                </p>
                <button class="w-48 h-14 bg-black text-white hover:bg-gray-800 rounded mt-6 mb-6" onClick={handleWidget}>
                        Chat With Us
                </button> 
                </div>
        </div>
      


    </div>
  )
}
