import React from 'react';
import image1 from '../../public/home/image1.svg';
import image2 from '../../public/home/image2.svg';
import image3 from '../../public/home/image3.svg';
import image4 from '../../public/home/image4.svg';
import image5 from '../../public/home/image5.svg';
import login from '../../public/home_user/login.svg';
import bottom from '../../public/home_user/image1.svg';
// import logout from '../../public/home/logout.svg';

const Home = () => {
  return (
    <div
      className="min-h-screen w-full text-white font-sans"
      style={{ background: 'linear-gradient(90deg, #350166 0%, #6A0773 100%)' }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-cyan-400 mr-1">cyber</span>
          <span className="text-3xl font-bold text-fuchsia-500">.shield</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#" className="hover:text-cyan-400 transition">About Us</a>
          <a href="#" className="ml-4 flex items-center justify-center">
            <img src={login} alt="Log In" className="h-12 w-auto" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 h-[90vh] py-12 md:py-20">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">Protecting You in the Digital World!</h1>
          <p className="text-lg md:text-xl mb-8 text-white">Report cybercrimes, get help from experts, and learn how to stay safe online.</p>
        </div>
        {/* Image Placeholder */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 md:ml-16">
          <div className="w-[350px] h-[260px] md:w-[500px] md:h-[380px] bg-purple-800 bg-opacity-30 rounded-2xl flex items-center justify-center border-2 border-dashed border-cyan-400">
            <img src={image1} alt="Main Hero" className="w-[90%] h-[90%] object-contain" />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full bg-gradient-to-b from-purple-800 to-purple-900 py-16 px-4 h-[100vh]  md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">Key Features</h2>
          <p className="text-white mb-10 max-w-2xl mx-auto">
            Our platform is designed with powerful tools to help you navigate the digital world safely and confidently. Whether you're facing a cyber threat, seeking expert guidance, or simply wanting to stay informed, we've got you covered. Explore our core features that make protecting yourself online easier than ever.
          </p>
          <div className="grid  grid-cols-1 md:grid-cols-4 gap-10 mt-20">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-32 bg-gradient-to-br from-[#3a0ca3] to-[#7209b7] rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                <img src={image2} alt="Report Problems Securely" className="w-32 h-24 object-contain" />
              </div>
              <span className="font-semibold text-cyan-300 mb-2">Report Problems Securely</span>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-32 bg-gradient-to-br from-[#3a0ca3] to-[#7209b7] rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                <img src={image3} alt="Community-Powered Solutions" className="w-32 h-24 object-contain" />
              </div>
              <span className="font-semibold text-cyan-300 mb-2">Community-Powered Solutions</span>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-32 bg-gradient-to-br from-[#3a0ca3] to-[#7209b7] rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                <img src={image4} alt="Real-Time Data Visualizations" className="w-32 h-24 object-contain" />
              </div>
              <span className="font-semibold text-cyan-300 mb-2">Real-Time Data Visualizations</span>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-32 bg-gradient-to-br from-[#3a0ca3] to-[#7209b7] rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                <img src={image5} alt="AI-Based Recommendations" className="w-32 h-24 object-contain" />
              </div>
              <span className="font-semibold text-cyan-300 mb-2">AI-Based Recommendations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Login Prompt Section */}
      <section className="w-full h-[100vh] flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-0 bg-gradient-to-b from-purple-900 to-purple-800">
        {/* Image Placeholder (left) */}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <div className="w-[350px] h-[200px] md:w-[500px] md:h-[300px] bg-purple-800 bg-opacity-30 rounded-2xl flex items-center justify-center border-2 border-dashed border-cyan-400">
            <img src={bottom} alt="Bottom" className="w-full h-full object-contain" />
          </div>
        </div>
        {/* Login Prompt (right) */}
        <div className="flex-1 flex flex-col items-start md:pl-4">
          <h3 className="text-cyan-300 text-lg md:text-xl font-semibold mb-2">Login to unlock full access to all features —</h3>
          <ul className="list-disc list-inside text-white text-base md:text-lg mb-2">
            <li>Report Problems</li>
            <li>Resolve Problems</li>
            <li>Join Our Cybersecurity Community.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
