import React from "react";

const services = [
  {
    title: "تصميم الشعارات والهوية البصرية",
    description: "خدمة تصميم شعارات احترافية وهوية بصرية متكاملة تعكس رؤية مشروعك وتمنح علامتك التجارية حضورًا مميزًا.",
    icon: "🎨"
  },
  {
    title: "إدارة حملات التسويق الرقمي",
    description: "إعداد وتنفيذ حملات تسويق رقمي فعالة على منصات التواصل الاجتماعي ومحركات البحث لتحقيق أفضل النتائج.",
    icon: "📈"
  },
  {
    title: "تصميم منشورات السوشيال ميديا",
    description: "تصميم منشورات وقوالب جذابة للسوشيال ميديا تساعدك على جذب العملاء وزيادة التفاعل.",
    icon: "📱"
  },
  {
    title: "استشارات تسويقية وتطوير العلامة",
    description: "تقديم استشارات تسويقية متخصصة وخطط تطوير العلامة التجارية لزيادة الانتشار وتحقيق أهدافك.",
    icon: "💡"
  }
];

const ServicesPage: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full pt-32 pb-16 px-2 sm:px-6 bg-gradient-to-br from-background via-secondary/10 to-accent/10 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">خدماتنا</h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">نقدم لك مجموعة متكاملة من الخدمات الإبداعية والتسويقية لمساعدتك في بناء وتطوير علامتك التجارية.</p>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-accent/10 p-8 flex flex-col items-center text-center animate-fade-in-up"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-extrabold mb-2 text-primary">{service.title}</h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;
