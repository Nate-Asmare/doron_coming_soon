import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <Head>
        <title>We are coming soon!</title>
        <meta name="description" content="Coming soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col lg:flex-row justify-between items-center lg:h-screen justify-center text-primary">
        <div className="mt-[80px] lg:mt-[0px] lg:relative max-w-[740px] flex flex-col items-center lg:items-start lg:leading-none lg:ml-[90px] px-[10px]">
          <h5 className="text-[18px] lg:before:absolute lg:before:content-[''] lg:before:top-[50%] lg:before:left-[0px] lg:before:bg-[#333333] lg:before:w-[88px] lg:before:h-[2px] lg:-translate-y-[50%] lg:text-[22px] font-normal lg:pl-[100px]">
            Coming Soon
          </h5>
          <h1 className="text-[38px] text-center lg:text-left lg:text-[84px] font-extrabold">
            Get Notified when we launch.
          </h1>
          <div className="flex border-[1px] border-gray rounded-full border-red max-w-[700px] my-[30px]">
            <input
              className="w-full h-[50px] lg:h-[70px] rounded-l-full focus:outline-0 pl-[30px] text-[20px]"
              placeholder="Enter your email"
              type="text"
            />
            <button className="border-none border-black w-[200px] bg-secondary rounded-full text-white text-[20px] font-normal">
              Notify Me
            </button>
          </div>
        </div>
        <div className="mt-[30px] lg:mt-[0px] w-[100%] h-[500px] lg:w-[40%] lg:h-full bg-rocket-launch bg-center bg-cover"></div>
      </main>
    </>
  );
}
