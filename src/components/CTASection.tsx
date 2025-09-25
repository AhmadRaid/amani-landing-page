import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    "دورات احترافية في مختلف المجالات",
    "تعلم عن بعد في أي وقت ومن أي مكان",
    "شهادات معتمدة بعد إتمام كل دورة",
    "مجتمع تفاعلي ودعم فني مستمر"
  ];

  return (
  <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-fade-in-right">
      <div className="mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                ابدأ رحلتك التعليمية الآن
                <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text block">
                  مع أفضل الدورات التدريبية أونلاين
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                سجّل الآن وطور مهاراتك مع نخبة من المدربين المحترفين، وكن جزءًا من مجتمع تعليمي متكامل.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-2xl shadow-soft group"
                >
                  تصفح الدورات
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/20 hover:bg-primary/5 text-lg px-8 py-6 rounded-2xl"
              >
                <BookOpen className="ml-2 h-5 w-5" />
                سجّل مجانًا
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center justify-center">
              <img
                src="/vector.png"
                alt="مدرب أونلاين"
                className="w-72 h-96 lg:w-[28rem] lg:h-[32rem] object-contain drop-shadow-2xl rounded-3xl border-4 border-white/70 bg-white/60"
                style={{ boxShadow: '0 8px 32px 0 rgba(80,80,120,0.18)' }}
              />
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-soft">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-sm font-bold">مدربون معتمدون</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-soft">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm font-bold">+500 متعلم</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;