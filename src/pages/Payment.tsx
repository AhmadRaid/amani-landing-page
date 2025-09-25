import React, { useState } from "react";

const PaymentPage: React.FC = () => {
  const [method, setMethod] = useState<"visa" | "paypal" | "">("");
  const [form, setForm] = useState({ name: "", email: "", card: "", expiry: "", cvc: "" });
  const [paid, setPaid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaid(true);
    setForm({ name: "", email: "", card: "", expiry: "", cvc: "" });
    setMethod("");
  };

  return (
    <main className="relative min-h-screen w-full pt-32 pb-16 px-2 sm:px-6 bg-gradient-to-br from-background via-secondary/10 to-accent/10 animate-fade-in-up">
      <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-accent/10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">الدفع الإلكتروني</h1>
        <p className="text-center text-muted-foreground mb-8">اختر وسيلة الدفع المناسبة وأكمل بياناتك لإتمام عملية الشراء بأمان.</p>
        <div className="flex justify-center gap-6 mb-8">
          <button
            className={`px-6 py-3 rounded-xl font-bold text-lg border-2 transition-all duration-200 flex items-center gap-2 ${method === "visa" ? "bg-gradient-to-r from-primary to-accent text-white border-primary scale-105" : "bg-white/80 text-primary border-primary/20 hover:bg-primary/10"}`}
            onClick={() => setMethod("visa")}
            type="button"
          >
            <span className="text-2xl">💳</span> Visa
          </button>
          <button
            className={`px-6 py-3 rounded-xl font-bold text-lg border-2 transition-all duration-200 flex items-center gap-2 ${method === "paypal" ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white border-blue-500 scale-105" : "bg-white/80 text-blue-700 border-blue-200 hover:bg-blue-50"}`}
            onClick={() => setMethod("paypal")}
            type="button"
          >
            <span className="text-2xl">🅿️</span> PayPal
          </button>
        </div>
        {method && !paid && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-bold text-primary" htmlFor="name">الاسم الكامل</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-primary" htmlFor="email">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>
            {method === "visa" && (
              <>
                <div>
                  <label className="block mb-2 font-bold text-primary" htmlFor="card">رقم البطاقة</label>
                  <input
                    type="text"
                    id="card"
                    name="card"
                    value={form.card}
                    onChange={handleChange}
                    required
                    maxLength={19}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-2 font-bold text-primary" htmlFor="expiry">تاريخ الانتهاء</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={form.expiry}
                      onChange={handleChange}
                      required
                      maxLength={5}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2 font-bold text-primary" htmlFor="cvc">CVC</label>
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      value={form.cvc}
                      onChange={handleChange}
                      required
                      maxLength={4}
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    />
                  </div>
                </div>
              </>
            )}
            {method === "paypal" && (
              <div className="text-center text-blue-700 font-bold text-lg py-4">
                سيتم تحويلك إلى بوابة PayPal بعد الضغط على زر الدفع.
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-3 rounded-xl font-bold shadow transition-all text-lg"
            >
              دفع الآن
            </button>
          </form>
        )}
        {paid && (
          <div className="mt-6 text-center text-green-600 font-bold animate-fade-in-up">تمت عملية الدفع بنجاح! شكرًا لاستخدامك منصتنا.</div>
        )}
      </div>
    </main>
  );
};

export default PaymentPage;
