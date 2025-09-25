import { CheckCircle, BookOpen, Users, Target, Lightbulb } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "مكتبة دورات متنوعة",
      description: "دورات في جميع المجالات من البرمجة إلى التصميم واللغات."
    },
    {
      icon: Target,
      title: "تعلّم مخصص",
      description: "اختر المسار المناسب لك وتعلم بالسرعة التي تناسبك."
    },
    {
      icon: Users,
      title: "مدربون محترفون",
      description: "تعلم من خبراء معتمدين وذوي خبرة عملية."
    },
    {
      icon: Lightbulb,
      title: "شهادات معتمدة",
      description: "احصل على شهادة إتمام لكل دورة تنهيها."
    }
  ];

  const programFeatures = [
    "دروس فيديو عالية الجودة متاحة 24/7",
    "ملفات ومواد تعليمية قابلة للتحميل",
    "اختبارات وتقييمات تفاعلية لكل دورة",
    "مجتمع تفاعلي ومنتديات للنقاش مع المدربين والطلاب"
  ];

  return (
  <section className="py-20 bg-gradient-to-br from-background to-secondary/20 animate-fade-in-up">
      <div className="  px-4">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-lg transition-shadow">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Program Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Program Features */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center lg:text-right">
              ماذا تقدم منصتنا؟
            </h2>
            
            <div className="space-y-4">
              {programFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-soft hover:shadow-lg transition-shadow">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center shadow-card">
                <div className="w-64 h-64 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center shadow-soft">
                    {/* صورة توضيحية */}
                    <img
                      src="/vector.png"
                      alt="vector graphic"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full px-4 py-2 shadow-soft">
                <span className="text-sm font-bold text-primary">ابدأ الآن</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;