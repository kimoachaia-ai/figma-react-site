import { FlipHorizontal } from "lucide-react";
import { ProductPage } from "../../components/ProductPage";

export function LumberVeneerPage() {
  return (
    <ProductPage
      icon={FlipHorizontal}
      title="Lumber & Veneer"
      subtitle="Product Line"
      description="Solid lumber and logs sourced globally, alongside high-quality natural and engineered veneer with edge banding solutions."
      features={[
        "Lumber",
        "Natural Veneer",
        "Engineered Veneer",
        "Edge Banding",
      ]}
      details="We import solid timber and veneer from across the globe, giving our clients access to a wide variety of species, grains, and finishes. Natural veneer preserves the authentic look of real wood, while engineered veneer delivers consistency and stability at scale. Our edge banding solutions complete any panel or furniture piece with a clean, durable finish."
      imageSrc="https://images.unsplash.com/photo-1611348586804-61bf6c080437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    />
  );
}
