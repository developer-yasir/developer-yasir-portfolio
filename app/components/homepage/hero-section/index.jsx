"use client";

import { personalData } from "@/utils/data/personal-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  const techStack = [
    { name: "React", color: "text-cyan-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "MongoDB", color: "text-emerald-500" },
    { name: "Next.js", color: "text-white" },
    { name: "Tailwind", color: "text-sky-400" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#0d1224] py-8 lg:py-12 px-2 overflow-hidden">
      {/* Background Decorative Elements - Ultra-optimized */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-pink-500/10 blur-[40px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/10 blur-[50px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto max-w-8xl relative z-10">
        <div className="relative bg-[#1a2238]/60 border border-white/10 rounded-[48px] p-6 md:p-12 lg:p-16 shadow-2xl overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

            {/* Left Content Column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-[2px] w-12 bg-pink-500" />
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-pink-500">{personalData.designation.split('|')[0]}</span>
                </div>

                <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
                  I Craft <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 italic">Scalable</span> <br />
                  Systems.
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                  Hi, I'm <span className="text-white font-bold">{personalData.name}</span>. I build robust MERN stack applications that bridge the gap between performance and user experience.
                </p>

                {/* Social Ecosystem - Glowing Icons */}
                <div className="flex items-center gap-4 mb-12">
                  <Link
                    href={personalData.github}
                    target="_blank"
                    className="group relative p-3 bg-white/5 border border-white/10 rounded-xl transition-all hover:scale-110 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <FaGithub className="relative z-10 text-white group-hover:text-pink-500 transition-colors" size={24} />
                  </Link>
                  <Link
                    href={personalData.linkedIn}
                    target="_blank"
                    className="group relative p-3 bg-white/5 border border-white/10 rounded-xl transition-all hover:scale-110 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-violet-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <FaLinkedin className="relative z-10 text-white group-hover:text-violet-400 transition-colors" size={24} />
                  </Link>
                  {/* Additional social items can be added here if defined in personalData */}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                  <Link href="#contact" className="group relative px-10 py-5 bg-white text-[#0d1224] font-black rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                    <span className="relative z-10">Let's Connect</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <span className="relative z-10 group-hover:text-white transition-colors">→</span>
                  </Link>

                  <Link
                    href={personalData.resume}
                    target="_blank"
                    className="px-10 py-5 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-2"
                  >
                    Download CV
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Profile Column */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10 w-full aspect-[4/5] p-[2.5px] rounded-[40px] overflow-hidden shadow-2xl group">
                  {/* Rotating Animated Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_45deg,#ec4899_90deg,transparent_135deg,transparent_180deg,transparent_225deg,#8b5cf6_270deg,transparent_315deg,transparent_360deg)] opacity-60"
                  />

                  {/* Inner Content Container */}
                  <div className="relative z-10 w-full h-full rounded-[38px] overflow-hidden bg-[#0d1224]">
                    <Image
                      src={personalData.profile}
                      fill
                      alt={personalData.name}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>

                {/* Aesthetic Floating Box - Simplified */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-[32px] -z-10 blur-xl" />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;