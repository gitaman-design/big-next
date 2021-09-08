import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import conversation from './assets/conversation.svg'
import inquired from './assets/inquired.svg'
import star from './assets/star.svg'
import botEdit from "./assets/bot-edit.png";
import insights from './assets/insights.png'



import demoChat from "./assets/demo-chat.png";
import dash from "./assets/new-dash.png";
import save from './assets/save.svg';
import custom from './assets/custom.svg';
import offline from './assets/offline.svg';
import GIF from './assets/GIF.svg';


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




const handleWidget = () => {
    window.BigRadar?.open()
}




export default function LiveChat() {
  return (
    <div style={{backgroundColor: '#FFFEFC'}} className="px-6 sm:px-12 xl:px-24 2xl:px-60">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Home Banner */}


      <div class="pt-10 ">
        <div>
            <div>
                <h5 class="text-gray-400 font-light text-lg">ChatBots</h5>
                <h1 class="text-3xl md:text-5xl font-semibold md:leading-snug m-0">
                    No-code Chatbot Platform
                </h1>
                <p class="w-10/12 text-lg xl:w-3/4 text-gray-400 font-light" >
                    BigRadar's Chatbot is built for scale, it doesn't annoy your visitors but act like more human.
                    It qualifies lead for your sales team on the other hand it also provide awesome support to your customers  
                </p>
                <div class="w-full pt-4">
                    <Link href="/demo">
                        <button class="w-8/12 md:w-60 h-14 bg-black rounded text-white" >
                                    Book Demo
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
          </div>
          
          

          {/* pricing tables */}
          
        <div style={{backgroundColor: '#F9F5F1'}} class="mt-20">
             <div class="" >
        <div class="text-center p-4 pt-10 md:px-16 xl:px-36 ">
            <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl xl:pt-10  font-semibold">
                Chatbots make your business more efficient. 
            </h1>
        </div>
            <div class="gap-y-10 pb-6 md:flex">

            {/* Box 1 */}
            <div class="text-center p-6 lg:p-20">
                <Image class="w-12 m-auto" src={conversation} alt="icon" />
                <h4 class="text-xl font-medium pt-6 pb-2">35%</h4>
                <p style={{color: '#8E8C8C', fontWeight: 'normal'}}>35% Increase in sales conversations</p>
            </div>
            {/* Box 2 */}
            <div class="text-center p-6 lg:p-20">
                <Image class="w-12 m-auto" src={inquired} alt="icon" />

                <h4 class="text-xl font-medium pt-6 pb-2">80%</h4>
                <p style={{color: '#8E8C8C', fontWeight: 'normal'}}>80% common inquiries resolved</p>
            </div>
            {/* Box 3 */}
            <div class="text-center p-6 lg:p-20">
                <Image class="w-12 m-auto" src={star} alt="icon" />
                <h4 class="text-xl font-medium pt-6 pb-2">4.1 Stars</h4>
                <p style={{color: '#8E8C8C', fontWeight: 'normal'}}>4.1 Stars average customer satisfaction</p>
            </div>
        </div> 
        </div>
          </div>
          

          

          

          {/* FAQ */}

          <div>
            <div class="md:flex md:pt-24 lg:pt-36 ">
                    { /* hero image start */}
                    <div class="w-full sm:w-2/4 pt-24 md:pt-0 xl:w-2/4 flex justify-start" >
                        <Image class="w-full xl:w-11/12"
                            src={botEdit}
                            alt="Hero" />
                    </div>
                    { /* hero image end */}


                    { /* hero text start */}
                    <div class="w-full lg:pt-24 md:pl-12 md:pt-20 xl:pt-48 sm:w-2/4 py-4 md:pt-28 lg:pt-52 " >
                        <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl  font-semibold" >
                        Design the bots the way you want
                        </h1>
                        <p class="lg:py-4 py-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light" >
                        It is super-easy to config your chatbots, as easy as drafting a document.
                        </p>
                    </div>
                    { /* Hero text Ends */}
                </div>
          </div>
          

           <div>
            <div class="md:flex xl:pt-36">
                    { /* hero text start */}
                    <div class="w-full lg:pt-24 xl:pt-32 sm:w-2/4 py-2 sm:py-2 md:pt-36 lg:pt-52" >
                        <h1 class="text-4xl xl:text-5xl lg:text-4xl sm:text-2xl  font-semibold" >
                            Measure the performance
                        </h1>
                        <p class="lg:py-4 py-4 w-10/12 text-lg xl:w-3/4 text-gray-400 font-light" >
                        Optimisation is the key of successful online businesses. With our extensive 
                        reporting, measure what's performing best and what's not. Accordingly, improve the bots. Your customer's will love such improvements. 
                        </p>

                    </div>
                    { /* Hero text Ends */}
                    { /* hero image start */}
                    <div class="w-full sm:w-2/4 pt-4 xl:w-2/4 flex justify-end" >
                        <Image class="w-full xl:w-11/12"
                            src={insights}
                            alt="Hero" />
                    </div>
                    { /* hero image end */}
                </div>
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
