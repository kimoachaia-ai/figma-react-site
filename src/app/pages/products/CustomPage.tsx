import { Settings2 } from "lucide-react";
import { ProductPage } from "../../components/ProductPage";

export function CustomPage() {
  return (
    <ProductPage
      icon={Settings2}
      title="Custom Manufacturing"
      subtitle="Our Factory"
      description="With our own factory, we can produce fully customized wood products built to your exact specifications — any design, dimension, or finish."
      features={[
        "Made-to-order doors & panels",
        "Custom dimensions & cuts",
        "Bespoke finishes & veneers",
        "Bulk production capacity",
      ]}
      details="Having our own manufacturing facility sets Achaia Wood apart. We don't just distribute — we build. Whether you're a contractor needing 500 doors to a specific spec, a designer commissioning a one-of-a-kind furniture piece, or a developer fitting out an entire building, our factory team can deliver. Every custom order is crafted with the same quality materials we stock and sell."
      imageSrc="https://images.unsplash.com/photo-1504148455328-c376907d081c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    />
  );
}
