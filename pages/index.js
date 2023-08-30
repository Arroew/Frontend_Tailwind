import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar_1 } from "@/components/Navbar/navbar_1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Navbar_1 />;
}
