import {useState} from 'react'
// import { Link } from "react-router-dom";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';



export default function RenderHome({props}) {

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white', marginRight: 4 }} spin />;
    const [isLoading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [state, setState] = useState({
        email: '',
        tags: 'website-try'
    });

    const sendEmail = event => {
        event.preventDefault();
        axios
            .post('/bigradar-users', {...state})
            .then(response => {
                setResult(response.data);
                setState({
                    email: '',
                    tags: 'website-try'
                });
                setLoading(true);
                window.location.href="https://app.bigradar.io/register/"
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Please enter correct or try with another email address.'
                })
            })
      };

      const onInputChange = event => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value,
          tags: "website-try",
          
        });
      };

    // const buttonLoader = (e) => {
    //     setLoading(true);
    //     window.location.href="http://b.bigradar.co.uk/register/"
    // }

        return (
            <>
                <div>   
                    <div class="text-center text-red-700">
                        {result && (<p className= {`${result.success ? 'success' : 'error'}`}>{result.message}</p>)}
                    </div>
                    <div class="mt-8 flex border border-black md:m-auto md:my-6 md:w-10/12 lg:w-9/12 xl:w-6/12 w-full h-14 rounded" >

                        <form class="flex w-full" onSubmit={sendEmail}>
                    
                            <input 
                                class="rounded p-2 w-full h-full" 
                                type="email" 
                                value={state.email}
                                placeholder="Enter Your Email" 
                                name="email"
                                id="email-id"
                                onChange={onInputChange}
                                required/>
                            

                            {!isLoading && 
                                <button 
                                    type="submit" 
                                    id="buttonId" 
                                    class="w-48 h-full bg-black text-white hover:bg-gray-800"
                                    >
                                    Get Started
                                </button> }
                                {isLoading && 
                                <button 
                                    type="submit" 
                                    disabled
                                    class="w-48 h-full bg-black text-white hover:bg-gray-800" 
                                    >
                                    <Spin indicator={antIcon} />
                                    Loading...
                                </button> }
                            

                            {/* <button type="submit" class="w-48 bg-black text-white hover:bg-gray-800" onClick={()=>props.history.push("/pricing")} >
                                Get Started
                        </button>   */}
                            </form>              
                    </div>
                    <div class="text-center">
                        <p class="text-gray-600 text-xs pt-4">14 Days Trial  |  No Credit Card Required  |  Full Customer Support</p>
                    </div>
                    
                </div>
                </>
        )
}
