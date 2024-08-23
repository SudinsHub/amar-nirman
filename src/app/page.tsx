import {HeroSection} from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import Signatures from "@/components/Signatures";
import Services from "@/components/Services";
export default function Home() {
  return(
    <main className="min-h-screen bg-[#666666] antialiased">
      <HeroSection2/>
      <Services/>
      <div className="p-6">
        <Signatures/>
      </div>
    </main>
  );
}
