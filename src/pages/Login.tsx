import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("يرجى إدخال البريد الإلكتروني وكلمة المرور");
    } else {
      setError("");
      // منطق وهمي فقط
      alert("تم تسجيل الدخول بنجاح!");
    }
  };

  return (
    <div className="min-h-screen flex m-10">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">ق</span>
              </div>
              <span className="font-bold text-2xl">قُرّاء</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">مرحباً بعودتك!</h1>
            <p className="text-muted-foreground">
              سجل دخولك للوصول إلى حسابك ومتابعة رحلة طفلك التعليمية
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-right block">البريد الإلكتروني</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="pl-10 text-right"
                  dir="rtl"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-right block">كلمة المرور</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  className="pl-10 pr-10 text-right"
                  dir="rtl"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-primary hover:underline">
                نسيت كلمة المرور؟
              </a>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-muted-foreground">تذكرني</span>
              </label>
            </div>

            {/* Error Message */}
            {error && <div className="text-red-600 font-bold text-center">{error}</div>}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity py-3 rounded-xl font-bold text-white text-lg"
            >
              دخول
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">أو</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full" size="lg">
                <div className="w-5 h-5 ml-2">🔍</div>
                تسجيل الدخول بحساب جوجل
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <div className="w-5 h-5 ml-2">📘</div>
                تسجيل الدخول بحساب فيسبوك
              </Button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-muted-foreground">
              ليس لديك حساب؟{" "}
              <Link to="/register" className="text-primary font-bold hover:underline">
                إنشاء حساب جديد
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20 items-center justify-center p-8">
        <div className="relative">
          {/* Main Illustration Container */}
          <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-card">
                {/* Placeholder for reading illustration */}
                <div className="text-8xl">📚👨‍👩‍👧‍👦</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-8 -right-8 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-soft animate-bounce">
            <span className="text-3xl">🌟</span>
          </div>
          
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-soft">
            <span className="text-2xl">📖</span>
          </div>

          {/* Text Overlay */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">ابدأ رحلة التعلم</h3>
            <p className="text-muted-foreground">مع أطفالك اليوم</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;