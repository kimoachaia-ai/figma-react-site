import { DoorOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DoorPageShell, DoorGrid } from "./DoorCard";
import type { DoorProduct } from "./DoorCard";

const products: DoorProduct[] = [
  {
    id: "skin-1",
    name: "Skin Door 1",
    variants: [{ image: "https://lh3.googleusercontent.com/d/18e8acJGyDAMfXDFAJKX7FNhVTxSQNwS3", color: "" }],
    description: "",
    specs: ["Honeycomb Core","HDF Skin"],
  },
  {
    id: "skin-2",
    name: "Skin Door 2",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1TkpOEa8yRzvBOAOqLCBKXfZGGLY_t0VL", color: "" }],
    description: "",
    specs: ["Honeycomb Core","HDF Skin"],
  },
  {
    id: "skin-3",
    name: "Skin Door 3",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1diIoBsG-RIGRMt80w8aLCOv_fIN-7Dif", color: "" }],
    description: "",
    specs: ["Honeycomb Core","HDF Skin"],
  },
  {
    id: "skin-4",
    name: "Skin Door 4",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1lHMzNLa3g0M7EMmcRuOJE9ZsaX4MIbe9", color: "" }],
    description: "",
    specs: ["Honeycomb Core","HDF Skin"],
  },
  {
    id: "skin-5",
    name: "Skin Door 5",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1myYHV9AqIUjFoBPflT5C5pS-JxjV9d0i", color: "" }],
    description: "",
    specs: ["Honeycomb Core","HDF Skin"],
  },
  {
    id: "skin-6",
    name: "Skin Door 6",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1nFzsKHwtccaHwOBzrbIvwg-gZTv61KMc", color: "" }],
    description: "",
    specs: ["Honeycomb Core","HDF Skin"],
  },
  {
    id: "skin-7",
    name: "Skin Door 7",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1yPSsvxJ3YCusZ0hrTdxl_gLNU1-vYRK4", color: "" }],
    description: "",
    specs: ["Honeycomb Core","HDF Skin"],
  },
];

export function SkinDoorsPage() {
  const { t } = useTranslation();
  return (
    <DoorPageShell
      icon={DoorOpen}
      title={t('doors.skin_title')}
      subtitle={t('doors.skin_page_sub')}
      description={t('doors.skin_page_desc')}
      doorType="Skin Doors"
    >
      <DoorGrid products={products} doorType="Skin Doors" />
    </DoorPageShell>
  );
}
