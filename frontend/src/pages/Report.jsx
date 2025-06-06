import React from 'react';
import logout from '../../public/home/logout.svg';
import reportImg from '../../public/Report/image1.svg';

const Report = () => {
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
          <a href="/homeguest" className="ml-4 flex items-center justify-center">
            <img src={logout} alt="Log Out" className="h-12 w-auto" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-center mt-8">
        <p className="text-lg md:text-xl mb-8">
          If you've experienced a scam, cyberbullying, fraud, or any other digital threat – let us know. Our community and experts are here to help, and your report helps others stay safe.
        </p>
        <div className="flex justify-center items-center my-8">
          <div className="w-full max-w-2xl h-[220px] md:h-[260px] bg-gradient-to-br from-[#6A0773] to-[#350166] rounded-[48px] flex items-center justify-center border-2 border-fuchsia-400 shadow-[0_0_40px_0_rgba(170,28,211,0.4)]">
            <img src={reportImg} alt="Report Hero" className="w-[80%] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="max-w-2xl mx-auto text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2">Report a Cybercrime</h2>
        <p className="mb-8 text-white text-base md:text-lg">
          If you've been a victim of cyber fraud, bullying, scams, or any suspicious online activity — we're here to help.
        </p>
        <form className="bg-gradient-to-br from-[#6A0773] to-[#350166] rounded-[32px] p-8 md:p-12 shadow-lg border-2 border-fuchsia-400 flex flex-col gap-4">
          <div className="flex flex-col items-start">
            <label className="mb-1">Category :</label>
            <input type="text" className="w-full rounded bg-transparent border border-purple-300 px-4 py-2 text-white focus:outline-none" />
          </div>
          <div className="flex flex-col items-start">
            <label className="mb-1">Title of Incident :</label>
            <input type="text" className="w-full rounded bg-transparent border border-purple-300 px-4 py-2 text-white focus:outline-none" />
          </div>
          <div className="flex flex-col items-start">
            <label className="mb-1">Description :</label>
            <textarea className="w-full rounded bg-transparent border border-purple-300 px-4 py-2 text-white focus:outline-none" rows={3}></textarea>
          </div>
          <div className="flex flex-col items-start md:flex-row md:gap-4">
            <div className="flex-1 flex flex-col items-start mb-2 md:mb-0">
              <label className="mb-1">Date of Incident :</label>
              <input type="date" className="w-full rounded bg-transparent border border-purple-300 px-4 py-2 text-white focus:outline-none" />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <label className="mb-1">Attach an Evidance :</label>
              <input type="file" className="w-full rounded bg-transparent border border-purple-300 px-4 py-2 text-white focus:outline-none" />
            </div>
          </div>
          <div className="flex flex-col items-start md:flex-row md:gap-4">
            <div className="flex-1 flex flex-col items-start mb-2 md:mb-0">
              <label className="mb-1">Location :</label>
              <input type="text" className="w-full rounded bg-transparent border border-purple-300 px-4 py-2 text-white focus:outline-none" />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <label className="mb-1">Contact Details :</label>
              <input type="text" className="w-full rounded bg-transparent border border-purple-300 px-4 py-2 text-white focus:outline-none" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" id="anonymous" className="accent-fuchsia-500" />
            <label htmlFor="anonymous">Anonymous Reporting :</label>
          </div>
          <button type="submit" className="mt-4 px-8 py-2 bg-fuchsia-500 text-white rounded-full font-semibold hover:bg-fuchsia-600 transition self-end">
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
};

export default Report;
