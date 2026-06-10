import { IntroLoader } from "@/components/landing/IntroLoader";
import { Hero } from "@/components/landing/Hero";
import { SocialProofBar } from "@/components/landing/SocialProofBar";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Hero />
      <SocialProofBar />
      <FinalCTA />
    </>
  );
}
