import { motion } from "framer-motion";

const stats = [
    { value: "$1.2T+", label: "Transacted" },
    { value: "5700+", label: "Tokens available" },
    { value: "$537M", label: "Equity capital raised" },
];

const Section9 = () => {
    return (
        <motion.section className=" text-black py-14  px-5 "
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            {/* MOBILE — vertical stack */}
            <div className="md:hidden max-w-sm mx-auto flex flex-col items-center">
                {stats.map((stat, i) => (
                    <div key={i} className="w-full">
                        <div className="text-center py-8">
                            <p className="text-[clamp(3.5rem,12vw,5rem)] font-semibold leading-none mb-2">{stat.value}</p>
                            <p className="text-xl">{stat.label}</p>
                        </div>
                        {i < stats.length - 1 && <hr className="border-gray-700 w-16 mx-auto" />}
                    </div>
                ))}
            </div>

            {/* MD — 3 col, col1 top, col2 center, col3 bottom */}
            <div className="hidden md:grid lg:hidden px-10 grid-cols-3 max-w-3xl mx-auto my-20 h-80">
                {/* Col 1 — top */}
                <div className="flex flex-col justify-start text-center pt-4 border-r border-gray-400  px-6">
                    <p className="text-[52px] font-bold leading-none mb-2">{stats[0].value}</p>
                    <p className="text-base ">{stats[0].label}</p>
                </div>
                {/* Col 2 — center */}
                <div className="flex flex-col justify-center border-r border-gray-400  text-center">
                    <p className="text-[52px] font-bold leading-none mb-2">{stats[1].value}</p>
                    <p className="text-base ">{stats[1].label}</p>
                </div>
                {/* Col 3 — bottom */}
                <div className="flex flex-col justify-end pb-4 px-6 text-center">
                    <p className="text-[52px] font-bold leading-none mb-2">{stats[2].value}</p>
                    <p className="text-base ">{stats[2].label}</p>
                </div>
            </div>

            {/* LG — same layout, bigger text */}
            <div className="hidden lg:grid px-18 py-20 grid-cols-3 max-w-5xl mx-auto h-screen">
                {/* Col 1 — top */}
                <div className="flex flex-col justify-start pt-6 border-r border-gray-300 text-center px-8">
                    <p className="text-[58px] tracking-[-3px] font-bold leading-none mb-3">{stats[0].value}</p>
                    <p className="text-lg">{stats[0].label}</p>
                </div>
                {/* Col 2 — center */}
                <div className="flex flex-col  justify-center border-r border-gray-300 px-8 text-center">
                    <p className="text-[58px] font-bold leading-none mb-3">{stats[1].value}</p>
                    <p className="text-lg">{stats[1].label}</p>
                </div>
                {/* Col 3 — bottom */}
                <div className="flex flex-col justify-end pb-6 px-8 text-center">
                    <p className="text-[58px] font-bold leading-none mb-3">{stats[2].value}</p>
                    <p className="text-lg">{stats[2].label}</p>
                </div>
            </div>

        </motion.section>
    );
};

export default Section9;
