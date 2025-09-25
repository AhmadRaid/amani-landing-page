import React, { useState, useEffect } from 'react';

// تعريف أنواع الدورات
interface FreeCourse {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface PaidCourse extends FreeCourse {
  price: string;
}

// تحديث تعريف الدورات باستخدام الأنواع المعرفة
const freeCourses: FreeCourse[] = [
  {
    id: 1,
    title: 'مقدمة في التصميم الجرافيكي',
    description: 'تعلم أساسيات التصميم الجرافيكي، مبادئ الألوان، وتنسيق العناصر لإنشاء تصاميم جذابة واحترافية.',
    image: 'http://localhost:8080/كورس4.jpeg',
  },
  {
    id: 2,
    title: 'أساسيات التسويق الرقمي',
    description: 'اكتشف أهم استراتيجيات التسويق الرقمي وكيفية بناء حملات تسويقية فعالة عبر الإنترنت.',
    image: 'http://localhost:8080/كورس3.jpeg',
  },
  // يمكنك إضافة المزيد من الدورات المجانية
];

const paidCourses: PaidCourse[] = [
  {
    id: 1,
    title: 'احتراف التصميم الجرافيكي باستخدام Adobe Photoshop',
    description: 'دورة شاملة لتعلم جميع تقنيات وأسرار التصميم الجرافيكي الاحترافي باستخدام برنامج الفوتوشوب، مع مشاريع تطبيقية.',
    price: '99$',
    image: 'http://localhost:8080/كورس2.jpeg',
  },
  {
    id: 2,
    title: 'استراتيجيات التسويق المتقدم عبر السوشيال ميديا',
    description: 'تعلم كيف تدير حملات تسويق متقدمة على منصات التواصل الاجتماعي وتحقق نتائج ملموسة لعلامتك التجارية.',
    price: '149$',
    image: 'http://localhost:8080/كورس1.jpeg',
  },
  // يمكنك إضافة المزيد من الدورات المدفوعة
];

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'free' | 'paid'>('free');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const currentCourses = activeTab === 'free' ? freeCourses : paidCourses;
  const totalPages = Math.ceil(currentCourses.length / itemsPerPage);
  const displayedCourses = currentCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className="relative min-h-screen w-full pt-32 pb-16 px-2 sm:px-6 bg-gradient-to-br from-background via-secondary/10 to-accent/10 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">الدورات التدريبية الكاملة</h1>
        <div className="flex justify-center mb-10 gap-4">
          <button
            className={`px-7 py-2.5 rounded-full font-bold text-lg shadow transition-all duration-200 border-2 ${activeTab === 'free' ? 'bg-gradient-to-r from-green-400 to-green-600 text-white border-green-500 scale-105' : 'bg-white/80 text-green-700 border-green-200 hover:bg-green-50'}`}
            onClick={() => setActiveTab('free')}
          >
            الدورات المجانية
          </button>
          <button
            className={`px-7 py-2.5 rounded-full font-bold text-lg shadow transition-all duration-200 border-2 ${activeTab === 'paid' ? 'bg-gradient-to-r from-primary to-accent text-white border-primary scale-105' : 'bg-white/80 text-primary border-primary/20 hover:bg-primary/10'}`}
            onClick={() => setActiveTab('paid')}
          >
            الدورات المدفوعة
          </button>
        </div>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCourses.map(course => (
              <div
                key={course.id}
                className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-accent/10 p-6 flex flex-col items-center animate-fade-in-up"
              >
                <img src={course.image} alt={course.title} className="w-full h-44 object-cover rounded-2xl mb-4 shadow" />
                <h3 className="text-2xl font-extrabold mb-2 text-primary text-center">{course.title}</h3>
                <p className="text-gray-700 mb-4 text-center">{course.description}</p>
                {activeTab === 'paid' && (
                  <p className="text-lg font-semibold mb-4 text-accent">السعر: {(course as PaidCourse).price}</p>
                )}
                <button
                  className={
                    activeTab === 'free'
                      ? "w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 rounded-xl font-bold shadow"
                      : "w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-2.5 rounded-xl font-bold shadow"
                  }
                >
                  {activeTab === 'free' ? 'دخول الدورة' : 'شراء الدورة'}
                </button>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 gap-4 animate-fade-in-up">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-5 py-2 bg-background border border-border rounded-full font-bold text-lg text-primary disabled:opacity-50 transition-all"
              >
                السابق
              </button>
              <span className="text-lg font-bold text-foreground">{currentPage} / {totalPages}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-5 py-2 bg-background border border-border rounded-full font-bold text-lg text-primary disabled:opacity-50 transition-all"
              >
                التالي
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Courses;
