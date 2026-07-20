import { Layers } from "lucide-react";
import { ProductCatalogPage } from "../../components/ProductCatalogPage";
import type { ProductItem } from "../../components/ProductCatalogPage";

// VarioClick Chevron
import vc_chev_1617 from "../../../imports/flooring/VarioClick/chevron/1617 (1).jpg";
import vc_chev_2021 from "../../../imports/flooring/VarioClick/chevron/2021 c (2).jpg";
import vc_chev_2223 from "../../../imports/flooring/VarioClick/chevron/2223 c (1).jpg";
import vc_chev_19C from "../../../imports/flooring/VarioClick/chevron/V_19C (2).jpg";

// VarioClick Standard
import vc_std_26 from "../../../imports/flooring/VarioClick/standard/26-1.jpg";
import vc_std_27 from "../../../imports/flooring/VarioClick/standard/27.jpg";
import vc_std_28 from "../../../imports/flooring/VarioClick/standard/28.jpg";
import vc_std_336 from "../../../imports/flooring/VarioClick/standard/V_336 (2).jpg";
import vc_std_645 from "../../../imports/flooring/VarioClick/standard/V_645 (2).jpg";
import vc_std_836 from "../../../imports/flooring/VarioClick/standard/V_836 (2).jpg";

// TerraClick 8mm
import tc8mm_20A from "../../../imports/flooring/TerraClick/8mm/1T_20A.jpg";
import tc8mm_643 from "../../../imports/flooring/TerraClick/8mm/643.jpg";
import tc8mm_719 from "../../../imports/flooring/TerraClick/8mm/719.jpg";
import tc8mm_25A from "../../../imports/flooring/TerraClick/8mm/T_25A (2).jpg";
import tc8mm_29A from "../../../imports/flooring/TerraClick/8mm/T_29A (2).jpg";
import tc8mm_324 from "../../../imports/flooring/TerraClick/8mm/T_324 (2).jpg";
import tc8mm_62B from "../../../imports/flooring/TerraClick/8mm/T_62B (2).jpg";
import tc8mm_633 from "../../../imports/flooring/TerraClick/8mm/T_633-1.jpg";
import tc8mm_741 from "../../../imports/flooring/TerraClick/8mm/T_741 (2).jpg";

// TerraClick 7mm
import tc7mm_30A from "../../../imports/flooring/TerraClick/7mm/30A (1).jpg";
import tc7mm_31A from "../../../imports/flooring/TerraClick/7mm/31A (2).jpg";
import tc7mm_32A from "../../../imports/flooring/TerraClick/7mm/32A (1).jpg";
import tc7mm_33A from "../../../imports/flooring/TerraClick/7mm/33A (2).jpg";
import tc7mm_34A from "../../../imports/flooring/TerraClick/7mm/34A (2).jpg";
import tc7mm_60B from "../../../imports/flooring/TerraClick/7mm/60B (2).jpg";
import tc7mm_63B from "../../../imports/flooring/TerraClick/7mm/63B.jpg";

// Each variant = one color of the product line. Replace images with real imports as you go.
const products: ProductItem[] = [
  // AGT
  {
    id: "agt-corvina",
    name: "AGT Corvina",
    brand: "AGT",
    variants: [
      { image: "https://www.agtwood.com/medium/Product/Image/40f5c14a-e6bc-423f-adbb-2838ff6dc135", color: "Anita (801)" },
      { image: "https://www.agtwood.com/medium/Product/Image/7e0a56a3-c815-40a2-853f-e65e8b86f817", color: "Kaleo (802)" },
      { image: "https://www.agtwood.com/medium/Product/Image/f60c579a-6c3f-4131-a0eb-53e2800e255a", color: "Pigato (803)" },
      { image: "https://www.agtwood.com/medium/Product/Image/a074db4f-21ca-4a8d-af56-9885c6020688", color: "Albana (804)" },
      { image: "https://www.agtwood.com/medium/Product/Image/b8a9c476-f425-479d-9cde-0f2613c9d0d1", color: "Molette (805)" },
      { image: "https://www.agtwood.com/medium/Product/Image/b2a9fb72-506a-40a0-81cd-94dd29c36b48", color: "Perle (806)" },
      { image: "https://www.agtwood.com/medium/Product/Image/bd8d330b-7ab6-45d2-b2ed-4104536fd646", color: "Astera (807)" },
      { image: "https://www.agtwood.com/medium/Product/Image/63a1bed2-ac5a-47c1-96b1-6bdfa20a5aa9", color: "Vega (808)" },
      { image: "https://www.agtwood.com/medium/Product/Image/21a0cc3a-8d9e-4a9e-a9d8-ca7f7f8a78ee", color: "Faba (809)" },
    ],
    description: "The AGT Corvina Collection merges modern craftsmanship with natural wood aesthetics, offering an elegant, highly durable design that elevates any home interior.",
    specs: ["7.5mm", "AC3 Resistance (31)", "HDF Core", "Turkish Made"],
  },
  {
    id: "agt-bella-neo",
    name: "AGT Bella Neo",
    brand: "AGT",
    variants: [
      { image: "https://www.agtwood.com/medium/Product/Image/02c8aa73-512f-4706-b6d7-7daaa6bb1ccc", color: "Lilies (101)" },
      { image: "https://www.agtwood.com/medium/Product/Image/34e909be-13c9-4810-a363-da2d8766ed1a", color: "Acacia (103)" },
      { image: "https://www.agtwood.com/medium/Product/Image/4ffdabcf-c0bb-47e2-8053-283b4b0c82b2", color: "Freesia (105)" },
      { image: "https://www.agtwood.com/medium/Product/Image/643bea50-b3ca-4460-a55f-c5d9837e0de4", color: "Daphne (108)" },
      { image: "https://www.agtwood.com/medium/Product/Image/877eefd6-3dd0-4913-9f02-d9ca273c3f58", color: "Gardenia (109)" },
      { image: "https://www.agtwood.com/medium/Product/Image/921a2191-af59-4024-aee1-8a87f605f035", color: "Yucca (113)" },
    ],
    description: "The AGT Bella Neo Collection offers a nature inspired design that refreshes the atmosphere of any home or workplace.",
    specs: ["8mm", "AC3 Resistance (31)", "HDF Core", "Turkish Made"],
  },
  {
    id: "agt-natura-select",
    name: "AGT Natura Select",
    brand: "AGT",
    variants: [
      { image: "https://www.agtwood.com/medium/Product/Image/d33a192f-0d02-4d98-a977-492036a90b29", color: "Shiraz Oak (200)" },
      { image: "https://www.agtwood.com/medium/Product/Image/392c970f-c9a2-45f9-90e8-abc61580f97d", color: "Natura Oak (204)" },
      { image: "https://www.agtwood.com/medium/Product/Image/1c103638-0e33-4141-902d-752f94d972d3", color: "Olympus Oak (208)" },
      { image: "https://www.agtwood.com/medium/Product/Image/a284194c-aa5f-4479-a017-3bb6006d0563", color: "Teos (230)" },
    ],
    description: "Inspired by nature, the AGT Natura Select Collection combines sophisticated natural textures and warm tones with lasting durability to create a peaceful atmosphere in your home or office.",
    specs: ["8mm", "AC4 Resistance (32)", "HDF Core", "Turkish Made"],
  },
  {
    id: "agt-effect",
    name: "AGT Effect",
    brand: "AGT",
    variants: [
      { image: "https://www.agtwood.com/medium/Product/Image/e4d6406c-4aa6-48fb-8d37-728c0515e77c", color: "Toros (901)" },
      { image: "https://www.agtwood.com/medium/Product/Image/f0532fd5-fd44-4895-bf83-c8e2305bde05", color: "Tibet (902)" },
      { image: "https://www.agtwood.com/medium/Product/Image/2409b06e-4586-4e7b-9c69-83157c32d8fd", color: "Everest (903)" },
      { image: "https://www.agtwood.com/medium/Product/Image/f81c66e1-ea69-4d2a-9869-a50968bbd045", color: "ALP (904)" },
      { image: "https://www.agtwood.com/medium/Product/Image/ee5db51b-e107-432b-a344-1604b5324647", color: "Fuji (905)" },
      { image: "https://www.agtwood.com/medium/Product/Image/d8c25f8c-9852-497b-a4e0-a3e1f1ed1320", color: "Pamir (906)" },
      { image: "https://www.agtwood.com/medium/Product/Image/8b9516ad-aae4-4c2f-9701-f81b9937c395", color: "Ural (907)" },
      { image: "https://www.agtwood.com/medium/Product/Image/3786dc7f-d02e-4ab8-a834-4bbdd0f92a40", color: "Altay (908)" },
      { image: "https://www.agtwood.com/medium/Product/Image/1ca5d5da-e0ec-42f0-876d-2a6bdc8e4548", color: "Rosso (909)" },
      { image: "https://www.agtwood.com/medium/Product/Image/becb4bc9-1c15-48f0-a1c1-f1b16f6ef089", color: "Nirvana (910)" },
      { image: "https://www.agtwood.com/medium/Product/Image/0a9ac4af-3616-4169-a757-b0f1fe915927", color: "Elbruz (911)" },
      { image: "https://www.agtwood.com/medium/Product/Image/69ad9fdc-0777-45aa-a3a8-6962d23935d1", color: "Solaro (912)" },
      { image: "https://www.agtwood.com/medium/Product/Image/29305ce4-2374-4e34-ab9d-6d386d50c03c", color: "Atlas (913)" },
    ],
    description: "Utilizing special technology to perfectly mimic real wood, the Effect Collection provides a stylish, water-resistant, and underfloor heating compatible solution for comfort and durability.",
    specs: ["8mm", "AC4 Resistance (32)", "V4 Groove", "HDF Core", "Turkish Made"],
  },
  // TerraClick
  {
    id: "tc-7mm",
    name: "TerraClick 7mm",
    brand: "TerraClick",
    variants: [
      { image: tc7mm_30A, color: "Inci Cam (30A)" },
      { image: tc7mm_31A, color: "Jasper Oak (31A)" },
      { image: tc7mm_32A, color: "Akik Mese (32A)" },
      { image: tc7mm_33A, color: "Topaz Oak (33A)" },
      { image: tc7mm_34A, color: "Kirstal Mese (34A)" },
      { image: tc7mm_60B, color: "Amber Oak (60B)" },
      { image: tc7mm_63B, color: "Opal Mese (63B)" },
    ],
    description: "Classic laminate with a warm, inviting tone and click-lock installation system.",
    specs: ["7mm", "AC3 Resistance (31)", "HDF Core", "Turkish Made"],
  },
  {
    id: "tc-8mm",
    name: "TerraClick 8mm",
    brand: "TerraClick",
    variants: [
      { image: tc8mm_20A, color: "Sevilla (20A)" },
      { image: tc8mm_25A, color: "Santorini (25A)" },
      { image: tc8mm_29A, color: "Lima (29A)" },
      { image: tc8mm_62B, color: "Panama (62B)" },
      { image: tc8mm_324, color: "Beyaz Mese (324)" },
      { image: tc8mm_633, color: "Roma (633)" },
      { image: tc8mm_643, color: "Sumela (643)" },
      { image: tc8mm_719, color: "Truva (719)" },
      { image: tc8mm_741, color: "Lara (741)" },
    ],
    description: "Premium 8mm laminate with enhanced durability and a wide selection of wood-inspired finishes.",
    specs: ["8mm", "AC3 Resistance (31)", "HDF Core", "Turkish Made"],
  },
  // VarioClick
  {
    id: "vc-standard",
    name: "VarioClick Standard",
    brand: "VarioClick",
    variants: [
      { image: vc_std_26, color: "Serengeti (26A)" },
      { image: vc_std_27, color: "Karakum (27A)" },
      { image: vc_std_28, color: "Gobi (28A)" },
      { image: vc_std_336, color: "Akasya (336)" },
      { image: vc_std_645, color: "Manyas (645)" },
      { image: vc_std_836, color: "Koycegiz (836)" },
    ],
    description: "The VarioClic Standard Collection combines rich decor options with scratch-resistant, antibacterial properties to bring lasting aesthetic appeal to any space.",
    specs: ["8mm", "AC4 Resistance (32)", "HDF Core", "Turkish Made"],
  },
  {
    id: "vc-chevron",
    name: "VarioClick Chevron",
    brand: "VarioClick",
    variants: [
      { image: vc_chev_1617, color: "ALP Macar (1617C)" },
      { image: vc_chev_2021, color: "Dogal Macar (2021C)" },
      { image: vc_chev_2223, color: "Antrasit Macar (2223C)" },
      { image: vc_chev_19C, color: "Otantik Macar (1819C)" },
    ],
    description: "Premium wide-board design with a textured surface and enhanced sound insulation.",
    specs: ["8mm", "AC4 Resistance (32)", "HDF Core", "Turkish Made"],
  },
  {
    id: "vc-naturel-line",
    name: "VarioClick Naturel Line",
    brand: "VarioClick",
    variants: [
      { image: "https://lh3.googleusercontent.com/d/1nQfuMNPl_0QT1Ph0LncxMdJC_2zfUszG", color: "Alto (73C)" },
      { image: "https://lh3.googleusercontent.com/d/1owgC3d9yA5m3mLHba_YoiyzJ0nZX9-Zf", color: "Arya(74C)" },
      { image: "https://lh3.googleusercontent.com/d/1sPjBjzrHcRdXDwGVdNWUD0Mxp6DQJCUB", color: "Lento (75C)" },
      { image: "https://lh3.googleusercontent.com/d/1LXUKimC2P1ojAAqeKbPVKIVW4R_OGyOy", color: "Melody ()76C" },
      { image: "https://lh3.googleusercontent.com/d/1V1QlfKUZ9-3PCu7E7_Ptl1GYf36VC5XX", color: "Movido (77C)" },
      { image: "https://lh3.googleusercontent.com/d/1VbMlObf9K0u2ZyYHxEfgYZ0sK76CnliV", color: "Rapsodi (78C)" },
      { image: "https://lh3.googleusercontent.com/d/1MHXbKrJmb5ZPeIcktg4r62pTlvXr6sib", color: "Symphony (80C)" },
      { image: "https://lh3.googleusercontent.com/d/1HjsMvJ78T0kJIoCiGBRLFuuz8ZlMtW70", color: "Serenad (81C)" },
    ],
    description: "The VarioClick Naturel Line brings warm, nature-inspired wood tones with a smooth finish suited for both residential and commercial spaces.",
    specs: ["8mm", "AC5 Resistance (33)", "v4 Groove", "HDF Core", "Turkish Made"],
  },
];

export function FlooringPage() {
  return (
    <ProductCatalogPage
      icon={Layers}
      title="Laminate Flooring"
      subtitle="Product Catalog"
      description="We are an authorized distributor of premium Turkish laminate flooring brands. Browse our full range below and contact us for pricing and availability."
      filters={["AGT", "TerraClick", "VarioClick"]}
      filterKey={(p) => p.brand ?? ""}
      products={products}
    />
  );
}
