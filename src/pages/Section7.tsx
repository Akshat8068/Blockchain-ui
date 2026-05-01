import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import btcLogo from "../assets/logo/BTC.png";
import ethLogo from "../assets/logo/ETH.png";
import solLogo from "../assets/logo/SOL.png";

// Mock price data per coin
const coinData: Record<string, { price: string; vol: string; change: string; color: string; logo: string; data: { t: string; v: number }[] }> = {
    BTC: {
        price: "$82,450.00", vol: "Vol 28,340,000,000 BTC", change: "+108109137.11%",
        color: "#f7931a", logo: btcLogo,
        data: [
            { t: "2021", v: 29000 }, { t: "2022", v: 68000 }, { t: "2022", v: 16000 },
            { t: "2023", v: 23000 }, { t: "2024", v: 45000 }, { t: "2025", v: 72000 }, { t: "2025", v: 82000 },
        ],
    },
    ETH: {
        price: "$1,820.00", vol: "Vol 12,500,000,000 ETH", change: "+127220.26%",
        color: "#627eea", logo: ethLogo,
        data: [
            { t: "2021", v: 1800 }, { t: "2022", v: 4800 }, { t: "2022", v: 900 },
            { t: "2023", v: 1200 }, { t: "2024", v: 2400 }, { t: "2025", v: 3200 }, { t: "2025", v: 1820 },
        ],
    },
    SOL: {
        price: "$82.89", vol: "Vol 625,440,064 SOL", change: "+160.83%",
        color: "#9945ff", logo: solLogo,
        data: [
            { t: "2021", v: 30 }, { t: "2022", v: 260 }, { t: "2022", v: 10 },
            { t: "2023", v: 20 }, { t: "2024", v: 120 }, { t: "2025", v: 250 }, { t: "2025", v: 83 },
        ],
    },
    DOGE: {
        price: "$0.158", vol: "Vol 890,000,000 DOGE", change: "+63.23%",
        color: "#c2a633", logo: btcLogo,
        data: [
            { t: "2021", v: 0.05 }, { t: "2022", v: 0.74 }, { t: "2022", v: 0.06 },
            { t: "2023", v: 0.07 }, { t: "2024", v: 0.12 }, { t: "2025", v: 0.42 }, { t: "2025", v: 0.16 },
        ],
    },
    XRP: {
        price: "$0.512", vol: "Vol 4,200,000,000 XRP", change: "+116.82%",
        color: "#346aa9", logo: ethLogo,
        data: [
            { t: "2021", v: 0.25 }, { t: "2022", v: 1.8 }, { t: "2022", v: 0.3 },
            { t: "2023", v: 0.4 }, { t: "2024", v: 0.6 }, { t: "2025", v: 2.4 }, { t: "2025", v: 0.51 },
        ],
    },
};

const coins = ["BTC", "ETH", "SOL", "DOGE", "XRP"];

const ExplorerCard = () => {
    const [activeCoin, setActiveCoin] = useState("SOL");
    const coin = coinData[activeCoin];

    return (
        <div className="bg-[#f5f0eb] rounded-2xl p-8 mt-10">
            <h2 className="text-5xl font-bold mb-2">Explorer</h2>
            <p className="text-gray-600 text-sm mb-6 max-w-xl">
                Crypto assets are highly volatile and may lose value. Past performance is not a reliable indicator of future results.
            </p>

            {/* Coin tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
                {coins.map((c) => (
                    <button key={c} onClick={() => setActiveCoin(c)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCoin === c ? "bg-white shadow" : "hover:bg-white/60"}`}>
                        <img src={coinData[c].logo} alt={c} className="w-6 h-6 object-contain rounded-full" />
                        <span>{c}</span>
                        <span className="text-green-600 text-xs">{coinData[c].change}</span>
                    </button>
                ))}
            </div>

            {/* Price + chart */}
            <div className="bg-white rounded-xl p-6">
                <div className="flex items-start gap-3 mb-1">
                    <img src={coin.logo} alt={activeCoin} className="w-8 h-8 object-contain rounded-full mt-1" />
                    <div>
                        <p className="text-3xl font-bold">{coin.price}</p>
                        <p className="text-gray-500 text-sm">{coin.vol}</p>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={coin.data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={coin.color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={coin.color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="t" tick={{ fontSize: 11 }} />
                        <YAxis tick={{ fontSize: 11 }} width={60} />
                        <Tooltip />
                        <Area type="monotone" dataKey="v" stroke={coin.color} strokeWidth={2} fill="url(#colorGrad)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const Section7 = () => {
    return (
        <motion.section className="bg-white text-black py-20 px-5"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            {/* MOBILE + MD — centered text only */}
            <div className="lg:hidden max-w-3xl py-10 mx-auto text-center">
                <p className="text-3xl  px-40 leading-snug">
                    Way back when, we pioneered the world's{" "}
                    <span className="text-[#e8174a]">first blockchain explorer</span>
                    <br />
                    Now, use it to begin your own crypto journey
                </p>
            </div>

            {/* LG — text + Explorer card */}
            <div className="hidden lg:block max-w-4xl mx-auto">
                <div className="text-center mb-2">
                    <p className="text-4xl xl:text-5xl leading-snug">
                        Way back when, we pioneered the world's{" "}
                        <span className="text-[#e8174a]">first blockchain explorer</span>
                        <br />
                        Now, use it to begin your own crypto journey
                    </p>
                </div>
                <ExplorerCard />
            </div>

        </motion.section>
    );
};

export default Section7;
