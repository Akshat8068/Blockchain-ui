import { useState } from "react";
import { X } from "lucide-react";
import logo from "../../assets/poppyBlockchainLogo.svg";

const navLinks = ["Personal", "Institutional", "Explorer", "Company"];

// Hamburger icon matching blockchain.com style (two lines, unequal)
const HamburgerIcon = () => (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <line x1="0" y1="2" x2="22" y2="2" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4" y1="14" x2="22" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-full bg-black  top-0 z-50">
            <div className="max-w-7xl mx-auto px-5 md:px-10 h-17 flex items-center">

                {/* Logo */}
                <a href="/" className="shrink-0">
                    <img src={logo} alt="Blockchain" className="h-6 w-auto" />
                </a>

                {/* Nav links — desktop only */}
                <ul className="hidden md:flex items-center gap-8 ml-8">
                    {navLinks.map((label) => (
                        <li key={label}>
                            <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors whitespace-nowrap">
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <span className="text-white text-lg tracking-widest">···</span>
                    </li>
                </ul>

                <div className="flex-1" />

                {/* Desktop right actions */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="#" className="border border-white/60 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                        Log In
                    </a>
                    <a href="#" className="bg-[#e8174a] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#c9143f] transition-colors">
                        Sign up
                    </a>
                </div>

                {/* Mobile right: Sign up + hamburger */}
                <div className="flex md:hidden items-center gap-3">
                    <a href="#" className="bg-[#e8174a] text-white text-sm font-semibold px-5 py-3 rounded-2xl hover:bg-[#c9143f] transition-colors">
                        Sign up
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-white p-1"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <HamburgerIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5">
                    {navLinks.map((label) => (
                        <a
                            key={label}
                            href="#"
                            className="text-white/80 hover:text-white text-base font-medium"
                            onClick={() => setMobileOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <a href="#" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setMobileOpen(false)}>
                        Log In
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
