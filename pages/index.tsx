import React, { useState } from 'react';
import Head from 'next/head'
import Image from "next/image"
import Countdown from './countDown';

const Home = (props : any) => {

  const [showModal, setShowModal] = useState(false);
  const url = "https://moonparty.com";
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"/>
      </Head>
      <div className='w-full h-[100vh] bg-dunes bg-cover bg-center' style={{backgroundImage: "url('/assets/img/BG.png')"}}>
        <div className='w-full md:w-[100%] h-full text-white font-medium flex justify-center items-center'>
          <div>
            <div className='text-[32px] md:text-[32px] text-center md:text-left text-[#EBCD81] font-semibold leading-[32px] font-Montserrat flex justify-center items-center' style={{fontFamily: 'Montserrat'}}>MOON LANDING PARTY</div>
            <div className='text-[82px] md:text-[82px] pt-[16px] pb-[4px] text-center md:text-left text-white font-semibold leading-[82px] flex justify-center items-center'  style={{fontFamily: 'Montserrat'}}>07.16.22</div>
            <Countdown 
              timeTillDate="05 26 2019, 6:00 am" 
              timeFormat="MM DD YYYY, h:mm a" 
            />
            <div className='text-center py-8'>
              <button className="share-event rounded-full bg-[#EBCD81] w-[131px] h-[40px] text-black" onClick={() => setShowModal(true)}>Share Event</button>
              {showModal ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative w-auto my-6 mx-auto max-w-[496px] bg-[#1F2128]">
                      <div className="modal-content">
                        <div className="flex items-start justify-between p-5 rounded-t">
                          <button
                            className="justify-end p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="text-white opacity-100 h-6 w-6 text-2xl block text-[30px]">
                              ×
                            </span>
                          </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                          <p className="modal-title pl-[25px]">
                            Share this event with your
                          </p>
                          <p className="modal-title pl-[25px]">
                            social community
                          </p>
                          <div className="flex justify-center items-center gap-3 pt-5 pl-[25px]">
                            <a href='https://twitter.com/'><Image src={'/assets/img/twitter.png'} width={56} height={56} alt='twitter' /></a>
                            <a href='https://facebook.com/'><Image src={'/assets/img/facebook.png'} width={56} height={56} alt='facebook' /></a>
                          </div>
                          <p className="url-text pl-[25px]">
                            Or copy link
                          </p>
                          <div className="copy-url">
                            <Image src={'/assets/img/link.png'} width={24} height={24} alt='image' />
                            <span className="url">https://moonparty.com</span>
                            <button className="share-event rounded-full bg-[#EBCD81] w-[74px] h-[40px] text-black" onClick={copy}>{copied ? "Copied" : "Copy"}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;