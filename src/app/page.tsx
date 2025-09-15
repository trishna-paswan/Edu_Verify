import FeaturedCourses from "@/components/FeaturedCourses"; // Can be renamed to FeaturedFeatures
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors"; // Can be renamed to Team
import MusicSchoolTestimonial from "@/components/TestimonialCards"; // Can be renamed to Testimonials
import UpcomingWebinars from "@/components/UpcomingWebinars"; // Can be renamed to UpcomingFeatures
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />

      {/* Highlight key dashboards/features */}
      <FeaturedCourses /> {/* Rename component to FeaturedFeatures and update content */}

      {/* Why EduVerify */}
      <WhyChooseUs />

      {/* Testimonials from students / institutions */}
      <MusicSchoolTestimonial /> {/* Rename and replace content with your project contributors: Trishna, Tanvi, Deeya, Himanshi, Krati, Maalvika */}

      {/* Upcoming Features / Enhancements */}
      <UpcomingWebinars /> {/* Rename component to UpcomingFeatures */}

      {/* Team or Contributors */}
      <Instructors /> {/* Rename to Team and showcase project creators */}

      {/* Footer */}
      <Footer /> {/* Update text/content to EduVerify branding */}
    </main>
  );
}
