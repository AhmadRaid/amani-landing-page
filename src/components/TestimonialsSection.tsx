import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "محمد علي",
      text: "منصة رائعة! استفدت كثيرًا من دورة تطوير الويب، والمدرب كان محترفًا جدًا. أنصح الجميع بالتجربة.",
      rating: 5,
      avatar: "�‍💻"
    },
    {
      name: "سارة إبراهيم",
      text: "الدورات منظمة والمحتوى واضح وسهل الفهم. حصلت على شهادة معتمدة بعد إنهاء دورة التصميم.",
      rating: 5,
      avatar: "👩‍🎨"
    },
    {
      name: "أحمد يوسف",
      text: "أعجبني التفاعل مع المدربين وسرعة الرد على الاستفسارات. منصة تعليمية متكاملة فعلاً.",
      rating: 5,
      avatar: "🧑‍🏫"
    }
  ];

  return (
  <section className="py-20 bg-gradient-to-br from-secondary/10 to-accent/5 animate-fade-in-up">
      <div className=" mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-soft">
            <Quote className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">آراء المتدربين</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ماذا قال طلابنا عن المنصة؟
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text block">
              تجارب حقيقية من متدربين
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اقرأ شهادات المتدربين الذين طوروا مهاراتهم وحققوا النجاح من خلال منصتنا التعليمية.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground font-medium mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">متدرب في المنصة</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;