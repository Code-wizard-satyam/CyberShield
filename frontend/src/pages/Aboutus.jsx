import React from 'react';
import login from '../../public/home_user/login.svg';
import teamBg from '../../public/Aboutus/Background.svg';
import teamImg from '../../public/Aboutus/image1.svg';
import teamImg2 from '../../public/Aboutus/image2.svg';
import teamImg3 from '../../public/Aboutus/image3.svg';
import teamImg4 from '../../public/Aboutus/image4.svg';
import teamImg5 from '../../public/Aboutus/image5.svg';

const Aboutus = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'linear-gradient(90deg, #350166 0%, #6A0773 100%)' }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-cyan-400 mr-1">cyber</span>
          <span className="text-3xl font-bold text-fuchsia-500">.shield</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="/homeuser" className="text-white hover:text-cyan-400 transition">Home</a>
          <a href="#" className="ml-4 flex items-center justify-center">
            <img src={login} alt="Log In" className="h-12 w-auto" />
          </a>
        </nav>
      </header>

      {/* Who are we? Section */}
      <section className="max-w-2xl mx-auto text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">Who are we?</h2>
        <p className="mb-2 text-white">
          We are a team of passionate students from IIT Patna, working on a Capstone Project under the Hybrid BSc in Computer Science and Data Analytics program.
        </p>
        <p className="mb-6 text-white">
          Our goal is simple yet powerful: to empower people to fight back against cybercrime using data, technology, and community support.
        </p>
        <div className="flex justify-center items-center my-8">
          <div className="relative w-full max-w-[763px] aspect-[763/270] flex items-center justify-center mx-auto">
            <img src={teamBg} alt="Team Background" className="absolute inset-0 w-full h-full object-contain" />
            <img src={teamImg} alt="Team" className="relative z-10 w-[220px] md:w-[320px] h-auto mx-auto" />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="max-w-3xl mx-auto text-center py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">Our Mission and Vision</h2>
        <div className="text-left mx-auto max-w-2xl">
          <p className="mb-4 text-white">Our platform offers a secure space to:</p>
          <ul className="list-disc list-inside text-white mb-4">
            <li>Report cybercrime safely and anonymously</li>
            <li>Connect with cybersecurity experts for real help</li>
            <li>Explore data visualizations that make cyber threats easier to understand</li>
            <li>Get personalized advice through our AI-based recommendation system</li>
            <li>Access research and awareness resources</li>
          </ul>
          <p className="text-white">
            <span className="text-cyan-300">Our vision</span> is to create a collaborative, user-friendly, and intelligent ecosystem where every internet user can feel safe, informed, and supported.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="w-full py-10 px-4 md:px-0">
        <div className="flex flex-wrap justify-center gap-8 py-10">
          <img src={teamImg2} alt="Team Member 2" className="w-52 h-66 object-contain" />
          <img src={teamImg3} alt="Team Member 3" className="w-52 h-66 object-contain" />
          <img src={teamImg4} alt="Team Member 4" className="w-52 h-66 object-contain" />
          <img src={teamImg5} alt="Team Member 5" className="w-52 h-66 object-contain" />
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
