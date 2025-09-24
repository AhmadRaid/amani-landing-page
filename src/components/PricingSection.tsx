import { Button } from "@/components/ui/button";
import { CheckCircle, Crown, Sparkles, Users } from "lucide-react";

const courses = [
	{
		name: "أساسيات تربية الأطفال",
		description: "دورة مجانية حول المبادئ الأساسية لتربية الأطفال بشكل إيجابي.",
		price: 0,
		image: "/placeholder.svg",
		features: ["شهادة مجانية", "دروس فيديو", "مجتمع تفاعلي"],
		isFree: true
	},
	{
		name: "مهارات الأم القيادية",
		description: "دورة مدفوعة تركز على تطوير مهارات القيادة للأمهات.",
		price: 120,
		image: "/placeholder.svg",
		features: ["شهادة معتمدة", "دروس فيديو متقدمة", "دعم فني"],
		isFree: false
	},
	{
		name: "التغذية الصحية للأطفال",
		description: "دورة مدفوعة عن أساسيات التغذية الصحية للأطفال.",
		price: 90,
		image: "/placeholder.svg",
		features: ["ملفات PDF", "محاضرات فيديو", "مجتمع خاص"],
		isFree: false
	},
	{
		name: "دورة التسويق الرقمي",
		description: "دورة مدفوعة عن أساسيات التسويق والاعلانات الممولة.",
		price: 90,
		image: "/placeholder.svg",
		features: ["ملفات PDF", "محاضرات فيديو", "مجتمع خاص"],
		isFree: false
	}
]; // Added missing closing bracket and semicolon

function PricingSection() {
	return (
		<section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-accent/5">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-4xl font-bold mb-4">
						الدورات التدريبية
						<span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text block">
							المجانية والمدفوعة
						</span>
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						اختر الدورة التي تناسبك وابدأ التعلم مباشرة. الدورات المجانية متاحة للجميع، والمدفوعة تتطلب شراء لمشاهدة جميع الفيديوهات.
					</p>
				</div>

				{/* Courses Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
					{courses.map((course, idx) => (
						<div
							key={idx}
							className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.03] flex flex-col"
						>
							{/* Course Image */}
							<img
								src={course.image}
								alt={course.name}
								className="w-full h-36 object-cover rounded-2xl mb-4 border border-muted"
							/>
							{/* Course Info */}
							<h3 className="text-xl font-bold mb-2 text-primary truncate">{course.name}</h3>
							<p className="text-muted-foreground text-sm mb-4 min-h-[48px]">{course.description}</p>
							{/* Features */}
							<ul className="space-y-2 mb-4">
								{course.features.map((feature, i) => (
									<li key={i} className="flex items-center gap-2 text-sm text-foreground">
										<CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
										{feature}
									</li>
								))}
							</ul>
							{/* Price & Action */}
							<div className="mt-auto flex flex-col gap-2">
								{course.isFree ? (
									<>
										<span className="text-success font-bold">مجانية</span>
										<Button className="w-full bg-gradient-to-r from-primary to-accent" size="lg">
											ابدأ الدورة
										</Button>
									</>
								) : (
									<>
										<span className="text-lg font-bold text-foreground mb-1">{course.price} ريال</span>
										<Button className="w-full bg-gradient-to-r from-primary to-accent" size="lg">
											شراء الدورة
										</Button>
									</>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Bottom Note */}
				<div className="text-center mt-12">
					<p className="text-muted-foreground text-sm">
						* الدورات المجانية متاحة بالكامل. الدورات المدفوعة تتطلب شراء لمشاهدة جميع الفيديوهات والمحتوى.
					</p>
				</div>

				{/* زر إظهار المزيد من الدورات */}
				<div className="flex justify-center mt-8">
					<a
						href="/courses"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						إظهار المزيد من الدورات
					</a>
				</div>
			</div>
		</section>
	);
}

export default PricingSection;