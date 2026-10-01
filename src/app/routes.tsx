import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { ContactPage } from "./pages/ContactPage";
import { DoorsPage } from "./pages/products/DoorsPage";
import { SkinDoorsPage } from "./pages/products/doors/SkinDoorsPage";
import { FlushDoorsPage } from "./pages/products/doors/FlushDoorsPage";
import { LacquerDoorsPage } from "./pages/products/doors/LacquerDoorsPage";
import { SteelDoorsPage } from "./pages/products/doors/SteelDoorsPage";
import { SmartSolutionsPage } from "./pages/products/doors/SmartSolutionsPage";
import { PvcDoorsPage } from "./pages/products/doors/PvcDoorsPage";
import { LumberVeneerPage } from "./pages/products/LumberVeneerPage";
import { FlooringPage } from "./pages/products/FlooringPage";
import { FurniturePage } from "./pages/products/FurniturePage";
import { CustomPage } from "./pages/products/CustomPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: ContactPage },
      { path: "products/doors", Component: DoorsPage },
      { path: "products/doors/skin", Component: SkinDoorsPage },
      { path: "products/doors/flush", Component: FlushDoorsPage },
      { path: "products/doors/lacquer", Component: LacquerDoorsPage },
      { path: "products/doors/steel", Component: SteelDoorsPage },
      { path: "products/doors/smart-solutions", Component: SmartSolutionsPage },
      { path: "products/doors/pvc", Component: PvcDoorsPage },
      { path: "products/doors/folding", element: <Navigate to="/products/doors/smart-solutions" replace /> },
      { path: "products/lumber-veneer", Component: LumberVeneerPage },
      { path: "products/flooring", Component: FlooringPage },
      { path: "products/furniture", Component: FurniturePage },
      { path: "products/custom", Component: CustomPage },
    ],
  },
]);
