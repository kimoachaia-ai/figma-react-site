import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import '../i18n/index';
import i18n from '../i18n/index';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export function Root() {
  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.documentElement.style.fontFamily = '';
    }
  }, []);

  useEffect(() => {
    const handler = (lng: string) => {
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lng;
      localStorage.setItem('lang', lng);
      if (lng === 'ar') {
        document.documentElement.style.fontFamily = "'Cairo', sans-serif";
      } else {
        document.documentElement.style.fontFamily = '';
      }
    };
    i18n.on('languageChanged', handler);
    return () => i18n.off('languageChanged', handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0806]">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
