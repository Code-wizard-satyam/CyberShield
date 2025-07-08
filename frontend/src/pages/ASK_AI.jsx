import React from "react";


const AskAI = () => {
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
                    <a href="/homeguest" className="ml-4 flex items-center justify-center">
                        <img src={logout} alt="Log Out" className="h-12 w-auto" />
                    </a>
                </nav>
            </header>

        </div>
    )
}

export default AskAI;