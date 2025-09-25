import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="relative min-h-screen w-full pt-32 pb-16 px-2 sm:px-6 bg-gradient-to-br from-background via-secondary/10 to-accent/10 animate-fade-in-up">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-accent/10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">تواصل معنا</h1>
        <p className="text-center text-muted-foreground mb-8">نسعد باستقبال استفساراتك واقتراحاتك عبر النموذج التالي.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-bold text-primary" htmlFor="name">الاسم</label>
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
            <label className="block mb-2 font-bold text-primary" htmlFor="message">رسالتك</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-3 rounded-xl font-bold shadow transition-all text-lg"
          >
            إرسال
          </button>
        </form>
        {sent && (
          <div className="mt-6 text-center text-green-600 font-bold animate-fade-in-up">تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريبًا.</div>
        )}
      </div>
    </main>
  );
};

export default ContactPage;
