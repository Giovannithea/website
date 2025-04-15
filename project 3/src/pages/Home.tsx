import React from 'react';
import { Sprout, Users, Boxes, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <main className="container mx-auto px-4 text-center mt-24">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          The Fastest Non-Custodial<br />
          Crypto Trading Bot on Solana
        </h1>
        <p className="text-2xl text-gray-300 mb-4">
          Trade safer. Trade smarter. Full control—no compromises.
        </p>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Wallet-based security, automated trading, and advanced<br />
          token filters built for real traders.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => navigate('/pricing')}
            className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </button>
          <button 
            onClick={() => navigate('/features')}
            className="border border-[#6366F1] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#6366F1]/10 transition-colors"
          >
            View Features
          </button>
        </div>
      </main>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 mt-48 mb-24">
        <h2 className="text-5xl font-bold text-center mb-6">
          Our Roadmap to the Future
        </h2>
        <p className="text-xl text-gray-400 text-center mb-24">
          Building the most secure and powerful trading<br />
          tool for Solana.
        </p>

        <div className="max-w-6xl mx-auto relative">
          <div className="wave-bg"></div>
          
          <h3 className="text-6xl font-bold text-purple-500 text-center mb-20 neon-text">ROADMAP</h3>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
              <div className="neon-line h-full"></div>
            </div>

            {/* Timeline Content */}
            <div className="space-y-32">
              {/* Phase I */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="neon-dot"></div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-right">
                    <Sprout className="roadmap-icon ml-auto mb-4" />
                    <h4 className="text-4xl font-bold text-purple-500 neon-text mb-4">Genesis</h4>
                    <ul className="text-xl text-purple-300 space-y-2">
                      <li>Smart Contracts Deployment</li>
                      <li>Early Community Tools</li>
                    </ul>
                  </div>
                  <div className="pt-24">
                    <h4 className="text-4xl font-bold text-purple-500 neon-text mb-4">Phase I</h4>
                    <h5 className="text-3xl font-bold text-purple-400 mb-4">Genesis</h5>
                    <ul className="text-xl text-purple-300 space-y-2">
                      <li>Smart Contracts Deployment</li>
                      <li>Early Community Tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase II */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="neon-dot"></div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-right">
                    <Users className="roadmap-icon ml-auto mb-4" />
                    <h4 className="text-4xl font-bold text-purple-500 neon-text mb-4">Synergy</h4>
                    <ul className="text-xl text-purple-300 space-y-2">
                      <li>SDKs, APIs</li>
                      <li>Dev Phase IV</li>
                    </ul>
                  </div>
                  <div className="pt-24">
                    <h4 className="text-4xl font-bold text-purple-500 neon-text mb-4">Phase II</h4>
                    <h5 className="text-3xl font-bold text-purple-400 mb-4">Synergy</h5>
                    <ul className="text-xl text-purple-300 space-y-2">
                      <li>SDKs, APIs</li>
                      <li>Dev Phase IV</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase III */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="neon-dot"></div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-right">
                    <Network className="roadmap-icon ml-auto mb-4" />
                    <h4 className="text-4xl font-bold text-purple-500 neon-text mb-4">Orbit</h4>
                    <ul className="text-xl text-purple-300 space-y-2">
                      <li>Partnership</li>
                      <li>Integrations</li>
                    </ul>
                  </div>
                  <div className="pt-24">
                    <h4 className="text-4xl font-bold text-purple-500 neon-text mb-4">Phase III</h4>
                    <h5 className="text-3xl font-bold text-purple-400 mb-4">Orbit</h5>
                    <ul className="text-xl text-purple-300 space-y-2">
                      <li>Partnership</li>
                      <li>Integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;