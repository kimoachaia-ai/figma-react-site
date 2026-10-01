import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const toggle = () => i18n.changeLanguage(isAr ? 'en' : 'ar');

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 bg-[#1A120F] border border-[#C4A57B]/25 hover:border-[#C4A57B]/60 rounded-full px-3 py-1.5 transition-all duration-200 group"
      aria-label="Switch language"
    >
      <span className={`text-xs font-medium transition-colors duration-200 ${!isAr ? 'text-[#C4A57B]' : 'text-[#8B7355]'}`}>EN</span>
      <span className="text-[#C4A57B]/30 text-xs">|</span>
      <span className={`text-xs font-medium transition-colors duration-200 ${isAr ? 'text-[#C4A57B]' : 'text-[#8B7355]'}`}>ع</span>
    </button>
  );
}
