import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./components/common/Navbar"));

const Home = lazy(() => import("./pages/Home"));
const Section2 = lazy(() => import("./pages/Section2"));
const Section3 = lazy(() => import("./pages/Section3"));
const Section4 = lazy(() => import("./pages/Section4"));
const Section5 = lazy(() => import("./pages/Section5"));
const Section6 = lazy(() => import("./pages/Section6"));
const Section7 = lazy(() => import("./pages/Section7"));
const Section8 = lazy(() => import("./pages/Section8"));
const Section9 = lazy(() => import("./pages/Section9"));
const Section10 = lazy(() => import("./pages/Section10"));
const Section11 = lazy(() => import("./pages/Section11"));
const Section12 = lazy(() => import("./pages/Section12"));
const Section13 = lazy(() => import("./pages/Section13"));
const Footer = lazy(() => import("./components/common/Footer"));
const App = () => {
  return (
    <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
      <Navbar/>
      <Home />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Footer />
    </Suspense>
  );
};

export default App;
