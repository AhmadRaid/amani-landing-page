import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "من نحن", href: "/about" },
      { label: "خدماتنا", href: "/services" },
      { label: "فريق العمل", href: "/team" },
      { label: "الشراكات", href: "/partnerships" }
    ],
    support: [
      { label: "المساعدة", href: "/help" },
      { label: "الأسئلة الشائعة", href: "/faq" },
      { label: "تواصل معنا", href: "/contact" },
      { label: "الدعم الفني", href: "/support" }
    ],
    legal: [
      { label: "الشروط والأحكام", href: "/terms" },
      { label: "سياسة الخصوصية", href: "/privacy" },
      { label: "سياسة الاستخدام", href: "/usage" },
      { label: "إخلاء المسؤولية", href: "/disclaimer" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Instagram, href: "#", label: "إنستغرام" },
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="https://amani-project.vercel.app/amani-logo.jpg"
                alt="شعار إشراقة أم"
                className="w-12 h-12 object-contain rounded-xl shadow"
                style={{ background: 'white' }}
              />
              <span className="font-bold text-xl text-primary">إشراقة أم</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              منصة إشراقة أم: دليلك الشامل للدورات التدريبية للأمهات والمتعلمين، تعلمي واطوري مهاراتك مع أفضل المدربين والدورات المعتمدة أونلاين.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@qurra.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-6">الشركة</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold mb-6">الدعم</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold mb-6">قانوني</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © 2024 قُرّاء. جميع الحقوق محفوظة.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted hover:bg-primary group rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;