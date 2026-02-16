import HeroSection from "../components/home/HeroSection/HeroSection";
import PopularSearches from "../components/home/PopularSearches/PopularSearches";
import FeaturedJobs from "../components/home/FeaturedJobs/FeaturedJobs";
import InfoCards from "../components/home/InfoCards/InfoCards";
import CompanyLogos from "../components/home/CompanyLogos/CompanyLogos";
import JobsForYou from "../components/home/JobsForYou/JobsForYou";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularSearches />
      <FeaturedJobs />
      <InfoCards />
      <CompanyLogos />
      <JobsForYou />
    </>
  );
}
