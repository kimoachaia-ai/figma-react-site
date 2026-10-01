import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";
import achaiaLogo from "../imports/achaia_wood-logo__1_.png";

document.title = "Achaia Wood";

const favicon = document.querySelector<HTMLLinkElement>("link[rel~='icon']") ?? document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = achaiaLogo;
document.head.appendChild(favicon);

export default function App() {
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <Toaster position="bottom-center" richColors theme="dark" />
    </>
  );
}
