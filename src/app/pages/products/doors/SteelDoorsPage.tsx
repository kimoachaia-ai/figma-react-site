import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DoorPageShell, DoorGrid } from "./DoorCard";
import type { DoorProduct } from "./DoorCard";

const products: DoorProduct[] = [
  {
    id: "steel-1",
    name: "Steel Door 1",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1-AZEZ2ne70GhixrZgo4no6pBkBtomuMR", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-4",
    name: "Steel Door 4",
    variants: [{ image: "https://lh3.googleusercontent.com/d/17vzY2unwbBV-4cntAqRtNtzGn1TXZmP-", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-5",
    name: "Steel Door 5",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1FIV9lOkphOxmue8ZwcyamiEacUAW_LmX", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-8",
    name: "Steel Door 8",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1IkOS4xyk9udu4AEpcckchRWj-5_mCPQN", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-9",
    name: "Steel Door 9",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1Jja7OPBAInA5WI_bQ8pHxQPqg6Nlhdwa", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-10",
    name: "Steel Door 10",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1JuUDIGJORtS0IHfky_y47Exa8WS_RJcI", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-12",
    name: "Steel Door 12",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1UGT2TMVIYWsbjnOLWtmsiGmSkTRiI1UT", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-14",
    name: "Steel Door 14",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1_sYxlH59DM0suKgi_u28elHkt0OiYGZ8", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-16",
    name: "Steel Door 16",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1d6VjHLC2qVSkQ03fNr1Az2ayNeNua18E", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-17",
    name: "Steel Door 17",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1hMG4E1NtDtmlUrjiy6wxK3-S0MScHcyu", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-18",
    name: "Steel Door 18",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1jMxkdDlrvjvYOv23Y-uQjxNbLZ-oh92V", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-20",
    name: "Steel Door 20",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1lLEqmMFpZ2abfGK1gcJf2uc31H1lQBBG", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  },
  {
    id: "steel-22",
    name: "Steel Door 22",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1q9pS0OodL0QFJrYiyK5z1OvCDG77nWG9", color: "" }],
    description: "",
    specs: ["Steel Shell", "Insulated Core", "Multi-point Lock"],
  }
];

export function SteelDoorsPage() {
  const { t } = useTranslation();
  return (
    <DoorPageShell
      icon={Shield}
      title={t('doors.steel_title')}
      subtitle={t('doors.steel_page_sub')}
      description={t('doors.steel_page_desc')}
      doorType="Turkish Steel Doors"
    >
      <DoorGrid products={products} doorType="Turkish Steel Doors" />
    </DoorPageShell>
  );
}
