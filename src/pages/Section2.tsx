import { useState } from "react";
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
    const [earnAmount, setEarnAmount] = useState<number>(0);

    const coin = coins.find((c) => c.id === selected)!;
    const apyNum = parseFloat(coin.apy) / 100;
    const couldEarn = Math.round(earnAmount * apyNum);

    return (
        // overlap hero section 
        <>
            <div className="h-25 w-full" style={{ background: "linear-gradient(0deg, #ffffffff 0%, #807f7fff 45%, #464646ff 75%, #0d0d0dff 100%" }}
            />
            <section
                className="relative z-30 mx-4 md:mx-18 lg:mx-18 rounded-2xl overflow-hidden text-white -mt-70 md:-mt-45 lg:-mt-50"
                style={{
                    background: "linear-gradient(0deg, #0B0B0B 0%, #3a3a3aff 45%, #6d6d6dff 75%, #2a2a2aff 100%, #0b0b0bff 0%)"
                }}

            >
                <div className="max-w-6xl mx-5 lg:px-0 py-5">

                    {/* Header */}
                    <h2 className="text-4xl md:hidden md:text-5xl  font-semibold mb-2 leading-tight">
                        Earn up to 10% on your crypto
                    </h2>
                    <h2 className="hidden md:block  md:text-[45px]  font-semibold mb-2 leading-tight">
                        Earn up to 10% on your crypto
                    </h2>
                    <p className="text-2xl text-white mb-8">
                        Put your holdings to work with competitive reward rates
                    </p>

                    {/* Coin selector grid — 2 cols mobile, 3 cols md+ */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-2 w-full  mb-8">
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

                    <div className="hidden md:grid  grid-cols-2 md:grid-cols-6 gap-y-6 gap-x-6 lg:px-7 mb-8">
                        {coins.map((c, i) => {
                            let extraClass = "";

                            // 2nd row items ko center shift karna
                            if (i === 3) extraClass = "md:col-start-2";
                            if (i === 4) extraClass = "md:col-start-4";

                            return (
                                <button
                                    key={c.id}
                                    onClick={() => setSelected(c.id)}
                                    className={`flex items-center gap-3 p-3 rounded-2xl  transition-all text-left col-span-2 ${extraClass} ${selected === c.id
                                        ? "bg-[#2e2d2d] shadow-md"
                                        : "hover:bg-black/9"
                                        }`}
                                >
                                    <img src={c.logo} className="w-10 h-10 rounded-full" />

                                    <div className="flex flex-col leading-tight">
                                        <span className="font-semibold text-lg">{c.label}</span>
                                        <span className="text-cyan-400 text-sm font-medium">
                                            {c.apy} APY
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                    {/* White card */}
                    <div className="bg-white text-black rounded-2xl p-5 shadow-2xl">

                        {/* Coin header — mobile: stacked, md+: logo left + stats right */}
                        <div className="md:flex justify-between md:gap-72 lg:gap-105  mb-8">
                            {/* Logo + name */}
                            <div className="flex items-start  gap-3 mb-4 md:mb-0 md:flex-shrink-0">
                                <img src={coin.logo} alt={coin.label} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-bold text-xl">{coin.label}</p>
                                    <p className="text-gray-400 text-base">{coin.label}</p>
                                </div>
                            </div>

                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-3 space-x-1 lg:ml-20 mb-5 md:mb-0 md:flex-1">
                                <div>
                                    <p className="font-bold text-xl">
                                        {coin.price}
                                        <span className="text-red-500 ml-0.4 text-base">{coin.change}</span>
                                    </p>
                                    <p className=" text-lg">Price</p>
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-green-600">{coin.apy}</p>
                                    <p className=" text-lg">Current Rate</p>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">
                                        {coin.mcap}{" "}
                                        <span className="text-red-500 text-base">{coin.change}</span>
                                    </p>
                                    <p className=" text-lg">Market Cap</p>
                                </div>
                                <div  >
                                    <p className="font-bold text-lg">Active</p>
                                    <p className="text-lg">Reward strategy</p>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{coin.vol}</p>
                                    <p className="text-lg">24h Volume</p>
                                </div>
                                {/* Sparkline */}
                                <div className="flex flex-col mt-3 justify-end">
                                    <svg viewBox="0 0 80 30" className="w-20 h-8 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <polyline points="0,25 10,20 20,22 30,15 40,18 50,10 60,14 70,8 80,12" />
                                    </svg>
                                    <p className=" text-base">Last 7 days</p>
                                </div>
                            </div>
                        </div>

                        {/* Estimate rewards */}
                        <h3 className="text-[28px] mb-1">Estimate your rewards</h3>
                        <p className=" text-lg ">
                            Get a sense of how much yield you may receive after a year's investment.
                        </p>
                        <p className=" text-lg mb-5">Paid monthly.</p>

                        <div className="flex flex-1 flex-col gap-3 mb-5">
                            <div className="border border-gray-300 md:border-gray-400 rounded-xl px-4 py-3">
                                <p className="text-base mb-1">I want to earn on</p>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold text-xl">₹</span>
                                    <Input
                                        type="number"
                                        value={earnAmount}
                                        placeholder="10000"
                                        onChange={(e) => setEarnAmount(Number(e.target.value))}
                                        className="border-0 p-0 h-auto text-gray-400 text-lg font-semibold bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                                    />
                                </div>
                            </div>
                            <div className="border border-gray-300 md:border-gray-400 rounded-xl px-4 py-3">
                                <p className="text-base mb-1">You could earn</p>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold text-xl">₹</span>
                                    <span className="text-gray-400 text-xl font-semibold">{couldEarn.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#c9143f] hover:bg-[#c9143f] text-white font-semibold py-4 rounded-xl transition-colors text-base">
                            Discover more
                        </button>
                    </div>

                </div>
            </section >
        </>
    );
};

export default Section2;
