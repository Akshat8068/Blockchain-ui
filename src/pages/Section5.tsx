import { motion } from "framer-motion";
import bgSm from "../assets/download-app-bg-sm-v2.png";
import bgMd from "../assets/download-app-bg-md-v2.png";
import bgXl from "../assets/download-app-bg-xl-v2.png";
import appMockup from "../assets/download-app-v1.png";
import appleLogo from "../assets/Apple.png";
import playstoreLogo from "../assets/playstore.png";

const StoreButtons = () => (
    <div className="flex gap-3">
        {/* <a href="#" className="flex items-center gap-2 border border-white/60 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors">
            <img src={appleLogo} alt="App Store" className="w-6 h-6 object-contain invert" />
            <div>
                <p className="text-[10px] text-white/60 leading-none">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
            </div>
        </a> */}
        <img src={appleLogo} alt="App Store" className="w-28 h-28 object-contain invert" />
        <img src={appleLogo} alt="App Store" className="w-30 h-30 object-contain invert" />

        
    </div>
);

const Ratings = () => (
    <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-lg text-white">
            <img src={appleLogo} alt="Apple" className="w-4 h-4 object-contain invert" />
            <span>4.7 ★ on App Store 178K reviews</span>
        </div>
        <div className="flex items-center gap-2 text-lg text-white">
            <img src={playstoreLogo} alt="Google Play" className="w-4 h-4 object-contain" />
            <span>10M+ downloads on Google Play</span>
        </div>
    </div>
);

const Section5 = () => {
    return (
        <motion.section className="relative bg-black text-white overflow-hidden"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            {/* MOBILE */}
            <div className="md:hidden" style={{ backgroundImage: `url(${bgSm})`, backgroundSize: "cover", backgroundPosition: "right top", backgroundRepeat: "no-repeat" }}>
                <div className="max-w-2xl mx-auto px-5 pt-14 pb-0">
                    <h2 className="text-[clamp(3rem,11vw,4.5rem)] font-bold leading-tight mb-5">
                        One of the world's most loved crypto apps
                    </h2>
                    <p className="text-white text-2xl mb-8 max-w-sm">
                        Our powerful trading platform and integrated DeFi Wallet give you complete access to the future of finance
                    </p>
                    <Ratings />
                    <div className="mb-12"><StoreButtons /></div>
                    <div className="flex justify-center">
                        <img src={appMockup} alt="App screenshot" className="w-full object-contain" />
                    </div>
                </div>
            </div>

            {/* MD — text centered top, mockup centered bottom */}
            <div className="hidden md:block lg:hidden" style={{ backgroundImage: `url(${bgMd})`, backgroundSize: "cover", backgroundPosition: "right top", backgroundRepeat: "no-repeat" }}>
                <div className="max-w-3xl mx-auto px-8 pt-16 pb-0 text-center">
                    <h2 className="text-5xl font-bold leading-tight mb-5">
                        One of the world's most loved crypto apps
                    </h2>
                    <p className="text-white text-xl mb-8 max-w-lg mx-auto">
                        Our powerful trading platform and integrated DeFi Wallet give you complete access to the future of finance
                    </p>
                    <div className="flex flex-col items-center gap-2 mb-8">
                        <div className="flex items-center gap-2 text-lg text-white">
                            <img src={appleLogo} alt="Apple" className="w-4 h-4 object-contain invert" />
                            <span>4.7 ★ on App Store 178K reviews</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg text-white">
                            <img src={playstoreLogo} alt="Google Play" className="w-4 h-4 object-contain" />
                            <span>10M+ downloads on Google Play</span>
                        </div>
                    </div>
                    <div className="flex justify-center mb-12"><StoreButtons /></div>
                    <div className="flex justify-center">
                        <img src={appMockup} alt="App screenshot" className="w-2/3 object-contain" />
                    </div>
                </div>
            </div>

            {/* LG — text left, mockup right */}
            <div className="hidden py-10 lg:block" style={{ backgroundImage: `url(${bgXl})`, backgroundSize: "cover", backgroundPosition: "right top", backgroundRepeat: "no-repeat" }}>
                <div className="max-w-6xl mx-auto px-10 grid grid-cols-2 items-center gap-10 pt-16 pb-0">
                    <div className="px-5">
                        <h2 className="text-5xl xl:text-6xl font-bold leading-tight mb-5">
                            One of the world's most loved crypto apps
                        </h2>
                        <p className="text-white text-xl mb-8 max-w-md">
                            Our powerful trading platform and integrated DeFi Wallet give you complete access to the future of finance
                        </p>
                        <Ratings />
                        <StoreButtons />
                    </div>
                    <div className="flex justify-end mt-20 items-end bottom-0 h-full">
                        <img src={appMockup} alt="App screenshot" className="w-full  max-w-sm object-contain" />
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Section5;
