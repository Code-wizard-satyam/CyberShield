import React from 'react';
import logout from '../../public/home/logout.svg';
import comingSoon from '../../public/community/COMING SOON.svg';
import communityImg from '../../public/community/image1.svg';

const Community = () => {
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
          <a href="/homeuser" className="hover:text-cyan-400 transition">Home</a>
          <a href="/report" className="hover:text-cyan-400 transition">Report a Problem</a>
          <a href="/community" className="hover:text-cyan-400 transition">Community</a>
          <a href="/resources" className="hover:text-cyan-400 transition">Resources</a>
          <a href="/aboutus" className="hover:text-cyan-400 transition">About Us</a>
          <a href="/homeuser" className="ml-4 flex items-center justify-center">
            <img src={logout} alt="Log Out" className="h-12 w-auto" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-center mt-8">
        <div className="flex justify-center items-center my-8">
          <div className="w-full max-w-2xl h-[100px] md:h-[120px] flex items-center justify-center">
            <img src={comingSoon} alt="Coming Soon" className="w-[90%] h-auto object-contain" />
          </div>
        </div>
        <div className="flex justify-center items-center my-8">
          <div className="w-full max-w-2xl h-[220px] md:h-[260px] bg-gradient-to-br from-[#6A0773] to-[#350166] rounded-[48px] flex items-center justify-center border-2 border-fuchsia-400 shadow-[0_0_40px_0_rgba(170,28,211,0.4)]">
            <img src={communityImg} alt="Community Illustration" className="w-[80%] h-auto object-contain" />
          </div>
        </div>
        <p className="mt-8 text-lg md:text-xl text-white">
          We're building something amazing!<br />
          Our community page will be the heart of collaboration—where users and cybersecurity experts connect, share insights, and work together to solve cybercrime issues.
        </p>
      </section>
    </div>
  );
};

export default Community;
