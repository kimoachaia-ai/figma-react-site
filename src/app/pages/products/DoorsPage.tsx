import { DoorOpen } from "lucide-react";
import { ProductPage } from "../../components/ProductPage";

export function DoorsPage() {
  return (
    <ProductPage
      icon={DoorOpen}
      title="Doors"
      subtitle="Product Line"
      description="A complete range of interior and exterior doors combining beauty with lasting durability — from classic wood to modern steel options."
      features={[
        "Skin Doors",
        "Flush Doors",
        "Laminated Doors",
        "Steel Doors",
        "Turkish Steel Wood Doors",
      ]}
      details="Achaia Wood has been supplying doors to Egyptian homes, offices, and commercial spaces for over 75 years. We stock a wide variety of styles and materials to suit every budget and aesthetic — from simple flush doors to ornate steel-wood combinations imported from Turkey. All doors are available in standard and custom dimensions."
      imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    />
  );
}
