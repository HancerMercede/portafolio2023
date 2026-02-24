import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navigation.css";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", icon: "H" },
    { id: "about", label: "About", icon: "A" },
    { id: "tech-stack", label: "Tech Stack", icon: "T" },
    { id: "experience", label: "Experience", icon: "E" },
    { id: "projects", label: "Projects", icon: "P" },
    { id: "blog", label: "Blog", icon: "B", isRoute: true },
    { id: "contact", label: "Contact", icon: "C" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      if (location.pathname !== '/') return;

      const sections = navItems.filter(item => !item.isRoute).map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems.filter(item => !item.isRoute)[i].id);
          break;
        }
      }
    };

    if (location.pathname !== '/') {
      setActiveSection('');
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const navigateToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const isBlogPage = location.pathname.startsWith('/blog');

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""} ${isBlogPage ? "blog-page" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-text">HM</Link>
        </div>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.isRoute ? (
                <Link
                  to="/blog"
                  className={`nav-link ${location.pathname === '/blog' ? "active" : ""}`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {location.pathname === '/blog' && (
                    <motion.div
                      className="active-underline"
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ) : (
                <button
                  onClick={() => navigateToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>

                  {activeSection === item.id && !isBlogPage && (
                    <motion.div
                      className="active-underline"
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
