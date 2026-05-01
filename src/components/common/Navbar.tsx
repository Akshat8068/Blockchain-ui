import { useState } from "react";
import { X, Menu } from "lucide-react";
import logo from "../../assets/poppyBlockchainLogo.svg";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-full bg-black  top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 md:px-5 h-16 flex items-center">
                <a href="/" className="shrink-0">
                    <img src={logo} alt="Blockchain" className="h-6 w-auto" />
                </a>

                <div className="flex-1" />

                <div className="flex items-center gap-3">
                    <a href="#" className="bg-[#e8174a] text-white text-sm font-semibold px-5 py-2 rounded-2xl hover:bg-[#c9143f] transition-colors">Sign up</a>
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-1" aria-label="Toggle menu">
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5">
                    {["Personal", "Institutional", "Explorer", "Company"].map((label) => (
                        <a key={label} href="#" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setMobileOpen(false)}>{label}</a>
                    ))}
                    <a href="#" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setMobileOpen(false)}>Log In</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
