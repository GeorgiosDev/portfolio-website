import React from 'react';

const About = () => {
  return (
    <div name="About" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">About Me</p>
          <div />
          <p className="text-xl mt-8 md:mt-20 text-justify">
            My name is Georgios Deverakis and I am from Greece. Welcome to my portfolio! I'm a passionate Front-end
            Developer looking to work with you! I'm a frontend developer specializing in HTML, CSS, Bootstrap, Tailwind
            CSS, JavaScript, Node.js, Express.js, and React. With 3 years of dedicated learning and hands-on experience,
            I've crafted a solid skill set to create dynamic and responsive web applications. My toolbox also includes
            Webpack for efficient code bundling and a foundational understanding of MySQL and MongoDB for data
            management. I've brought my skills to life through various real-world projects, further honing my
            abilities.
          </p>
          <p className="text-xl mt-6 md:mt-8 text-justify">
            Welcome to my portfolio website, where you can explore the results of my journey so far.
            <br />
            If you're looking for a talented Front-end Developer who can transform your ideas into reality, I'd love to
            collaborate with you. Thank you for visiting my portfolio, and I look forward to connecting with you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
