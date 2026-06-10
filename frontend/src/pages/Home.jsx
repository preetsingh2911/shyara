import { IntroLoader } from "@/components/landing/IntroLoader";
import { Hero } from "@/components/landing/Hero";
import { SocialProofBar } from "@/components/landing/SocialProofBar";
import { Process } from "@/components/landing/Process";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Hero />
      <SocialProofBar />
      <Process />
      <FinalCTA />
    </>
  );
}
