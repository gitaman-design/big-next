import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { InlineWidget } from "react-calendly";






const handleWidget = () => {
    window.BigRadar?.open()
}




export default function CaseStudy() {
  return (
    <div style={{backgroundColor: '#FFFEFC'}} className="px-6 sm:px-12 xl:px-24 2xl:px-60">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Home Banner */}


      <div class="pt-10 ">
        <div>
                <h5 class="text-gray-400 font-light text-lg">Demo</h5>
                <h1 class="text-3xl md:text-5xl font-semibold md:leading-snug m-0">
                    Only 5 Minutes.
                    </h1>
                <h5 class="text-black font-light text-lg m-0">It won’t take much time to get familiar with BigRadar 🙂 </h5>
            </div>
          </div>

          
          <div style={{backgroundColor: '#F9F5F1'}} class="mt-10">
            <InlineWidget styles={{height: '35em'}} url="https://calendly.com/bigradar/demo"/>
          </div>
          
          <div class= "">
            <div class="pt-20 w-full">
                <h1 class="text-3xl lg:text-3xl xl:text-4xl xl:w-10/12 sm:text-2xl font-semibold" >
                        FAQ's
                </h1>
            </div>
            <div class="lg:flex lg:gap-36 lg:flex-wrap">
                {/* Question 01 */}
                <div class="pt-14 lg:w-96 xl:w-5/12">
                    <h5 class="text-lg">Q: What happens when the trials ends?</h5>
                    <h5 class="text-lg text-gray-500 font-light">A : You will get a notification from BigRadar 7 days before the expiration 
                        of your trial period. Even if the trial period is ended you data and configurations 
                        remains safe with your account for a period of 14 days, You can opt for any paid plan 
                        with us to continue.</h5>
                </div>
                {/* Question 02 */}
                <div class="pt-14 lg:w-96 xl:w-5/12">
                    <h5 class="text-lg">Q: Do I need to provide credit card details for a trial?</h5>
                    <h5 class="text-lg text-gray-500 font-light">A: No, we don’t take your credit card details upon signing up for a trial. 
                    You need to provide it only when you signup for a paid plan with us.</h5>
                </div>
                {/* Question 03 */}
                <div class="pt-6 lg:pt-0 lg:w-96 xl:w-5/12">
                    <h5 class="text-lg">Q: How to the pricing works?</h5>
                    <h5 class="text-lg text-gray-500 font-light">A : Based on your plan, you a quota of no. of people included in your plan. 
                    If your no. of people increase you will be billed for additional usage which usually starts from $7 per 500 people.</h5>
                </div>
                {/* Question 04 */}
                <div class="pt-6 lg:pt-0 lg:w-96 xl:w-5/12">
                    <h5 class="text-lg">Q: When my card will be charged?</h5>
                    <h5 class="text-lg text-gray-500 font-light">A : You card will be charged in first week of every month for the usage of 
                    previous month. For example, if you switched to a paid plan in Jan 8th then your card will be charged on 1-7th Feb.</h5>
                </div>
            </div>
        </div>
          
          

       
          



    
          
        
     



    </div>
  )
}
