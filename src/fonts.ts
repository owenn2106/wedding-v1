import { Nunito, Abhaya_Libre, Birthstone_Bounce } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});
const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abhaya",
});
const birthstone = Birthstone_Bounce({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-birthstone",
});

export { nunito, abhaya, birthstone };
