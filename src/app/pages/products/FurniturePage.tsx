import { Armchair } from "lucide-react";
import { ProductPage } from "../../components/ProductPage";

export function FurniturePage() {
  return (
    <ProductPage
      icon={Armchair}
      title="Furniture"
      subtitle="Product Line"
      description="Quality furniture sourced and crafted to complement our wood and flooring collections — for homes, offices, and commercial spaces."
      features={[
        "Kitchens",
        "Dressing Rooms",
        "Cabinets",
        "TV Units",
      ]}
      details="Our furniture line brings together design and craftsmanship to outfit any space. From fully fitted kitchens to custom dressing rooms, TV units, and storage cabinets — each piece is made to complement the materials we supply. With our own factory, we can produce furniture to your exact specifications in the finish, size, and style you need."
      imageSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    />
  );
}
