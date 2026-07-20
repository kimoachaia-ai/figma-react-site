import { createHashRouter } from "react-router-dom";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { ContactPage } from "./pages/ContactPage";
import { DoorsPage } from "./pages/products/DoorsPage";
import { WoodPanelsPage } from "./pages/products/WoodPanelsPage";
import { LumberVeneerPage } from "./pages/products/LumberVeneerPage";
import { FlooringPage } from "./pages/products/FlooringPage";
import { FurniturePage } from "./pages/products/FurniturePage";
import { CustomPage } from "./pages/products/CustomPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: ContactPage },
      { path: "products/doors", Component: DoorsPage },
      { path: "products/wood-panels", Component: WoodPanelsPage },
      { path: "products/lumber-veneer", Component: LumberVeneerPage },
      { path: "products/flooring", Component: FlooringPage },
      { path: "products/furniture", Component: FurniturePage },
      { path: "products/custom", Component: CustomPage },
    ],
  },
]);
