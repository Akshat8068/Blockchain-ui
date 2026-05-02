import { motion } from "framer-motion";
import card1Bg from "../assets/cards2/card-1-v2.png";
import card2Bg from "../assets/cards2/card-2-v2.png";
import card3Bg from "../assets/cards2/card-3-v2.png";
import card2Logo from "../assets/cards2/card-2-icon.png";
import card3Logo from "../assets/cards2/favicon.ico";

const cards = [
    {
        bg: card1Bg,
        logo: card3Logo,
        title: "Security first",
        desc: "We've never lost customer funds",
    },
    {
        bg: card2Bg,
        logo: card2Logo,
        title: "Used by millions",
        desc: "Over 94M+ wallets have been created to date and growing",
    },
    {
        bg: card3Bg,
        logo: card3Logo,
        title: "Digital asset hub",
        desc: "We've handled over $1.2T+ worth of transactions",
    },
];

const Section6 = () => {
    return (
        <motion.section className="bg-white text-black py-14 px-5"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            {/* MOBILE — left heading, cards below */}
            <div className="md:hidden max-w-2xl mx-auto">
                <h2 className="leading-tight mb-14">
                    <span className="text-5xl font-semibold">Cryptoing<br />since</span>
                    <br />
                    <span className="text-7xl font-extrabold">2011</span>
                </h2>
                <div className="flex flex-col gap-5">
                    {cards.map((card, i) => (
                        <div key={i} className="relative w-full h-80 rounded-2xl overflow-hidden p-6">
                            <img src={card.bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="relative text-white z-10 flex flex-col justify-between h-full">
                                <img src={card.logo} alt="" className="w-10 h-10 object-contain" />
                                <div>
                                    <p className="font-semibold text-4xl mb-1">{card.title}</p>
                                    <p className="text-2xl opacity-80">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MD — centered heading, cards below */}
            <div className="hidden md:block pt-3 mx-auto max-w-8xl" >
                <h2 className="leading-tight mb-14 tracking-[-2px] text-center">
                    <span className=" text-[52px] font-bold">Cryptoing since</span>
                    <br />
                    <span className="text-8xl font-extrabold">2011</span>
                </h2>
                <div className="flex flex-col gap-6  items-center justify-center px-5 lg:px-2 ">
                    
                    <div className="relative w-[90%]  h-80  rounded-md overflow-hidden md:p-10 lg:px-5 lg:py-6 ">
                        <img src={card1Bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative text-black z-10 flex flex-col justify-between h-full">
                            <img src={card3Logo} alt="" className="w-10 h-10 object-contain" />
                            <div>
                                <p className="font-semibold text-4xl tracking-[-1px] mb-1">Security first</p>
                                <p className="text-[26px] ">We've never lost customer funds</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[90%]  h-80  rounded-md overflow-hidden md:p-10 lg:px-5 lg:py-6  ">
                        <img src={card2Bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative text-white z-10 flex flex-col justify-between h-full">
                            <img src={card2Logo} alt="" className="w-10 h-10 object-contain" />
                            <div>
                                <p className="font-semibold text-4xl tracking-[-1px] mb-1.5">Used by millions</p>
                                <p className="text-[26px] max-w-sm  ">Over 94M+ wallets have been created to date and growing</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[90%]  h-80  rounded-md overflow-hidden md:p-10 lg:px-5 lg:py-6  ">
                        <img src={card3Bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative text-white z-10 flex flex-col justify-between h-full">
                            <img src={card3Logo} alt="" className="w-10 h-10 object-contain" />
                            <div>
                                <p className="font-semibold text-4xl tracking-[-1px] mb-1.5">Digital asset hub</p>
                                <p className="text-[26px] ">We've handled over $1.2T+ <br /> worth of transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LG — heading left sticky, cards right */}
            <div className="hidden xl:grid grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
                <div className=" px-40 top-32">
                    <h2 className="leading-tight">
                        <span className="text-6xl xl:text-6xl font-bold">Cryptoing<br />since</span>
                        <br />
                        <span className="text-8xl xl:text-9xl font-extrabold">2011</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-5">
                    {cards.map((card, i) => (
                        <div key={i} className="relative w-full h-80 rounded-2xl overflow-hidden p-6">
                            <img src={card.bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="relative text-white z-10 flex flex-col justify-between h-full">
                                <img src={card.logo} alt="" className="w-10 h-10 object-contain" />
                                <div>
                                    <p className="font-semibold text-3xl mb-1">{card.title}</p>
                                    <p className="text-xl opacity-80">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.section>
    );
};

export default Section6;
