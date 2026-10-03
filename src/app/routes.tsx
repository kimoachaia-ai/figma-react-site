import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";

const ContactPage      = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const DoorsPage        = lazy(() => import("./pages/products/DoorsPage").then(m => ({ default: m.DoorsPage })));
const SkinDoorsPage    = lazy(() => import("./pages/products/doors/SkinDoorsPage").then(m => ({ default: m.SkinDoorsPage })));
const FlushDoorsPage   = lazy(() => import("./pages/products/doors/FlushDoorsPage").then(m => ({ default: m.FlushDoorsPage })));
const LacquerDoorsPage = lazy(() => import("./pages/products/doors/LacquerDoorsPage").then(m => ({ default: m.LacquerDoorsPage })));
const SteelDoorsPage   = lazy(() => import("./pages/products/doors/SteelDoorsPage").then(m => ({ default: m.SteelDoorsPage })));
const SmartSolutionsPage = lazy(() => import("./pages/products/doors/SmartSolutionsPage").then(m => ({ default: m.SmartSolutionsPage })));
const PvcDoorsPage     = lazy(() => import("./pages/products/doors/PvcDoorsPage").then(m => ({ default: m.PvcDoorsPage })));
const LumberVeneerPage = lazy(() => import("./pages/products/LumberVeneerPage").then(m => ({ default: m.LumberVeneerPage })));
const FlooringPage     = lazy(() => import("./pages/products/FlooringPage").then(m => ({ default: m.FlooringPage })));
const FurniturePage    = lazy(() => import("./pages/products/FurniturePage").then(m => ({ default: m.FurniturePage })));
const CustomPage       = lazy(() => import("./pages/products/CustomPage").then(m => ({ default: m.CustomPage })));

function Fallback() {
  return (
    <div className="min-h-screen bg-[#0A0806] flex items-center justify-center">
      <div className="size-8 rounded-full border-2 border-[#C4A57B]/30 border-t-[#C4A57B] animate-spin" />
    </div>
  );
}

function withSuspense(Component: React.ComponentType) {
  return (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,                            Component: Home },
      { path: "contact",                        element: withSuspense(ContactPage) },
      { path: "products/doors",                 element: withSuspense(DoorsPage) },
      { path: "products/doors/skin",            element: withSuspense(SkinDoorsPage) },
      { path: "products/doors/flush",           element: withSuspense(FlushDoorsPage) },
      { path: "products/doors/lacquer",         element: withSuspense(LacquerDoorsPage) },
      { path: "products/doors/steel",           element: withSuspense(SteelDoorsPage) },
      { path: "products/doors/smart-solutions", element: withSuspense(SmartSolutionsPage) },
      { path: "products/doors/pvc",             element: withSuspense(PvcDoorsPage) },
      { path: "products/doors/folding",         element: <Navigate to="/products/doors/smart-solutions" replace /> },
      { path: "products/lumber-veneer",         element: withSuspense(LumberVeneerPage) },
      { path: "products/flooring",              element: withSuspense(FlooringPage) },
      { path: "products/furniture",             element: withSuspense(FurniturePage) },
      { path: "products/custom",                element: withSuspense(CustomPage) },
    ],
  },
]);
