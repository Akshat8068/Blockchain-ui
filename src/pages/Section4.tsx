import btc from "../assets/move itmes/prices-btc.svg";
import eth from "../assets/move itmes/prices-eth.svg";
import sol from "../assets/move itmes/prices-sol.svg";
import dot from "../assets/move itmes/prices-dot.svg";
import algo from "../assets/move itmes/prices-algo.svg";
import deso from "../assets/move itmes/prices-deso.png";
import zeta from "../assets/move itmes/prices-zeta.png";
import doge from "../assets/move itmes/prices-doge.svg";
import aave from "../assets/move itmes/prices-aave.svg";
import bch from "../assets/move itmes/prices-bch.svg";
import xlm from "../assets/move itmes/prices-xlm.svg";
import usdt from "../assets/move itmes/prices-usdt.svg";
import pax from "../assets/move itmes/prices-pax.svg";
import stx from "../assets/move itmes/prices-stx.svg";
import dgld from "../assets/move itmes/prices-dgld.svg";

const row1 = [
    { name: "Bitcoin", logo: btc },
    { name: "Ethereum", logo: eth },
    { name: "Bitcoin Cash", logo: bch },
    { name: "Solana", logo: sol },
    { name: "Dogecoin", logo: doge },
    { name: "Tether", logo: usdt },
];

const row2 = [
    { name: "Polkadot", logo: dot },
    { name: "Litecoin", logo: algo },
    { name: "Aave", logo: aave },
    { name: "Stellar", logo: xlm },
    { name: "PAX", logo: pax },
    { name: "STX", logo: stx },
];

const row3 = [
    { name: "Algorand", logo: algo },
    { name: "DeSo", logo: deso },
    { name: "Zeta", logo: zeta },
    { name: "DGLD", logo: dgld },
    { name: "Tether", logo: usdt },
    { name: "Solana", logo: sol },
];

const CoinItem = ({ name, logo }: { name: string; logo: string }) => (
    <span className="flex items-center gap-2 px-4 whitespace-nowrap text-gray-700 text-xl">
        <img src={logo} alt={name} className="w-7 h-7 rounded-full object-contain" />
        {name}
    </span>
);

// Duplicated for seamless infinite loop
const MarqueeRow = ({ items, reverse }: { items: typeof row1; reverse?: boolean }) => (
    <div className="overflow-hidden w-full">
        <div
            className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        >
            {/* Duplicate twice for seamless loop */}
            {[...items, ...items, ...items].map((item, i) => (
                <CoinItem key={i} name={item.name} logo={item.logo} />
            ))}
        </div>
    </div>
);

const Section4 = () => {
    return (
        <section className="bg-white text-black  py-14 px-5 overflow-hidden">
            <div className="max-w-2xl mx-auto mb-10">
                <h2 className="text-[clamp(4rem,12vw,5rem)] font-bold leading-tight mb-4">
                    5700+<br />tradable<br />assets
                </h2>
                <p className=" text-2xl">
                    Our DeFi Wallet supports thousands of assets across multiple chains
                </p>
            </div>

            {/* Marquee rows */}
            <div className="flex flex-col gap-6">
                <MarqueeRow items={row1} />
                <MarqueeRow items={row2} reverse />
                <MarqueeRow items={row3} />
            </div>
        </section>
    );
};

export default Section4;
