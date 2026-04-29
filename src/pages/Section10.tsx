import vyLogo from "../assets/trusted/vy-v2.svg";
import gvLogo from "../assets/trusted/gv-v2.svg";
import lakeStarLogo from "../assets/trusted/lake-star-v2.svg";
import lightspeedLogo from "../assets/trusted/light-speed-v2.svg";
import kyleBassLogo from "../assets/trusted/kyle-bass-v2.svg";
import dstLogo from "../assets/trusted/dst_logo-v2.png";
import baillieGiffordLogo from "../assets/trusted/baillie-gifford-v2.svg";

const logos = [
    { src: vyLogo, alt: "VY Capital" },
    { src: gvLogo, alt: "GV" },
    { src: lakeStarLogo, alt: "Lake Star" },
    { src: lightspeedLogo, alt: "Lightspeed" },
    { src: kyleBassLogo, alt: "Kyle Bass" },
    { src: dstLogo, alt: "DST Global Partners" },
    { src: baillieGiffordLogo, alt: "Baillie Gifford" }
];

const Section10 = () => {
    return (
        <section className="bg-white text-black py-10 px-5 ">
            <div className="max-w-2xl mx-auto">

                <h2 className="text-[clamp(3.5rem,10vw,5rem)] font-bold leading-tight mb-12">
                    Trusted<br />by leading<br />investors
                </h2>

                {/* 2-col grid for first 6 */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-10">
                    {logos.map((logo) => (
                        <div key={logo.alt} className="flex items-center justify-center">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-15 object-contain"
                            />
                        </div>
                    ))}
                </div>

                

            </div>
        </section>
    );
};

export default Section10;
