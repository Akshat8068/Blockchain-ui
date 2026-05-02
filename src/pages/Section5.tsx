import { motion } from "framer-motion";
import bgSm from "../assets/download-app-bg-sm-v2.png";
import bgMd from "../assets/download-app-bg-md-v2.png";
import bgXl from "../assets/download-app-bg-xl-v2.png";
import appMockup from "../assets/download-app-v1.png";
import appleLogo from "../assets/appleicon.png";
import playLogo from "../assets/playstoreicon.png";
import appStore from "../assets/appStoreDownload.png";
import playstoreLogo from "../assets/playstoreDownload.png";

const StoreButtons = () => (
    <div className="flex items-center ">
        {/* <a href="#" className="flex items-center gap-2 border border-white/60 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors">
            <img src={appleLogo} alt="App Store" className="w-6 h-6 object-contain invert" />
            <div>
                <p className="text-[10px] text-white/60 leading-none">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
            </div>
        </a> */}
        {/* <img src={appStore} alt="App Store" className="w-36 h-12 object-fit invert" />
        <img src={playstoreLogo} alt="App Store" className="w-36 h-12 object-fit invert" />

         */}
        <a href="#" className="flex items-center gap-2 ">
            <img src={appStore} className="h-32 object-contain" />
        </a>
        <a href="#" className="flex items-center gap-2  ">
            <img src={playstoreLogo} className="h-40 object-contain" />
        </a>

    </div>
);

const Ratings = () => (
    <div className="flex flex-col gap-2 ">
        <div className="flex items-center gap-2 text-xl text-white">
            <img src={appleLogo} alt="Apple" className="w-4 h-4 object-contain invert" />
            <span>4.7 ★ on App Store 178K reviews</span>
        </div>
        <div className="flex items-center invert gap-2 text-xl text-white">
            <img src={playLogo} alt="Google Play" className="w-4 h-4 object-contain" />
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
                <div className="max-w-2xl  px-5 pt-14 pb-0">
                    <h2 className="text-[clamp(3rem,11vw,4.5rem)] font-bold leading-tight mb-5">
                        One of the world's most loved crypto apps
                    </h2>
                    <p className="text-white text-xl mb-8 max-w-sm">
                        Our powerful trading platform and integrated DeFi Wallet give you complete access to the future of finance
                    </p>
                    <Ratings />
                    <div ><StoreButtons /></div>
                    <div className="flex justify-center">
                        <img src={appMockup} alt="App screenshot" className="w-full object-contain" />
                    </div>
                </div>
            </div>

            {/* MD + LG — text centered top, mockup full width bottom */}
            <div className="hidden md:block xl:hidden" style={{ backgroundImage: `url(${bgMd})`, backgroundSize: "cover", backgroundPosition: "right top", backgroundRepeat: "no-repeat" }}>
                <div className="max-w-3xl  mx-auto px-2 pt-28 text-center">
                    <h2 className="text-5xl tracking-[-2px] lg:text-[52px] font-bold leading-tight mb-5">
                        One of the world's most<br/> loved crypto apps
                    </h2>
                    <p className="text-white text-[22px] mb-10 max-w-lg mx-auto">
                        Our powerful trading platform and integrated DeFi Wallet give you complete access to the future of finance
                    </p>
                    <div className="flex  items-center justify-center gap-2 ">
                        <div className="flex items-center gap-2 text-lg text-white">
                            <img src={appleLogo} alt="Apple" className="w-8 h-8 object-contain invert" />
                            <span>4.7 ★ on App Store 178K reviews</span>
                        </div>
                        <div className="flex items-center  text-lg text-white">
                            <img src={playLogo} alt="Google Play" className="w-10 h-8 invert object-contain" />
                            <span>10M+ downloads on Google Play</span>
                        </div>
                    </div>
                    <div className="flex justify-center "><StoreButtons /></div>
                </div>
                <div className="w-full flex justify-center">
                    <img src={appMockup} alt="App screenshot" className="md:w-[90%] w-full  object-contain" />
                </div>
            </div>
            <div
                className="hidden xl:block py-14"
                style={{
                    backgroundImage: `url(${bgXl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right top",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="max-w-7xl mx-auto px-16 grid grid-cols-2 items-center gap-16 pt-20">

                    {/* Left Content */}
                    <div className="px-8">
                        <h2 className="text-6xl 2xl:text-7xl font-bold leading-[1.1] tracking-[-0.02em] mb-6">
                            One of the world's most loved crypto apps
                        </h2>

                        <p className="text-white text-2xl leading-snug mb-10 max-w-lg">
                            Our powerful trading platform and integrated DeFi Wallet give you complete access to the future of finance
                        </p>

                        <Ratings />
                        <StoreButtons />
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-end items-end h-full">
                        <img
                            src={appMockup}
                            alt="App screenshot"
                            className="w-full max-w-md 2xl:max-w-lg object-contain"
                        />
                    </div>

                </div>
            </div>

        </motion.section>
    );
};

export default Section5;
