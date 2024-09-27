"use client";
import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            HI, I AM SABAHAT!
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer", "Geophysicist"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed">
            A passionate web developer with a focus on creating engaging and user-friendly websites. With a strong foundation in front-end and back-end technologies, I specialize in building responsive web applications that bring ideas to life. My goal is to deliver high-quality, scalable solutions that exceed client expectations. Let’s collaborate to turn your vision into reality!
          </p>
          <div className="flex justify-center">
            <a href="#Contact">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="Hero Image"
            width={300}
            height={300}
            src={require('../../../public/assest/car.jpg')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
