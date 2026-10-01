import { Paintbrush } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DoorPageShell, DoorGrid } from "./DoorCard";
import type { DoorProduct } from "./DoorCard";

const products: DoorProduct[] = [
  {
    id: "lacquer-1",
    name: "Lacquer Door 1",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1-8AS0Z7WI8EW-v1I--b5D_j_mL-qP9Qp", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-2",
    name: "Lacquer Door 2",
    variants: [{ image: "https://lh3.googleusercontent.com/d/100o4ZvdViwiOWf8-BzukBJ4njnwvBfNN", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-3",
    name: "Lacquer Door 3",
    variants: [{ image: "https://lh3.googleusercontent.com/d/12XXYCJSDmdH6sXy9ircUKCNXtm5SPcLy", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-4",
    name: "Lacquer Door 4",
    variants: [{ image: "https://lh3.googleusercontent.com/d/13DTCRgm58_ZF0zPLaEkS3m8clW0dSbb6", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-5",
    name: "Lacquer Door 5",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1G83yjYR-gi1t5UcoGPCSGHqxWX2eI-8j", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-6",
    name: "Lacquer Door 6",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1JfODuYaGg1NMB34wByaJ0kIVcUbQvqUn", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-7",
    name: "Lacquer Door 7",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1KXynRZkuFgc6ssAu3yrJyTw09fs6GU5j", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-8",
    name: "Lacquer Door 8",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1UNZPpgG2jvT8hveg55NoTxs13c7Caz3-", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-9",
    name: "Lacquer Door 9",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1cah0QLjiNdoho-tJI-CrZxgt4Pb_5DFQ", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-10",
    name: "Lacquer Door 10",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1jFGhsytdAL95ECJZGYLf44RFrnz1fR4g", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-11",
    name: "Lacquer Door 11",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1lzjHsi70MEFEvzXA-RceCkGJ8QGfIjXE", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-12",
    name: "Lacquer Door 12",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1m0xP31q-RgzJADr8lj6u6DA7l-xzsLmb", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-13",
    name: "Lacquer Door 13",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1nnl6HECrxFQVbEdFHLL-f_7Tv-emmLeY", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-14",
    name: "Lacquer Door 14",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1sF0D0hqKP5Aqj48fxae-BekcNH7klO4V", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-15",
    name: "Lacquer Door 15",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1svTjhPg_e73BAG7aoiy5RmuWgrgqWlHN", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-16",
    name: "Lacquer Door 16",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1y9i-5U3otsmAH9LpblgSeipLZs0xVesT", color: "" }],
    description: "",
    specs: [],
  },
  {
    id: "lacquer-17",
    name: "Lacquer Door 17",
    variants: [{ image: "https://lh3.googleusercontent.com/d/1z9RzHQNF_o6dngxjUHKeQARLZfp33hPF", color: "" }],
    description: "",
    specs: [],
  },
];

export function LacquerDoorsPage() {
  const { t } = useTranslation();
  return (
    <DoorPageShell
      icon={Paintbrush}
      title={t('doors.lacquer_title')}
      subtitle={t('doors.lacquer_page_sub')}
      description={t('doors.lacquer_page_desc')}
      doorType="Lacquer Doors"
    >
      <DoorGrid products={products} doorType="Lacquer Doors" />
    </DoorPageShell>
  );
}
