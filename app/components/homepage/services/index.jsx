// @flow strict
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase, FaLayerGroup, FaWordpress } from "react-icons/fa";

const services = [
    {
        title: "Full Stack Development",
        description: "Building robust, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
        icon: <FaLayerGroup className="text-pink-500" size={36} />,
    },
    {
        title: "Frontend Engineering",
        description: "Creating responsive, high-performance user interfaces with React, Next.js, and Tailwind CSS.",
        icon: <BiCodeAlt className="text-violet-500" size={36} />,
    },
    {
        title: "Backend & API Development",
        description: "Designing and implementing secure RESTful APIs and server-side logic using Node.js and Express.",
        icon: <FaDatabase className="text-cyan-500" size={36} />,
    },
    {
        title: "CMS & WordPress",
        description: "Custom WordPress development and management, ensuring content-rich sites are fast and reliable.",
        icon: <FaWordpress className="text-amber-500" size={36} />,
    }
];

function Services() {
    return (
        <div id="services" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Services
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative rounded-xl border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-6 transition-all duration-300 hover:scale-105 hover:border-pink-500/50"
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#1a1443] group-hover:bg-pink-500/10 transition-colors">
                            {service.icon}
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-pink-500 transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
