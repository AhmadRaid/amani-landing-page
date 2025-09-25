import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("يرجى تعبئة جميع الحقول");
      setSuccess(false);
    } else if (form.password !== form.confirm) {
      setError("كلمتا المرور غير متطابقتين");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
      setForm({ name: "", email: "", password: "", confirm: "" });
    }
  };

  return (
    <main className="relative min-h-screen w-full pt-32 pb-16 px-2 sm:px-6 bg-gradient-to-br from-background via-secondary/10 to-accent/10 animate-fade-in-up">
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-accent/10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">إنشاء حساب جديد</h1>
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
          <div>
            <label className="block mb-2 font-bold text-primary" htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          </div>
          <div>
            <label className="block mb-2 font-bold text-primary" htmlFor="confirm">تأكيد كلمة المرور</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          </div>
          {error && <div className="text-red-600 font-bold text-center">{error}</div>}
          {success && <div className="text-green-600 font-bold text-center">تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-3 rounded-xl font-bold shadow transition-all text-lg"
          >
            إنشاء حساب
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-primary font-bold hover:underline">لديك حساب بالفعل؟ تسجيل الدخول</Link>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
