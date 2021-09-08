import React from 'react'
// import { Link } from "react-router-dom";
import logo from "./assets/br-black.svg";
import fb from './assets/social/facebook.svg'
import tw from './assets/social/twitter.svg'
import insta from './assets/social/instagram.svg'
import ln from './assets/social/linkedin.svg'
// import yt from '../assets/social/youtube.svg'
import Link from 'next/link'
import Image from 'next/image'






const renderFooter = () => {
    return (
        <>
        <div>
            <div>
                <hr style={{ borderWidth: '1px', borderColor:'#FCD5D5'}} class="my"/>
            </div>
            <div class="pt-20 lg:flex lg:justify-between">
                {/* Box 1 */}
                    <div>
                        <div class="w-40">
                            <Image src={logo} alt="logo" />
                        </div>
                    <p class="pt-4 text-gray-600 m-0">BigRadar Live Chat and Email Marketing Software</p>
                    <h5 class="pt-4 text-gray-600 m-0"> &copy; 2021 BigRadar Inc. All rights reserved.</h5>
                    <div class="flex gap-4 pt-8">
                        <div class="w-10 cursor-pointer">
                            <a href="https://www.facebook.com/bigradar.io/">
                                <Image  src={fb} alt='social' />
                            </a>
                        </div>
                        <div class="w-10 cursor-pointer">
                            <a href="https://www.twitter.com/big_radar">
                                <Image  src={tw} alt='social' />
                            </a>
                        </div>
                        <div class="w-10 cursor-pointer">
                            <a href="https://www.instagram.com/_bigradar/">
                                <Image src={insta} alt='social' />
                            </a>

                        </div>
                        <div class="w-10 cursor-pointer" >
                            <a href="https://www.linkedin.com/company/bigradar">
                                <Image src={ln} alt='social' />
                            </a>

                        </div>
                        {/* <div>
                            <a href="/">
                                <img class="w-10" src={yt} alt='social' />
                            </a>

                        </div> */}
                    </div>
                </div>
                {/* Box 1  End */}

                {/* Box 2 */}
                
                <div class="pt-14 lg:pt-0 cursor-pointer">
                    <h5 class="font-bold py-4">
                        Product
                    </h5>
                    <Link href="/livechat">
                    <p class="text-gray-600 py-2 m-0">Live Chat</p>
                    </Link>
                    <Link href="/chatbots">
                        <p class="text-gray-600 py-2 m-0">Chat Bots</p>
                    </Link>
                    <Link href="/email">
                        <p class="text-gray-600 py-2 m-0">Email Campaigns</p>
                    </Link>
                </div>

                {/* Box 2 End */}

                {/* Box 3 */}
                
                <div class="pt-14 lg:pt-0 cursor-pointer">
                    <h5 class="font-bold py-4">
                        Resources
                    </h5>
                    <Link href="/blog">
                        <p class="text-gray-600 py-2 m-0">Blog</p>
                    </Link>
                    <a href="https://www.bigradar.io/blog/category/alternative-to/" target="_blank" rel="noreferrer">
                        <p class="text-gray-600 py-2 m-0">Comparisons</p>
                    </a>
                    <Link href="/terms-of-use">
                        <p class="text-gray-600 py-2 m-0">Terms of use</p>
                    </Link>

                    <Link href="/privacy-policy">
                        <p class="text-gray-600 py-2 m-0">Privacy Policy</p>
                    </Link>
                    <Link href="/data-processing-agreement">
                        <p class="text-gray-600 py-2 m-0">Data Processing Agreement</p>
                    </Link>

                </div>

                {/* Box 3 End */}

                <div class="pt-14 lg:pt-0 cursor-pointer">
                    <h5 class="font-bold py-4">
                        Contact
                    </h5>
                    <a href="https://help.bigradar.io/" target="_blank" rel="noreferrer">
                        <p class="text-gray-600 py-2 m-0">Help Docs</p>
                    </a>
                    <a href="https://www.bigradar.io/jobs/">
                        <p class="text-gray-600 py-2 m-0">Careers</p>
                    </a>

                </div>

                {/* Box 3 End */}

            </div>
        </div>
        </>
    )
}


function Footer() {
    return (
        <div style={{backgroundColor: '#FFFEFC'}} class="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">{renderFooter()}</div>
    )
}

export default Footer
