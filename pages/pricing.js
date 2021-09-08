import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import tick from "./assets/tick.svg"
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




export default function Pricing() {
  return (
    <div style={{backgroundColor: '#FFFEFC'}} className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Home Banner */}


      <div class="pt-10 px-6 sm:px-12 xl:px-24 2xl:px-60">
        <div>
            <div>
                <h5 class="text-gray-400 font-light py-4 text-lg">Pricing</h5>
                <h1 class="text-3xl md:text-5xl font-semibold md:leading-snug">
                    One Tool for you to Connect<br></br>
                    With Your Customer
                    </h1>
            </div>
        </div>
          </div>
          
          

          {/* pricing tables */}
          
        <div class="px-6 sm:px-12 xl:px-24 2xl:px-60">
            <div class="pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 md:gap-16 lg:gap-4 xl:gap-16">
                {/* Package No 1 */}
                <div style={{backgroundColor: '#F9F5F1'}} class="rounded mt-10 max-w-2xl h-full shadow">
                    <div class="bg-black py-10 justify-center">
                        <h3 class="text-xl text-center text-white">Starter</h3>
                        <p class="text-center text-white">Perfect for all type of startups</p>
                        <div class="text-center mt-2">
                            <h1 class="font-semibold text-white text-2xl">Free</h1>
                        </div>

                        <hr class="border-1 w-16 m-auto my-6 border-white "></hr>

                        <p class="text-center text-white m-0">You'll have access to</p>

                    </div>
                {/* items here */}
                      <div class="flex items-center pt-4">
                          <div class="pl-4 w-10">
                                <Image class="" src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 m-0">Live Chat on Website</h3>
                    </div>

                      <div class="flex items-center pt-4">
                          <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">180 Day Chat History</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">3 Team Members</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Realtime Reporting</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Mobile and Desktop Apps</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Saved Replies</h3>
                    </div>
                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Contact Management</h3>
                    </div>
                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Contacts Import upto 1000</h3>
                    </div>
                    
                    <div class="pl-4 w-full pr-4 pt-10 pb-0 flex justify-center">
                        <button class="w-48 h-12 border-black border rounded text-black hover:bg-black hover:text-white text-base" >
                                Start Your Free Trial
                        </button>
                    </div>
                </div>
                {/* Package No 1  end */}

                {/* Package No 2 */}
                <div style={{backgroundColor: '#F9F5F1'}} class="rounded mt-10 max-w-2xl h-full shadow">
                    <div class="bg-black py-10 justify-center">
                        <h3 class="text-xl text-center text-white">Growth</h3>
                        <p class="text-center text-white">Perfect for all type of startups</p>
                        <div class="text-center mt-2">
                            <h1 class="font-semibold text-white text-2xl m-0">$99</h1>
                            <p class="text-white text-xs m-1">$39/per additional member per month</p>
                        </div>

                        <hr class="border-1 w-16 m-auto my-6 border-white "></hr>

                        <p class="text-center text-white m-0">Everything in the Starter Plan +</p>

                    </div>
                {/* items here */}
                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Unlimited Chat History</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">15 Team Members (upto)</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Custom Data Fields</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Email Management</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Web Engagement</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Targeted Account Engagement</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Team Routing</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Custom Branding</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Integrations & Much More</h3>
                    </div>
                    
                    <div class="pl-4 w-full pr-4 pt-10 pb-0 flex justify-center">
                        <a href="https://app.bigradar.io/register" target="_blank" rel="noreferrer">
                            <button class="w-48 h-12 border-black border rounded text-black hover:bg-black hover:text-white text-base" >
                                    Start Your Free Trial
                            </button>
                        </a>
                    </div>
                </div>
                {/* Package No 2 end */}

                {/* Package No 3 */}
                <div style={{backgroundColor: '#F9F5F1'}} class="rounded mt-10 max-w-2xl h-full shadow">
                    <div class="bg-black py-10 justify-center">
                        <h3 class="text-xl text-center text-white">Enterprise</h3>
                        <p class="text-center text-white">Perfect for all type of startups</p>
                        <div class="text-center mt-2">
                            <h1 class="font-semibold text-white text-2xl m-0">Custom Pricing</h1>
                        </div>

                        <hr class="border-1 w-16 m-auto my-6 border-white "></hr>

                        <p class="text-center text-white m-0">Everything in the Growth Plan +</p>

                    </div>
                {/* items here */}
                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Event Triggers</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Answer Bot</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Custom Integrations</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Unlimited Contacts</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">No Email Limits</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">AI Chatbots</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Technical Integration Setup</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">24/7 Priority Chat Support</h3>
                    </div>

                    <div class="flex items-center pt-4">
                        <div class="pl-4 w-10">
                                <Image src={tick} alt="tick" />
                          </div>
                        <h3 style={{color: '#646464'}} class="text-lg font-light pl-4 pt-2">Dedicated Customer Success Manager</h3>
                    </div>
                    
                    <div class="pl-4 w-full pr-4 pt-10 pb-0 flex justify-center">
                    
                            <button class="w-48 h-12 border-black border rounded text-black hover:bg-black hover:text-white text-base" onClick={handleWidget}>
                                    Request For Pricing
                            </button>
                        
                    </div>
                </div>
                {/* Package No 3 end */}
            </div>
          </div>
          

          

           <div>
        <div class="flex flex-wrap justify-center items-center content-center p-8 md:p-14 mt-10">
                            <div class="w-16 md:w-20 mr-4 mt-4 xl:mr-8">
                                <Image src={client1} alt="client" />
                            </div>
                            <div class="w-20 md:w-24 mr-4 mt-4 xl:mr-8">
                                <Image class="" src={client2} alt="client" />
                            </div>
                            <div class="w-24 md:w-28 mr-4 mt-4 xl:mr-8">
                                <Image class="" src={client3} alt="client" />
                            </div>
                            <div class="w-48 md:w-52 mr-4 mt-4 xl:mr-8">
                                <Image class="" src={client4} alt="client" />
                            </div>
                            <div class="w-20 md:w-20 mr-4 mt-4 xl:mr-8">
                                <Image class="" src={client5} alt="client" />
                            </div>
                            <div class="w-24 md:w-28 mr-4 mt-4 xl:mr-8">
                                <Image class="" src={client6} alt="client" />
                            </div>
                        </div>
        </div>

          

          {/* FAQ */}

          <div class= "mt-10 px-6 sm:px-12 xl:px-24 2xl:px-60">
            <div class="pt-10 w-full">
                <h1 class="text-3xl lg:text-3xl xl:text-4xl sm:text-2xl font-semibold text-center" >
                        Frequently Asked Questions
                </h1>
            </div>
            <div class="grid grid-cols-2 gap-20">
                {/* Question 01 */}
                <div class="pt-14">
                    <h5 class="text-lg">Q: What happens when the trials ends?</h5>
                    <h5 class="text-lg text-gray-500 font-light">A : You will get a notification from BigRadar 7 days before the expiration 
                        of your trial period. Even if the trial period is ended you data and configurations 
                        remains safe with your account for a period of 14 days, You can opt for any paid plan 
                        with us to continue.</h5>
                </div>
                {/* Question 02 */}
                <div class="pt-14">
                    <h5 class="text-lg">Q: Do I need to provide credit card details for a trial?</h5>
                    <h5 class="text-lg text-gray-500 font-light">A: No, we don’t take your credit card details upon signing up for a trial. 
                    You need to provide it only when you signup for a paid plan with us.</h5>
                </div>
                {/* Question 03 */}
                <div class="pt-6 lg:pt-0 ">
                    <h5 class="text-lg">Q: How to the pricing works?</h5>
                    <h5 class="text-lg text-gray-500 font-light">A : Based on your plan, you a quota of no. of people included in your plan. 
                    If your no. of people increase you will be billed for additional usage which usually starts from $7 per 500 people.</h5>
                </div>
                {/* Question 04 */}
                <div class="pt-6 lg:pt-0">
                    <h5 class="text-lg">Q: When my card will be charged?</h5>
                    <h5 class="text-lg text-gray-500 font-light">A : You card will be charged in first week of every month for the usage of 
                    previous month. For example, if you switched to a paid plan in Jan 8th then your card will be charged on 1-7th Feb.</h5>
                </div>
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
