import { PageShell } from "@/components/layout/page-shell";
import {
  BrandStorySection,
  FeaturedMenuSection,
  FinalCtaSection,
  FranchiseSection,
  HeroSection,
} from "@/components/sections";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <BrandStorySection />
      <FeaturedMenuSection />
      <FranchiseSection />
      <FinalCtaSection />
    </PageShell>
  );
}
