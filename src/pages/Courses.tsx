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
    title: 'دورة مجانية 1',
    description: 'تعلم الأساسيات',
    image: 'https://via.placeholder.com/300x200?text=Free+Course+1',
  },
  {
    id: 2,
    title: 'دورة مجانية 2',
    description: 'مقدمة للمفاهيم',
    image: 'https://via.placeholder.com/300x200?text=Free+Course+2',
  },
  // يمكنك إضافة المزيد من الدورات المجانية
];

const paidCourses: PaidCourse[] = [
  {
    id: 1,
    title: 'دورة مدفوعة 1',
    description: 'دورة متقدمة شاملة',
    price: '99$',
    image: 'https://via.placeholder.com/300x200?text=Paid+Course+1',
  },
  {
    id: 2,
    title: 'دورة مدفوعة 2',
    description: 'بناء مهارات متقدمة',
    price: '149$',
    image: 'https://via.placeholder.com/300x200?text=Paid+Course+2',
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
    <main className="max-w-6xl mx-auto px-8 pt-32 pb-12">
      <h1 className="text-4xl font-bold text-center mb-10">الدورات التدريبية الكاملة</h1>
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 mx-2 ${activeTab === 'free' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('free')}
        >
          الدورات المجانية
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 mx-2 ${activeTab === 'paid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
              className="bg-white rounded shadow hover:shadow-xl transform hover:scale-105 transition-all duration-200 p-6"
            >
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              {activeTab === 'paid' && (
                <p className="text-lg font-semibold mb-4">السعر: {(course as PaidCourse).price}</p>
              )}
              <button
                className={
                  activeTab === 'free'
                    ? "w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
                    : "w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                }
              >
                {activeTab === 'free' ? 'دخول الدورة' : 'شراء الدورة'}
              </button>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              السابق
            </button>
            <span className="text-gray-700">{currentPage} / {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Courses;
