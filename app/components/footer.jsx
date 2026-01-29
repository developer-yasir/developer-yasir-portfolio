"use client";

import { personalData } from '@/utils/data/personal-data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import { SiFramer, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#0d1224] py-16 lg:py-24 overflow-hidden border-t border-white/10">
      {/* Immersive Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top Section: Quick Links & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="text-[#16f2b3] text-2xl font-bold mb-6 block">
              YASIR RAEES
            </Link>
            <p className="text-gray-400 text-lg max-w-sm mb-8">
              Engineering high-performance digital solutions with a focus on scalability and user experience.
            </p>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Available for new opportunities</span>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-2 items-start lg:items-end">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Let's Connect</h4>
            <Link
              href="/#contact"
              className="group flex items-center gap-3 text-emerald-400 font-black text-xl lg:text-3xl hover:text-white transition-colors mb-8"
            >
              START A PROJECT
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            {/* Local Time Display */}
            <div className="mt-auto flex items-center gap-3 text-gray-500 font-mono text-sm">
              <FaClock className="text-emerald-500/50" />
              <span>Lahore, PK: <span className="text-gray-300">{time || "Checking..."}</span></span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left w-full">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="text-white font-medium">{personalData.name}</span>. Built from scratch.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;