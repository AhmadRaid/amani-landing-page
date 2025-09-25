import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10 animate-fade-in-right">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-lg"></div>
      </div>

      <div className=" mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Stats Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                +500 متعلم نشط
              </span>
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                منصتك الشاملة
                <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text block">
                  لتعلم المهارات والدورات أونلاين
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                انضم إلى آلاف المتعلمين وابدأ رحلتك في تطوير مهاراتك مع أفضل
                الدورات التدريبية في مختلف المجالات.
              </p>
            </div>

            <Link to="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-2xl shadow-soft group"
              >
                تصفح الدورات
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 mt-12">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium">
                  دورات معتمدة من خبراء
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium">
                  شهادات إتمام معترف بها
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full max-w-3xl h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden flex items-center justify-center">
              <img
                src="/vector.png"
                alt="Online Learning"
                className="w-full h-full object-contain mix-blend-multiply opacity-90"
                style={{ background: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
