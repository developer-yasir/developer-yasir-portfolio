import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { SiFramer, SiNextdotjs, SiTailwindcss } from "react-icons/si";

function Footer() {
  return (
    <footer className="relative bg-[#0d1224] border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-7xl py-12">
        {/* Bottom Section: Copyright & Tech Stack */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">

          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-white font-bold">{personalData.name}</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Designed & Developed with Passion.
            </p>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Built With</span>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="group flex items-center gap-2 transition-colors hover:text-white">
                <SiNextdotjs size={20} />
                <span className="text-xs font-semibold">Next.js</span>
              </div>
              <div className="group flex items-center gap-2 transition-colors hover:text-[#38bdf8]">
                <SiTailwindcss size={20} />
                <span className="text-xs font-semibold">Tailwind</span>
              </div>
              <div className="group flex items-center gap-2 transition-colors hover:text-pink-500">
                <SiFramer size={20} />
                <span className="text-xs font-semibold">Framer</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;