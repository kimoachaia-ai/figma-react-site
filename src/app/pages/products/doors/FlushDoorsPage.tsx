import { Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DoorPageShell, DoorGrid } from "./DoorCard";
import type { DoorProduct } from "./DoorCard";

// ── VENEER KEY ───────────────────────────────────────────────────────────────
// Set `tag` on each door to one of: "Red Oak" | "Walnut"
// Leave as "" if not yet assigned — it will appear under "All" but not in filters.
// ─────────────────────────────────────────────────────────────────────────────

const products: DoorProduct[] = [
  {
    id: "flush-1",
    name: "Flush Door 1",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/17lI_PyLwLGRXzuem92-iu1EmPeY_vwVi", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  },
    {
    id: "flush-2",
    name: "Flush Door 2",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/1yr3QsmVXWv-DcO8TSO_8CfmGjWJhANXJ", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  },
  {
    id: "flush-3",
    name: "Flush Door 3",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/1Cy92PnK0ONZbbK9d7cjt3phUvxSKhCb1", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  },
  {
    id: "flush-4",
    name: "Flush Door 4",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/1fi9xSFmP4FUqCDDZZQccBdNV_vvHUaBd", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  },
  {
    id: "flush-5",
    name: "Flush Door 5",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/1jOx-vj08bUaVPrt0sZVm1XFNuadjg-PE", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  },
  {
    id: "flush-6",
    name: "Flush Door 6",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/1lOU6D53Xq4Hjv1s7DstRcx0gOHIaktRa", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  },
  {
    id: "flush-7",
    name: "Flush Door 7",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/1pPt31RtNmRGr0AgtaMTEeY2f1KV3g_HY", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  },
  {
    id: "flush-8",
    name: "Flush Door 8",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/1pZLvNvZkOfPmvDQpWak7_CdHXzklSLHM", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  },
  {
    id: "flush-9",
    name: "Flush Door 9",
    tag: "", // TODO: "Red Oak" or "Walnut"
    variants: [{ image: "https://lh3.googleusercontent.com/d/1ti7P-fNb6hM1x50cRr_jlyujdwwkxLxC", color: "" }],
    description: "",
    specs: ["Honeycomb Core", "Wood Veneer"],
    veneerOptions: ["Red Oak", "Walnut"],
  }
];

export function FlushDoorsPage() {
  const { t } = useTranslation();
  return (
    <DoorPageShell
      icon={Layers}
      title={t('doors.flush_title')}
      subtitle={t('doors.flush_page_sub')}
      description={t('doors.flush_page_desc')}
      doorType="Flush Doors"
    >
      <DoorGrid products={products} doorType="Flush Doors" />
    </DoorPageShell>
  );
}
