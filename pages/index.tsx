import NavLink from "@/components/atom/link";
import Image from "next/image";
import content from "@/contents";
import { useState } from "react";
import SpeakerWaveIcon from "@heroicons/react/24/outline/SpeakerWaveIcon";
import SpeakerXMarkIcon from "@heroicons/react/24/outline/SpeakerXMarkIcon";
import Head from "next/head";

const ImageDiv = () => {
  const [selected, setSelected] = useState(-1);

  const onMouseEnter = (index: number) => {
    setSelected(index);
  };

  const onMouseLeave = () => {
    setSelected(-1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
      {content.images.map((image, index) => (
        <Image
          src={image}
          key={index}
          alt={image}
          width={1000}
          height={1000}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
          className={`border-[8px] border-neutral-600 rounded-sm ${
            selected === index || selected === -1 ? "blur-none" : "blur-sm"
          } hover:blur-none hover:-translate-y-1 duration-75 hover:z-20 hover:border-neutral-700`}
        />
      ))}
    </div>
  );
};

const VideoDiv = () => {
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted={muted}
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className="absolute z-10 bottom-[2vw] right-[3vw] rounded-full bg-neutral-700/50 p-2 border-2 border-neutral-50"
        onClick={toggleMute}
      >
        {muted ? (
          <SpeakerXMarkIcon className="h-4 md:h-5 text-white" />
        ) : (
          <SpeakerWaveIcon className="h-4 md:h-5 text-white" />
        )}
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Head>
        <title>Edrick and Patricia</title>
      </Head>
      <header className="bg-white w-full h-32 border-b mb-12 flex justify-center sticky top-0 z-40">
        <div className="container h-full flex justify-between items-center px-10">
          {/* logo text */}
          <div className="h-full flex items-center justify-center lg:px-10">
            <h1 className="font-parisienne text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700">
              Edrick & Patricia
            </h1>
          </div>
          {/* navigation */}
          <nav className="hidden lg:flex gap-x-12 text-xl text-neutral-700 ">
            <NavLink href="/" text="Home" />
            <NavLink href="/#video" text="Video" />
            <NavLink href="/#images" text="Images" />
          </nav>
        </div>
      </header>
      <div className="container relative flex flex-col items-center justify-center pb-24">
        <div className="pb-10 text-center" id="video">
          <h5 className=" text-neutral-700 text-base md:text-lg lg:text-xl px-4 lg:px-10">
            In this enchanted moment, a mesmerizing love story unfolds.
          </h5>
          <p className="text-xs lg:text-sm text-neutral-500">June 2, 2023</p>
        </div>
        <VideoDiv />

        <div className="h-40 relative w-full">
          <Image
            src="/images/divider.svg"
            height={100}
            width={600}
            alt="divider"
            className="absolute top-0 left-[50%] translate-x-[-50%] h-full object-cover"
          />
        </div>
        <p className="text-center w-3/4 px-4 lg:px-10 pb-10 text-base lg:text-xl">
          {`Love is not about how many days, months, or years you have been
          together. It's all about how much you love each other every day.`}
        </p>

        {/* hero */}
        <div className="relative">
          <Image
            src="/images/main.jpg"
            width={1400}
            height={1000}
            alt="Main Background Photo"
            style={{
              width: "100%",
              opacity: "0.9",
            }}
          />

          {/* <div className="font-parisienne text-[4vw] text-neutral-700 absolute top-[20vw] right-[10vw] text-center">
          <h2>Edrick</h2>
          <p className="text-2xl">and</p>
          <h2>Patricia</h2>
        </div> */}
        </div>

        <div className="h-40 relative w-full" id="images">
          <Image
            src="/images/divider.svg"
            height={100}
            width={600}
            alt="divider"
            className="absolute top-0 left-[50%] translate-x-[-50%] h-full object-cover"
          />
        </div>
        <p className="text-center w-3/4 px-4 lg:px-10 pb-10 text-base lg:text-xl">
          Embrace the love and joy of the special day, as cherished moments,
          heartfelt vows, and radiant smiles are captured, forever preserving
          the celebration of the union.
        </p>
        {/*  */}
        <ImageDiv />
      </div>
    </div>
  );
};

export default Home;
