import { Layers } from "lucide-react";
import { ProductPage } from "../../components/ProductPage";

export function WoodPanelsPage() {
  return (
    <ProductPage
      icon={Layers}
      title="Wood Panels & Materials"
      subtitle="Product Line"
      description="Premium engineered and natural wood panels for construction, furniture making, and interior finishing projects of all scales."
      features={[
        "Block Board",
        "Plywood",
        "MDF",
        "Melamine",
        "Formica / HPL",
      ]}
      details="Our wood panels and sheet materials are sourced from trusted international suppliers and are a staple for contractors, furniture manufacturers, and interior designers throughout Egypt. From structural plywood to surface-ready melamine and high-pressure laminate, we carry the full range needed for any woodworking project."
      imageSrc="https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    />
  );
}
