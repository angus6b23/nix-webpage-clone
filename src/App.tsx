import { type ReactElement } from "react";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Cover from "./components/Cover";
import Features from "./components/Features";
import FindPackages from "./components/FindPackages";
import Examples from "./components/Examples";
import Footer from "./components/Footer";
import Notice from "./components/Notice";

export interface AppProps {}

// This Webpage is a clone of nix, please find the original site at https://nixos.org/
// This project is intended for learning and practice and do NOT have any association with the nix project.
// All the rights of the images and content are reserved by NixOS contributors.

export default function App(): ReactElement {
  return (
    <>
      <body className="min-h-screen font-roboto font-medium flex flex-col bg-white text-gray-950">
        <Navbar />
        <main className="flex-1">
          <Announcement />
          <Cover />
          <Features />
          <FindPackages />
          <Examples />
        </main>
        <footer>
          <Footer />
        </footer>
        <Notice />
      </body>
    </>
  );
}
