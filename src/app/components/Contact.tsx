import { useState } from "react";
import { useSearchParams } from "react-router";
import { Phone, MapPin, Instagram, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import achaiaLogo from "../../imports/achaia_wood-logo__1_.png";

// English values used in URL params — labels translated in UI
const DOOR_TYPE_VALUES = [
  "Flush Doors",
  "Lacquer Doors",
  "Skin Doors",
  "PVC Doors",
  "Turkish Steel Doors",
  "Smart Solutions",
];

const FURNITURE_TYPE_VALUES = [
  "All",
  "Kitchens",
  "Dressing Rooms",
  "Cabinets",
  "TV Units",
  "Cladding",
];

const LUMBER_TYPE_VALUES = [
  "All",
  "Solid Lumber & Timber",
  "MDF & HDF Boards",
  "Particle Board & Chipboard",
  "Natural Wood Veneer",
  "Engineered Veneer",
  "Edge Banding",
];

// English category values used for URL params
const CATEGORY_VALUES = [
  "Doors",
  "Laminate Flooring",
  "Wood, Lumber & Veneer",
  "Furniture",
  "Custom Manufacturing",
  "Other",
];

const inputClass =
  "w-full px-5 py-4 rounded-xl bg-[#0A0806] border border-[#C4A57B]/20 focus:outline-none focus:ring-2 focus:ring-[#C4A57B] focus:border-transparent text-[#D4C5B0] transition-all";

const labelClass = "block text-[#8B7355] mb-2 text-sm font-medium";

export function Contact() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const initCategory = searchParams.get("category") ?? "";
  const initDoorType = searchParams.get("doorType") ?? "";
  const initSubType  = searchParams.get("subType")  ?? "";
  const initVeneer   = searchParams.get("veneer")   ?? "";
  const initProduct  = searchParams.get("product")  ?? "";

  // Map English URL param values to translated display labels
  const getCategoryLabel = (value: string) => {
    const map: Record<string, string> = {
      "Doors": t('contact.category_doors'),
      "Laminate Flooring": t('contact.category_flooring'),
      "Wood, Lumber & Veneer": t('contact.category_lumber'),
      "Furniture": t('contact.category_furniture'),
      "Custom Manufacturing": t('contact.category_custom'),
      "Other": t('contact.category_other'),
    };
    return map[value] ?? value;
  };

  const getDoorTypeLabel = (value: string) => {
    const map: Record<string, string> = {
      "Flush Doors": t('contact.door_flush'),
      "Lacquer Doors": t('contact.door_lacquer'),
      "Skin Doors": t('contact.door_skin'),
      "PVC Doors": t('contact.door_pvc'),
      "Turkish Steel Doors": t('contact.door_steel'),
      "Smart Solutions": t('contact.door_smart'),
    };
    return map[value] ?? value;
  };

  const getFurnitureTypeLabel = (value: string) => {
    const map: Record<string, string> = {
      "All": t('contact.furniture_all'),
      "Kitchens": t('contact.furniture_kitchens'),
      "Dressing Rooms": t('contact.furniture_dressing'),
      "Cabinets": t('contact.furniture_cabinets'),
      "TV Units": t('contact.furniture_tv'),
      "Cladding": t('contact.furniture_cladding'),
    };
    return map[value] ?? value;
  };

  const getLumberTypeLabel = (value: string) => {
    const map: Record<string, string> = {
      "All": t('contact.lumber_all'),
      "Solid Lumber & Timber": t('contact.lumber_solid'),
      "MDF & HDF Boards": t('contact.lumber_mdf'),
      "Particle Board & Chipboard": t('contact.lumber_particle'),
      "Natural Wood Veneer": t('contact.lumber_natural'),
      "Engineered Veneer": t('contact.lumber_engineered'),
      "Edge Banding": t('contact.lumber_edge'),
    };
    return map[value] ?? value;
  };

  const translateProductName = (name: string) => {
    const match = name.match(/^(.+?)\s+(\d+)$/);
    if (!match) return getCategoryLabel(name) || name;
    const [, prefix, num] = match;
    return `${t(`doors.name_${prefix.toLowerCase().replace(/\s+/g, '_')}`, prefix)} ${num}`;
  };

  const translateVeneer = (veneer: string) => {
    const translated = t(`doors.veneer_${veneer.toLowerCase().replace(/\s+/g, '_')}`, veneer);
    return t('contact.enquiry_veneer').replace('{veneer}', translated);
  };

  const buildInitialMessage = () => {
    if (!initProduct && !initCategory) return "";
    const subject = initProduct ? translateProductName(initProduct) : getCategoryLabel(initCategory);
    const details: string[] = [];
    if (initDoorType) details.push(getDoorTypeLabel(initDoorType));
    if (initSubType && initSubType !== "All") details.push(initSubType);
    if (initVeneer) details.push(translateVeneer(initVeneer));
    let msg = `${t('contact.enquiry_intro')} ${subject}`;
    if (details.length) msg += ` (${details.join("، ")})`;
    msg += ".";
    msg += t('contact.enquiry_additional');
    return msg;
  };

  const [name,     setName]     = useState("");
  const [phone,    setPhone]    = useState("");
  const [email,    setEmail]    = useState("");
  const [category, setCategory] = useState(initCategory);
  const [doorType, setDoorType] = useState(initDoorType);
  const [subType,  setSubType]  = useState(initSubType);
  const [message,  setMessage]  = useState(buildInitialMessage);
  const [sending,  setSending]  = useState(false);
  const [sent,     setSent]     = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@achaiawood.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Enquiry — ${category || "General"} | Achaia Wood`,
          _captcha: "false",
          _template: "table",
          name,
          phone,
          email,
          category: getCategoryLabel(category),
          ...(doorType  && { door_type:      getDoorTypeLabel(doorType) }),
          ...(subType && subType !== "All" && { sub_type: subType }),
          message,
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSent(true);
        toast.success(t('contact.toast_success'));
      } else {
        throw new Error("FormSubmit returned failure");
      }
    } catch {
      toast.error(t('contact.toast_error'));
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0806] to-[#1A120F] relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C4A57B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
            {t('contact.badge')}
          </span>
          <h2
            className="text-5xl leading-tight text-[#D4C5B0] mt-4 mb-6"
            style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
          >
            {t('contact.title')}
          </h2>
          <p className="text-[#8B7355] text-lg leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-5 bg-[#1A120F] rounded-2xl p-6 shadow-lg border border-[#C4A57B]/20">
                <div className="size-14 bg-[#C4A57B]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A57B]/20">
                  <Phone className="size-6 text-[#C4A57B]" />
                </div>
                <div>
                  <p className="text-sm text-[#8B7355] mb-1">{t('contact.whatsapp')}</p>
                  <p className="text-[#D4C5B0] text-xl select-all cursor-text" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>
                    +20 1271242220 <br />+20 1271242221
                  </p>
                </div>
              </div>

              <a href="https://www.facebook.com/AchaiaWood" target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-5 bg-[#1A120F] rounded-2xl p-6 shadow-lg hover:shadow-[#C4A57B]/10 transition-all group border border-[#C4A57B]/20">
                <div className="size-14 bg-[#C4A57B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C4A57B] transition-colors flex-shrink-0 border border-[#C4A57B]/20">
                  <svg className="size-6 text-[#C4A57B] group-hover:text-[#0A0806] transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#8B7355] mb-1">{t('contact.facebook')}</p>
                  <p className="text-[#D4C5B0] text-xl" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>/AchaiaWood</p>
                </div>
              </a>

              <a href="https://www.instagram.com/achaiawood/" target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-5 bg-[#1A120F] rounded-2xl p-6 shadow-lg hover:shadow-[#C4A57B]/10 transition-all group border border-[#C4A57B]/20">
                <div className="size-14 bg-[#C4A57B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C4A57B] transition-colors flex-shrink-0 border border-[#C4A57B]/20">
                  <Instagram className="size-6 text-[#C4A57B] group-hover:text-[#0A0806] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#8B7355] mb-1">{t('contact.instagram')}</p>
                  <p className="text-[#D4C5B0] text-xl" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>@achaiawood</p>
                </div>
              </a>
            </div>

            <a href="https://maps.app.goo.gl/uQvk5nmmGU2pHfNb8" target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-5 bg-[#1A120F] rounded-2xl p-6 shadow-lg border border-[#C4A57B]/20 hover:border-[#C4A57B]/50 transition-colors duration-300">
              <div className="size-14 bg-[#C4A57B]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A57B]/20">
                <MapPin className="size-6 text-[#C4A57B]" />
              </div>
              <div>
                <p className="text-sm text-[#8B7355] mb-1">{t('contact.location')}</p>
                <p className="text-[#D4C5B0] text-lg" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>
                  Egypt<br />(Trading & Manufacturing)
                </p>
                <p className="text-[#C4A57B] text-xs mt-1">{t('contact.maps')}</p>
              </div>
            </a>

            <div>
              <img src={achaiaLogo} alt="Achaia Wood Logo" className="w-[300px] h-[300px] object-contain rounded-full mx-auto" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-[#1A120F] rounded-3xl p-10 md:p-12 shadow-xl border border-[#C4A57B]/20">
            <h3 className="text-3xl text-[#D4C5B0] mb-8" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>
              {t('contact.form_title')}
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>{t('contact.name_required')}</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>{t('contact.phone_required')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>{t('contact.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Product Category — value stays English for URL params, label is translated */}
              <div>
                <label className={labelClass}>{t('contact.category')}</label>
                <select
                  value={category}
                  onChange={(e) => { setCategory(e.target.value); setDoorType(""); setSubType(""); }}
                  className={inputClass}
                  required
                >
                  <option value="" disabled>{t('contact.category_placeholder')}</option>
                  {CATEGORY_VALUES.map((val) => (
                    <option key={val} value={val}>{getCategoryLabel(val)}</option>
                  ))}
                </select>
              </div>

              {/* Door Type — only visible when Doors is selected */}
              {category === "Doors" && (
                <div>
                  <label className={labelClass}>{t('contact.door_type')}</label>
                  <select
                    value={doorType}
                    onChange={(e) => setDoorType(e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="" disabled>{t('contact.door_type_placeholder')}</option>
                    {DOOR_TYPE_VALUES.map((val) => (
                      <option key={val} value={val}>{getDoorTypeLabel(val)}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Furniture Type — only visible when Furniture is selected */}
              {category === "Furniture" && (
                <div>
                  <label className={labelClass}>{t('contact.furniture_type')}</label>
                  <select
                    value={subType}
                    onChange={(e) => setSubType(e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="" disabled>{t('contact.furniture_type_placeholder')}</option>
                    {FURNITURE_TYPE_VALUES.map((val) => (
                      <option key={val} value={val}>{getFurnitureTypeLabel(val)}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Material Type — only visible when Wood, Lumber & Veneer is selected */}
              {category === "Wood, Lumber & Veneer" && (
                <div>
                  <label className={labelClass}>{t('contact.material_type')}</label>
                  <select
                    value={subType}
                    onChange={(e) => setSubType(e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="" disabled>{t('contact.material_type_placeholder')}</option>
                    {LUMBER_TYPE_VALUES.map((val) => (
                      <option key={val} value={val}>{getLumberTypeLabel(val)}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Project Details */}
              <div>
                <label className={labelClass}>{t('contact.details')}</label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder={t('contact.details_placeholder')}
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="w-full flex items-center justify-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/20 hover:-translate-y-1 duration-300 text-lg font-medium disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {sent ? (
                  <>
                    <span>{t('contact.sent')}</span>
                    <CheckCircle2 className="size-5" />
                  </>
                ) : sending ? (
                  <>
                    <span>{t('contact.sending')}</span>
                    <Loader2 className="size-5 animate-spin" />
                  </>
                ) : (
                  <>
                    <span>{t('contact.send')}</span>
                    <Send className="size-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-[#8B7355] text-center">{t('contact.response')}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
