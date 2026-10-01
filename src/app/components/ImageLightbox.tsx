import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
  altText?: string;
}

export function ImageLightbox({ images, index, onClose, onNavigate, altText = "" }: Props) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const total = images.length;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && total > 1) onNavigate(isRtl ? (index - 1 + total) % total : (index + 1) % total);
      if (e.key === "ArrowLeft"  && total > 1) onNavigate(isRtl ? (index + 1) % total : (index - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate, index, total, isRtl]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || total <= 1) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const goNext = isRtl ? delta > 0 : delta < 0;
    if (Math.abs(delta) > 40) onNavigate(goNext ? (index + 1) % total : (index - 1 + total) % total);
    touchStartX.current = null;
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 size-10 bg-[#1A120F] hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center border border-[#C4A57B]/30 transition-all duration-200 z-10"
      >
        <X className="size-5" />
      </button>

      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(isRtl ? (index + 1) % total : (index - 1 + total) % total); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 size-11 bg-[#1A120F]/90 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center border border-[#C4A57B]/30 transition-all duration-200 z-10"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}

      <img
        src={images[index]}
        alt={altText}
        className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(isRtl ? (index - 1 + total) % total : (index + 1) % total); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 size-11 bg-[#1A120F]/90 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center border border-[#C4A57B]/30 transition-all duration-200 z-10"
        >
          <ChevronRight className="size-5" />
        </button>
      )}

      {total > 1 && (
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#C4A57B] text-sm bg-[#0A0806]/70 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {index + 1} / {total}
        </span>
      )}
    </div>,
    document.body
  );
}
