import { useState } from "react";
import { motion } from "framer-motion";
import btcLogo from "../assets/logo/BTC.png";
import ethLogo from "../assets/logo/ETH.png";
import solLogo from "../assets/logo/SOL.png";
import enaLogo from "../assets/logo/ENA.png";
import paxLogo from "../assets/logo/PAX.png";
import { Input } from "../components/ui/input";

const coins = [
    { id: "BTC", label: "BTC", apy: "8%", logo: btcLogo, price: "$76.35K", change: "↓ 1.13%", mcap: "$1.54T", vol: "$209.77M" },
    { id: "ETH", label: "ETH", apy: "8%", logo: ethLogo, price: "$3.12K", change: "↓ 0.82%", mcap: "$375B", vol: "$18.4B" },
    { id: "SOL", label: "SOL", apy: "4%", logo: solLogo, price: "$142", change: "↑ 2.10%", mcap: "$65B", vol: "$3.2B" },
    { id: "ENA", label: "ENA", apy: "10%", logo: enaLogo, price: "$0.82", change: "↑ 0.45%", mcap: "$2.1B", vol: "$210M" },
    { id: "PAX", label: "PAX", apy: "9.5%", logo: paxLogo, price: "$1.00", change: "0.00%", mcap: "$890M", vol: "$45M" },
];

const Section2 = () => {
    const [selected, setSelected] = useState("BTC");
    const [earnAmount, setEarnAmount] = useState(10000);

    const coin = coins.find((c) => c.id === selected)!;
    const apyNum = parseFloat(coin.apy) / 100;
    const couldEarn = Math.round(earnAmount * apyNum);

    return (
        // overlap hero section 
        <motion.section
            className="relative z-30 mx-2 rounded-xl overflow-hidden text-white "
            style={{ background: "linear-gradient(180deg, #4a4a4a 0%, #d1d1d1 100%)" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="max-w-2xl mx-auto px-5 py-10">

                {/* Header */}
                <h2 className="text-4xl md:text-3xl font-semibold mb-2 leading-tight">
                    Earn up to 10% on your crypto
                </h2>
                <p className="text-2xl text-white mb-8">
                    Put your holdings to work with competitive reward rates
                </p>

                {/* Coin selector grid — 2 cols */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                    {coins.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setSelected(c.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left ${selected === c.id
                                ? "bg-zinc-700/80 text-white"
                                : "bg-transparent  hover:bg-zinc-700/40"
                                }`}
                        >
                            <img src={c.logo} alt={c.label} className="w-9 h-9 rounded-full flex-shrink-0" />
                            <span>
                                <span className="block font-bold text-lg">{c.label}</span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* White card */}
                <div className="bg-white text-black rounded-2xl p-5">

                    {/* Coin header */}
                    <div className="flex items-center gap-3 mb-5">
                        <img src={coin.logo} alt={coin.label} className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-bold text-xl">{coin.label}</p>
                            <p className="text-gray-400 text-base">{coin.label}</p>
                        </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-y-4 mb-5">
                        <div>
                            <p className="font-semibold text-lg">
                                {coin.price}{" "}
                                <span className="text-red-500 text-base">{coin.change}</span>
                            </p>
                            <p className="text-gray-400 text-base">Price</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg text-green-600">{coin.apy}</p>
                            <p className="text-gray-400 text-base">Current Rate</p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">
                                {coin.mcap}{" "}
                                <span className="text-red-500 text-base">{coin.change}</span>
                            </p>
                            <p className="text-gray-400 text-base">Market Cap</p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Active</p>
                            <p className="text-gray-400 text-base">Reward strategy</p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">{coin.vol}</p>
                            <p className="text-gray-400 text-base">24h Volume</p>
                        </div>
                        {/* Sparkline placeholder */}
                        <div className="flex flex-col justify-end">
                            <svg viewBox="0 0 80 30" className="w-20 h-8 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="0,25 10,20 20,22 30,15 40,18 50,10 60,14 70,8 80,12" />
                            </svg>
                            <p className="text-gray-400 text-xs">Last 7 days</p>
                        </div>
                    </div>

                    <hr className="border-gray-200 mb-5" />

                    {/* Estimate rewards */}
                    <h3 className="text-2xl mb-1">Estimate your rewards</h3>
                    <p className=" text-base mb-1">
                        Get a sense of how much yield you may receive after a year's investment.
                    </p>
                    <p className=" text-base mb-5">Paid monthly.</p>

                    <div className="flex flex-col gap-3 mb-5">
                        <div className="border border-gray-300 rounded-xl px-4 py-3">
                            <p className=" text-sm mb-1">I want to earn on</p>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-400 ">₹</span>
                                <Input
                                    type="number"
                                    value={earnAmount}
                                    onChange={(e) => setEarnAmount(Number(e.target.value))}
                                    className="border-0 p-0 h-auto text-gray-300 text-lg font-medium bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                                />
                            </div>
                        </div>
                        <div className="border border-gray-300 rounded-xl px-4 py-3">
                            <p className="text-sm mb-1">You could earn</p>
                            <p className="text-gray-300 text-lg font-medium">₹{couldEarn.toLocaleString()}</p>
                        </div>
                    </div>

                    <button className="w-full bg-[#e8174a] hover:bg-[#c9143f] text-white font-semibold py-4 rounded-xl transition-colors text-lg">
                        Discover more
                    </button>
                </div>

            </div>
        </motion.section>
    );
};

export default Section2;
