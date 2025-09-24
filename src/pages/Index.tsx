import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 max-w-[1800px] mx-auto">
        <HeroSection />
        {/* قسم تعريفي عن المنصة */}
        <section className="max-w-3xl mx-auto text-center my-12 px-2 sm:px-4">
          <h2 className="text-3xl font-bold mb-4">مرحبًا بك في أكاديميتك للدورات التدريبية</h2>
          <p className="text-lg text-muted-foreground mb-6">
            اكتشف أفضل الدورات التدريبية في مختلف المجالات وطور مهاراتك مع نخبة من المدربين المحترفين. تعلم عن بعد، في أي وقت ومن أي مكان.
          </p>
        </section>
        <FeaturesSection />
        {/* يمكن لاحقًا إضافة قسم لعرض الدورات المميزة */}
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
