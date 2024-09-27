import Image from 'next/image';
import react from 'react';
const About = ()=>{
    return(
        <div id='About'>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        src={require('../../../public/assest/upwork.jpg')}
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About me
        <br className="hidden lg:inline-block" />
        
      </h1>
      
      <p className="mb-5 leading-relaxed">
      Hello! I`m SABAHAT, a Web deleloper. I have a passion for learning new technologies and applying them in projects.
          I`ve worked on several projects, some of which you can see on this website.
          I enjoy coding, designing, and solving problems. I`m always excited to take on new challenges and grow my skills.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        
      </div>
    </div>
  </div>
</section>


        </div>
    )
}
export default About;