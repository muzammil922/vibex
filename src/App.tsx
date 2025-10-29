import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CSSDotBackground } from "./components/ui/css-dot-background";
import { ThemeProvider } from "./components/ui/theme-provider";
import { NavBar } from "./components/ui/tubelight-navbar";
import { StickyContact } from "./components/ui/sticky-contact";
import { Footer } from "./components/ui/footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Contact from "./pages/Contact";
import { Home, User, Briefcase, Mail } from "lucide-react";

// ScrollToTop component to handle page navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Also ensure immediate scroll to top for instant navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null;
};

function App() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: Mail }
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vibex-theme">
      <Router basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen text-white relative flex flex-col">
          {/* CSS Dot Background */}
          <CSSDotBackground />
          
          {/* Tubelight Navigation Bar */}
          <NavBar items={navItems} />
          
          {/* ScrollToTop component */}
          <ScrollToTop />
          
          <div className="flex-1">
            <Routes>
                  <Route path="/" element={<HomePage />} />
          
          {/* About Page */}
          <Route path="/about" element={
            <main className="relative z-10">
              <About />
            </main>
          } />
          
          <Route path="/services" element={
            <main className="relative z-10">
              <ServicesPage />
            </main>
          } />
          
          <Route path="/contact" element={
            <main className="relative z-10">
              <Contact />
            </main>
          } />
            </Routes>
          </div>
          
          {/* Footer */}
          <Footer />
          
          {/* Sticky Contact */}
          <StickyContact />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;