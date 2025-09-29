import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "أمل الحربي",
      text: "دورة التصميم كانت نقطة تحول في مسيرتي. تعلمت أساسيات التصميم الاحترافي وكيفية استخدام الأدوات الحديثة. الشكر للمدربة على الشرح الواضح والدعم المستمر.",
      rating: 5,
      image: "/صورة سعودية.jpeg",
      postition: "متدربة في دورة التصميم"
    },
    {
      name: "سلمان المطيري",
      text: "دورة التسويق الرقمي من أفضل الدورات التي حضرتها. المحتوى غني بالأمثلة العملية، والمدرب يشارك أسرار السوق السعودي. أنصح بها كل من يريد تطوير عمله.",
      rating: 5,
      image: "/صورة سعودي 1.jpeg",
      postition: "متدرب في دورة التسويق الرقمي"
    },
    {
      name: "محمد بن عبدالعزيز",
      text: "استفدت كثيرًا من دورة التسويق عبر السوشيال ميديا. أصبحت أستطيع إدارة الحملات الإعلانية بنفسي وأحقق نتائج ملموسة. شكراً للمنصة على هذا المستوى العالي.",
      rating: 5,
      image: "/صورة سعودي 6.jpeg",
      postition: "متدرب في دورة التسويق"
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
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-soft flex items-center justify-center bg-white">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.postition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

  
      </div>
    </section>
  );
};

export default TestimonialsSection;