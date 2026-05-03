import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Check,
  Truck,
  Wallet,
  ShieldCheck,
  Leaf,
  Star,
  Flame,
  Sparkles,
  ArrowRight,
  Clock,
  Heart,
  Zap,
  Plus,
} from "lucide-react";
import bottleImg from "@/assets/daynee-bottle.png";
import zahidiImg from "@/assets/zahidi-pack.png";
import curvyImg from "@/assets/curvy-lifestyle.jpg";
import lifestyleImg from "@/assets/confidence-lifestyle.jpg";

import testimonialVideo1 from "@/assets/testimonial-video-1.mp4";
import testimonialVideo2 from "@/assets/testimonial-video-2.mp4";
import testimonialVideo3 from "@/assets/testimonial-video-3.mp4";
import testimonialPoster1 from "@/assets/testimonial-video-1-poster.jpg";
import testimonialPoster2 from "@/assets/testimonial-video-2-poster.jpg";
import testimonialPoster3 from "@/assets/testimonial-video-3-poster.jpg";
import testimonialPhoto1 from "@/assets/testimonial-1.jpeg";
import testimonialPhoto2 from "@/assets/testimonial-2.jpeg";
import testimonialPhoto3 from "@/assets/testimonial-3.jpeg";
import testimonialPhoto4 from "@/assets/testimonial-4.jpeg";

type TestimonialItem = {
  type: "video" | "image";
  src: string;
  poster?: string;
  name: string;
  quote: string;
};

// Hook section — top of page (3 items)
const testimonialsHook: TestimonialItem[] = [
  {
    type: "video",
    src: testimonialVideo1,
    poster: testimonialPoster1,
    name: "Adaeze — Lagos",
    quote: "I never believed gummies could shape my body like this. My jeans fit different now!",
  },
  {
    type: "image",
    src: testimonialPhoto1,
    name: "Chiamaka — Abuja",
    quote: "Before & after — 6 weeks on Daynee. My hips finally filled out naturally.",
  },
  {
    type: "image",
    src: testimonialPhoto4,
    name: "Ngozi — Enugu",
    quote: "From flat to fully curvy. The Zahidi combo really speeds things up.",
  },
];

// Proof section — before order (4 items)
const testimonialsProof: TestimonialItem[] = [
  {
    type: "video",
    src: testimonialVideo2,
    poster: testimonialPoster2,
    name: "Tolu — Ibadan",
    quote: "Week 3 update! My butt is rounder and my confidence is on another level.",
  },
  {
    type: "video",
    src: testimonialVideo3,
    poster: testimonialPoster3,
    name: "Fatima — Kano",
    quote: "Honest review after the combo pack — results speak for themselves.",
  },
  {
    type: "image",
    src: testimonialPhoto2,
    name: "Blessing — Port Harcourt",
    quote: "Side by side after 5 weeks. No surgery, no injections — just consistency.",
  },
  {
    type: "image",
    src: testimonialPhoto3,
    name: "Amaka — Lagos",
    quote: "All my clothes are tight now 😩 I had to send these pictures to my friends!",
  },
];

const marqueeItems = [
  "ONLY 12 PACKS LEFT AT PROMO PRICE",
  "FREE DELIVERY NATIONWIDE",
  "PAY ON DELIVERY — NO UPFRONT PAYMENT",
  "8,000+ NIGERIAN WOMEN ALREADY CURVIER",
  "30-DAY MONEY-BACK GUARANTEE",
  "100% NATURAL & SAFE",
];

const trustBadges = [
  { icon: Check, label: "NAFDAC Compliant" },
  { icon: Leaf, label: "100% Natural Formula" },
  { icon: Truck, label: "Free Delivery" },
  { icon: Wallet, label: "Pay on Delivery" },
  { icon: ShieldCheck, label: "30-Day Money-Back" },
  { icon: Star, label: "4.9 / 5 Rating" },
];



const benefits = [
  {
    icon: Heart,
    title: "Targeted Curve Enhancement",
    body: "Encourages healthy fat storage in the hip & butt area only — not your tummy, arms or face.",
  },
  {
    icon: Zap,
    title: "Tones the Glute Muscles",
    body: "Whey Protein Isolate + Creatine help build, lift and round the muscle in the buttock area.",
  },
  {
    icon: Sparkles,
    title: "Smoother, Firmer Skin",
    body: "Vitamin C & Vitamin E boost collagen so your skin stays tight and glowing as you fill out.",
  },
  {
    icon: Leaf,
    title: "100% Natural Phytoestrogens",
    body: "Pueraria Mirifica, Maca Root, Fenugreek, Dong Quai & Wild Yam — feminine shaping the natural way.",
  },
];

const ingredients = [
  { name: "Maca Root & Fenugreek", body: "Hormone balancing & curve support — classic women's wellness power-duo." },
  { name: "Pueraria Mirifica", body: "A potent phytoestrogen that mimics natural body processes for feminine shaping." },
  { name: "Whey Protein Isolate + Creatine", body: "The 'building blocks' for the muscle part of your booty." },
  { name: "Dong Quai & Wild Yam", body: "Support overall female wellness and hormonal health." },
  { name: "Vitamin C & E", body: "Promote collagen production for smoother, firmer skin as your curves grow." },
];

const reviews = [
  {
    initials: "AO",
    name: "Amaka O.",
    location: "Lagos, Nigeria",
    quote:
      "I added the Zahidi Vita Plus combo and within 2 weeks my jeans were getting tight at the back. My friends keep asking what I'm using. I'm on my second bottle now.",
    tag: "Fuller hips in 2 weeks",
    bottles: "Combo Pack",
  },
  {
    initials: "BF",
    name: "Blessing F.",
    location: "Abuja, Nigeria",
    quote:
      "I was scared of injections and BBL. These gummies changed my body shape naturally. By week 4 I had noticeable lift and roundness — no weight gain anywhere else.",
    tag: "Rounder, lifted butt",
    bottles: "2 Bottles",
  },
  {
    initials: "CN",
    name: "Chioma N.",
    location: "Port Harcourt",
    quote:
      "After 3 weeks on the combo, I had to buy new jeans. My waist stayed the same but my hips and butt filled out perfectly. Best decision ever.",
    tag: "Targeted shaping",
    bottles: "Combo Pack",
  },
  {
    initials: "TY",
    name: "Tolu Y.",
    location: "Ibadan, Nigeria",
    quote:
      "Tasty gummies, easy routine. I take 2 in the morning and one Zahidi at night. By week 5 my confidence was completely different. People stare for the right reasons now.",
    tag: "Confidence boost",
    bottles: "Combo Pack",
  },
];

const timeline = [
  {
    n: "1",
    range: "Weeks 1–2",
    title: "Body adjusting & balancing",
    body: "Phytoestrogens begin balancing your hormones. Nutrients start being directed to the hip and butt area. Most early-stoppers quit here — right before results.",
  },
  {
    n: "2",
    range: "Weeks 3–4",
    title: "Visible firmness & lift",
    body: "Glute muscles tighten. Hips begin to fill. Jeans fit different. Combo users (with Zahidi Vita Plus) often see results from week 2.",
  },
  {
    n: "3",
    range: "Weeks 5–8",
    title: "Full curve transformation",
    body: "Rounder, fuller, lifted shape that stays. Skin tightens through collagen support. This is when people start asking what you're doing.",
  },
];

const packs = [
  {
    name: "Starter",
    qty: "1 Bottle",
    price: "₦25,000",
    old: "₦35,000",
    discount: "47% OFF Today",
    features: ["1 bottle — 60 vegan gummies", "30-day supply", "Free delivery", "Pay on delivery"],
    note: "Good for trial. Most women re-order — ordering 2 upfront avoids the delivery gap that breaks momentum.",
    cta: "Order 1 Bottle",
    highlight: false,
  },
  {
    name: "Curve Combo ⭐",
    qty: "1 Gummies Bottle +  1 Zahidi Pack",
    price: "₦30,000",
    old: "₦45,000",
    discount: "FASTEST RESULTS — 2 Week Boost",
    features: [
      "1 bottle Daynee Gummies (60 ct)",
      "1 pack Zahidi Vita Plus (3×10 tablets)",
      "Visible results in as little as 2 weeks",
      "Free delivery nationwide",
      "Pay on delivery",
    ],
    note: "Our most-recommended pack. The combo customers give us the highest 5-star reviews.",
    cta: "Order Combo — Fastest Result",
    highlight: true,
    badge: "🔥 Best Seller — Fastest Results",
  },
  {
    name: "Full Transformation",
    qty: "2 Gummies Bottles + 2 Zahidi Pack",
    price: "₦55,000",
    old: "₦75,000",
    discount: "56% OFF — Lock-In Pack",
    features: [
      "2 bottles Daynee Gummies (120 pcs)",
      "2 pack Zahidi Vita Plus",
      "Full 8-week curve cycle",
      "Free priority delivery",
      "Pay on delivery",
      "WhatsApp priority support",
    ],
    note: "Choose this if you want full, sustained, lock-in curves with no re-order gap.",
    cta: "Order Full Transformation",
    highlight: false,
    badge: "💎 Maximum Results",
  },
];

const faqs = [
  {
    q: "Will Daynee Gummies make me gain weight all over?",
    a: "No. Daynee is formulated for targeted enhancement — the natural phytoestrogens (Pueraria Mirifica, Maca, Fenugreek) direct fat storage specifically to the hips and butt area, not your tummy, arms or face.",
  },
  {
    q: "Why is the Zahidi Vita Plus combo recommended?",
    a: "The gummies provide the building blocks (proteins, phytoestrogens, vitamins). Zahidi Vita Plus tells your body to use them faster. Customers using the combo typically see visible results in 2 weeks instead of 4.",
  },
  {
    q: "How do I take them?",
    a: "Gummies alone: 2 gummies at night. With Zahidi combo: take the 2 gummies in the morning, and 1 Zahidi tablet at night after eating. Be consistent — that's the secret.",
  },
  {
    q: "Are there side effects?",
    a: "All ingredients are natural and have no known major side effects when taken as directed. Avoid if pregnant or breastfeeding. Consult your doctor if you have a medical condition.",
  },
  {
    q: "How fast will I see results?",
    a: "Most women feel firmer and notice slight lift within 3–4 weeks on gummies alone. With the Zahidi combo, many see clear changes in as little as 2 weeks.",
  },
  {
    q: "Do you deliver to my state?",
    a: "Yes — we deliver to all 36 states and FCT. Delivery is free and you pay on delivery when the package arrives.",
  },
  {
    q: "Is this safe long-term?",
    a: "Yes. The formula is plant-based and designed for women's wellness. You can use it consistently for 2–3 months, then maintain with periodic use.",
  },
];

const Countdown = () => {
  const [time, setTime] = useState({ h: 2, m: 47, s: 32 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {[
        { v: pad(time.h), l: "hours" },
        { v: pad(time.m), l: "min" },
        { v: pad(time.s), l: "sec" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold tabular-nums w-20 sm:w-24 rounded-xl bg-secondary/60 border border-border py-2">
              {item.v}
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{item.l}</div>
          </div>
          {i < 2 && <div className="text-3xl text-muted-foreground -mt-6">:</div>}
        </div>
      ))}
    </div>
  );
};

const scrollToOrder = () => {
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
};
const scrollToForm = () => {
  document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
};

const NIGERIAN_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa",
  "Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger",
  "Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe",
  "Zamfara","FCT",
];

const ORDER_PACKAGES = [
  { value: "1 Bottle (25,000 Naira)", label: "1 Bottle - 25,000 Naira" },
  { value: "1 Bottle + Zahidi Combo (30,000 Naira)", label: "1 Bottle + 1 Zahidi Vital Plus Pack — 30,000 Naira (Power Combo) ⭐" },
  { value: "2 Bottles (45,000 Naira)", label: "2 Bottles - 45,000 Naira  (Recommended)" },
  { value: "2 Bottles + 2 Zahidi Pack Combo (55,000 Naira)", label: "2 Bottles + 2 Zahidi Vital Plus Pack — 55,000 Naira (Power Combo) ⭐⭐" },
  { value: "3 Bottles (65,000 Naira)", label: "3 Bottles - 65,000 Naira (Complete Dosage )" },
  { value: "3 Bottles + 3 Zahidi Pack Combo (70,000 Naira)", label: "3 Bottles + 3 Zahidi Vital Plus Pack — 70,000 Naira (Complete Dosage + Power Combo) ⭐⭐⭐" },
];

const SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbzNx523zf-GvmYI5iCXYmnDNFycMtK1rviqMDc5exXTXjh43fqO2YuUJ1LVrbzB35kzrw/exec";

const OrderForm = ({ defaultPack }: { defaultPack?: string }) => {
  const [pkg, setPkg] = useState(""); // This starts empty
  const [submitting, setSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showAgreementError, setShowAgreementError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
 

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const secondphone = String(fd.get("secondphone") || "").trim();
    const state = String(fd.get("state") || "").trim();
    const address = String(fd.get("address") || "").trim();

    const errors: { [key: string]: string } = {};

    // Validate name - only alphabets and spaces
    if (!name) {
      errors.name = "Full name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
      errors.name = "Name should only contain letters and spaces";
    }

    if (!phone) {
      errors.phone = "Phone number is required";
    }

    if (!secondphone) {
      errors.secondphone = "WhatsApp number is required";
    }

    if (!state) {
      errors.state = "State is required";
    }

    if (!address) {
      errors.address = "Street address is required";
    }

    if (!pkg) {
      errors.package = "Please select a package";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      
      // Find the first field with an error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
      
      toast({ 
        title: `Please fill in all required fields`, 
        variant: "destructive" 
      });
      
      return;
    }

    if (!agreedToTerms) {
      setShowAgreementError(true);
      toast({ title: "Please tick the agreement box to continue", variant: "destructive" });
      
      // Scroll to agreement checkbox
      const agreementCheckbox = document.getElementById("agreement");
      agreementCheckbox?.scrollIntoView({ behavior: "smooth", block: "center" });
      agreementCheckbox?.focus();
      
      return;
    }

    setShowAgreementError(false);
    setFieldErrors({});

    setSubmitting(true);
    const body = new URLSearchParams({
      name: `${name} (${pkg})`,
      phone,
      secondphone,
      state,
      address,
    }).toString();

    const finish = () => {
      setSubmitting(false);
      toast({
        title: "Order received! 🎉",
        description: "Our team will call you shortly to confirm delivery.",
      });
      form.reset();
      setPkg("");
      setFieldErrors({});
      // Redirect to success page after 1.5 seconds
      setTimeout(() => {
        window.location.href = "/success.html";
      }, 1500);
    };

    try {
      await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        mode: "cors",
        cache: "no-cache",
        redirect: "follow",
        credentials: "omit",
      });
      finish();
    } catch {
      try {
        await fetch(SHEETS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
          mode: "no-cors",
          cache: "no-cache",
          credentials: "omit",
        });
      } catch {
        // ignore — Sheets often returns opaque
      }
      finish();
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div id="package" className="space-y-3">
        <Label className="text-base font-display font-bold">Select Your Package</Label>
        <RadioGroup value={pkg} onValueChange={(val) => {
          setPkg(val);
          setFieldErrors({ ...fieldErrors, package: "" });
        }} className="grid gap-2">
          {ORDER_PACKAGES.map((p) => (
            <label
              key={p.value}
              htmlFor={`pkg-${p.value}`}
              className={`flex items-start gap-3 rounded-xl border p-3 md:p-4 cursor-pointer transition-smooth ${
                pkg === p.value
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary/30 hover:border-primary/40"
              }`}
            >
              <RadioGroupItem id={`pkg-${p.value}`} value={p.value} className="mt-1" />
              <span className="text-sm md:text-base">{p.label}</span>
            </label>
          ))}
        </RadioGroup>
        {fieldErrors.package && (
          <p className="text-sm text-destructive font-semibold flex items-center gap-1">
            ✕ {fieldErrors.package}
          </p>
        )}
      </div>

      <div
        className="rounded-xl border-2 border-destructive/60 bg-destructive/15 p-6 text-center shadow-lg"
        role="alert"
      >
        <div className="font-display font-extrabold text-destructive mb-2 text-2xl">⚠️ IMPORTANT NOTICE</div>
        <p className="text-base text-foreground/95 font-semibold leading-relaxed">
          Please do not fill out this form if you are not ready to receive this product within 1–2 days.
          A lot is spent to deliver this product for free to you. Thank you for your understanding.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          name="name" 
          type="text" 
          placeholder="Enter your full name"
          onInput={(e) => {
            const input = e.currentTarget;
            input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
          }}
          required 
        />
        {fieldErrors.name && (
          <p className="text-sm text-destructive font-semibold flex items-center gap-1">
            ✕ {fieldErrors.name}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            pattern="[0-9]*" 
            inputMode="numeric" 
            required 
          />
          {fieldErrors.phone && (
            <p className="text-sm text-destructive font-semibold flex items-center gap-1">
              ✕ {fieldErrors.phone}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="secondphone">Second Phone (WhatsApp)</Label>
          <Input 
            id="secondphone" 
            name="secondphone" 
            type="tel" 
            pattern="[0-9]*" 
            inputMode="numeric" 
            required 
          />
          {fieldErrors.secondphone && (
            <p className="text-sm text-destructive font-semibold flex items-center gap-1">
              ✕ {fieldErrors.secondphone}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="state">State</Label>
        <select
          id="state"
          name="state"
          required
          defaultValue=""
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="" disabled>Select your state</option>
          {NIGERIAN_STATES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {fieldErrors.state && (
          <p className="text-sm text-destructive font-semibold flex items-center gap-1">
            ✕ {fieldErrors.state}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Street Address</Label>
        <Textarea id="address" name="address" required />
        {fieldErrors.address && (
          <p className="text-sm text-destructive font-semibold flex items-center gap-1">
            ✕ {fieldErrors.address}
          </p>
        )}
      </div>

      <div className={`flex items-start gap-3 p-3 rounded-lg border-2 transition-colors ${
        showAgreementError 
          ? "bg-destructive/10 border-destructive/60" 
          : "bg-primary/5 border-primary/20"
      }`}>
        <input
          type="checkbox"
          id="agreement"
          checked={agreedToTerms}
          onChange={(e) => {
            setAgreedToTerms(e.target.checked);
            setShowAgreementError(false);
          }}
          className="mt-1 h-5 w-5 cursor-pointer accent-primary"
        />
        <div className="flex-1">
          <label htmlFor="agreement" className="text-sm text-foreground/90 cursor-pointer block">
            I hereby agree that I have the amount to pay and will be available to receive this delivery within today or tomorrow. I am ready to take calls from the delivery agent.
          </label>
          {showAgreementError && (
            <p className="text-xs text-destructive font-semibold mt-1">✓ Please check this box to continue</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={submitting || !agreedToTerms}
        className="w-full h-14 gradient-primary text-primary-foreground font-bold text-base shadow-glow animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <span className="inline-block h-4 w-4 mr-2 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
            Please wait...
          </>
        ) : (
          <>
            <Wallet className="mr-2 h-5 w-5" /> Submit Order Now
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5 text-success" /> Your details are safe. We only use them to deliver your order.
      </p>
    </form>
  );
};

const LazyVideo = ({ src, poster }: { src: string; poster?: string }) => {
  const [active, setActive] = useState(false);
  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        aria-label="Play testimonial video"
        className="w-full h-full relative group/play overflow-hidden"
      >
        {poster ? (
          <img
            src={poster}
            alt="Video thumbnail"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover/play:scale-105 transition-smooth"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary" />
        )}
        <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/20 transition-smooth" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-glow">
            <span className="text-white text-xl ml-1">▶</span>
          </div>
        </div>
      </button>
    );
  }
  return (
    <video
      src={src}
      poster={poster}
      controls
      autoPlay
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    />
  );
};

const TestimonialGrid = ({ items }: { items: TestimonialItem[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
    {items.map((t, i) => (
      <Card
        key={i}
        className="gradient-card border-border overflow-hidden hover:border-primary/50 transition-smooth group"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary/40">
          {t.type === "video" ? (
            <LazyVideo src={t.src} poster={t.poster} />
          ) : (
            <img
              src={t.src}
              alt={`${t.name} testimonial`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            />
          )}
          <Badge className="absolute top-2 left-2 gradient-primary text-primary-foreground text-[10px] uppercase tracking-wider border-none">
            {t.type === "video" ? "🎥 Video" : "📸 Photo"}
          </Badge>
        </div>
        <div className="p-3 md:p-4">
          <div className="flex items-center gap-1 text-accent text-xs mb-1">★★★★★</div>
          <p className="text-xs md:text-sm text-foreground/90 italic mb-2 line-clamp-3">"{t.quote}"</p>
          <div className="text-[11px] md:text-xs font-semibold text-primary">{t.name}</div>
        </div>
      </Card>
    ))}
  </div>
);

const Index = () => {
  const PACK_NAME_TO_VALUE: Record<string, string> = {
    "Starter": "1 Bottle (25,000 Naira)",
    "Curve Combo ⭐": "1 Gummies Bottle + 1 Zahidi Pack Combo (30,000 Naira)",
    "Full Transformation": "2 Bottles + 2 Zahidi Pack Combos (55,000 Naira)",
  };
  const [selectedPack, setSelectedPack] = useState<string>("");
  const selectPack = (name: string) => setSelectedPack(PACK_NAME_TO_VALUE[name] || name);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Marquee */}
      <div className="gradient-banner text-white py-2.5 overflow-hidden border-b border-black/20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="mx-6 text-sm font-semibold flex items-center gap-2">
              <Flame className="h-4 w-4" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2 font-display font-extrabold text-xl">
            <span className="text-foreground">Day</span>
            <span className="text-gradient-rose">nee</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            12 packs left at promo price
          </div>
          <Button className="gradient-primary text-primary-foreground font-semibold shadow-glow" onClick={scrollToOrder}>
            Order Now <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(600px circle at 80% 20%, hsl(var(--primary) / 0.3), transparent 60%), radial-gradient(500px circle at 10% 80%, hsl(var(--accent) / 0.15), transparent 60%)" }} />
        <div className="container relative py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Badge className="bg-secondary/80 border border-primary/30 text-primary mb-6 px-3 py-1.5 text-xs uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" /> For Naturally Curvier Hips & Butt
            </Badge>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6">
              Fuller Hips, Rounder Butt —{" "}
              <span className="text-primary">the Natural Way.</span>
            </h1>
            <p className="text-xl md:text-lg text-muted-foreground/85 mb-8 max-w-xl leading-relaxed">
              Daynee Hip & Butt Enhancing Gummies use natural phytoestrogens, whey protein and creatine to shape your curves — without surgery, injections or weight gain anywhere else.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["100% Natural", "Pay on Delivery", "Free Delivery", "30-Day Guarantee"].map((t) => (
                <Badge key={t} variant="outline" className="bg-secondary/50 border-border py-1.5 px-3 font-medium">
                  <Check className="h-3.5 w-3.5 mr-1.5 text-success" /> {t}
                </Badge>
              ))}
            </div>
            <Button size="lg" onClick={scrollToOrder} className="gradient-primary text-primary-foreground font-bold text-base h-14 px-8 shadow-glow animate-pulse-glow">
              Get My Curves Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {["AO", "BF", "CN", "TY"].map((i) => (
                  <div key={i} className="h-9 w-9 rounded-full gradient-rose border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-accent">★★★★★</div>
                <div className="text-xs text-muted-foreground">Trusted by 8,000+ Nigerian women</div>
              </div>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative animate-fade-up">
            <Card className="gradient-card border-border p-8 shadow-card-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="text-center relative">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Hip & Butt Enhancing Gummies</div>
                <div className="font-display text-3xl font-extrabold text-gradient-rose mb-6">DAYNEE</div>
                <img src={bottleImg} alt="Daynee Hip & Butt Enhancing Gummies bottle" width={400} height={533} className="mx-auto h-72 w-auto object-contain drop-shadow-2xl" />
                <div className="grid grid-cols-3 gap-3 mt-8">
                  {[
                    { v: "8,000+", l: "Women curvier" },
                    { v: "2 wks", l: "Combo results" },
                    { v: "60", l: "Vegan gummies" },
                  ].map((s) => (
                    <div key={s.l} className="bg-secondary/60 border border-border rounded-lg p-3">
                      <div className="font-display font-bold text-lg text-foreground">{s.v}</div>
                      <div className="text-xs text-muted-foreground">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifestyle banner */}
   

      {/* Testimonials — Hook (top of page) */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="gradient-primary text-primary-foreground border-none px-3 py-1.5 mb-4 uppercase tracking-widest text-xs">
              <Heart className="h-3.5 w-3.5 mr-1.5" /> Real customer results
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-3">
              Watch the <span className="text-primary">curves come in</span>
            </h2>
            <p className="text-lg text-muted-foreground/85 leading-relaxed">
              Real Nigerian women. Real before & afters. No filters, no edits.
            </p>
          </div>
          <TestimonialGrid items={testimonialsHook} />
        </div>
      </section>


      {/* Trust badges */}
      <section className="py-10 bg-secondary/30 border-y border-border">
        <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm">
              <div className="h-9 w-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4" />
              </div>
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits / Science */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-sm uppercase tracking-widest text-primary mb-3">How Daynee works</div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-4">
              A <span className="italic text-primary">"triple threat"</span> for natural curves
            </h2>
            <p className="text-lg text-muted-foreground/85 leading-relaxed">
              Daynee balances feminine hormones, supports glute muscle growth, and improves skin elasticity — all in a tasty gummy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="gradient-card border-border p-7">
                <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center mb-5 shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </Card>
            ))}
          </div>

          {/* Ingredients */}
          <div className="mt-14 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm uppercase tracking-widest text-primary mb-3">The "super-ingredients"</div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold mb-6">
                Proven herbal power, in every gummy
              </h3>
              <ul className="space-y-4">
                {ingredients.map((ing) => (
                  <li key={ing.name} className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold">{ing.name}</div>
                      <div className="text-sm text-muted-foreground">{ing.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="gradient-card border-primary/30 p-6 shadow-card-soft">
              <img src={bottleImg} alt="Daynee Gummies bottle close-up" loading="lazy" width={600} height={600} className="mx-auto h-80 w-auto object-contain drop-shadow-2xl" />
              <div className="text-center mt-4">
                <div className="font-display font-bold text-lg">2 gummies a day</div>
                <p className="text-sm text-muted-foreground">No surgery. No injections. No gym pressure. Just be consistent.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* UPSELL — COMBO */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(700px circle at 50% 50%, hsl(var(--primary) / 0.25), transparent 70%)" }} />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="gradient-primary text-primary-foreground border-none px-3 py-1.5 mb-4 uppercase tracking-widest text-xs">
              <Flame className="h-3.5 w-3.5 mr-1.5" /> Want results in 2 weeks?
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-4">
              The <span className="text-primary">Daynee + Zahidi</span> Combo
            </h2>
            <p className="text-lg text-muted-foreground/85 leading-relaxed">
              Our gummies provide the <strong className="text-foreground">building blocks</strong>. Zahidi Vita Plus tells your body <strong className="text-foreground">how fast to use them</strong>. Together, customers see visible curves in as little as 2 weeks.
            </p>
          </div>

          <Card className="gradient-card border-primary/40 p-6 md:p-10 shadow-glow max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Visual */}
              <div className="relative">
                <div className="flex items-center justify-center gap-2 sm:gap-4 px-1 sm:px-0">
                  <img src={bottleImg} alt="Daynee Hip & Butt Gummies" loading="lazy" width={400} height={533} className="h-48 sm:h-56 md:h-72 w-auto max-w-[42%] object-contain drop-shadow-2xl" />
                  <div className="mx-1 h-10 w-10 sm:h-12 sm:w-12 rounded-full gradient-gold flex items-center justify-center shrink-0 shadow-glow">
                    <Plus className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <img src={zahidiImg} alt="Zahidi Vita Plus capsules pack" loading="lazy" width={400} height={400} className="h-40 sm:h-48 md:h-64 w-auto max-w-[42%] object-contain drop-shadow-2xl" />
                </div>
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground font-bold px-4 py-1.5 shadow-glow">
                  ⚡ Fastest Results
                </Badge>
              </div>

              {/* Copy */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-4">
                  Why customers add <span className="text-accent">Zahidi Vita Plus</span>
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Visible hip & butt changes in as little as 2 weeks",
                    "Boosts appetite & nutrient absorption for the gummies",
                    "Supports faster, fuller curve development",
                    "The #1 reason customers come back to re-order",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-secondary/60 border border-border rounded-xl p-4 mb-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Combo Pricing</div>
                  <div className="flex items-end gap-3">
                    <div className="font-display text-3xl font-extrabold text-accent">₦30,000</div>
                    <div className="text-muted-foreground/50 line-through mb-1">₦45,000</div>
                    <Badge className="bg-success/15 border border-success/40 text-success ml-auto">Save ₦15,000</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Take 2 gummies in the morning + 1 Zahidi tablet at night after eating.
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground font-bold h-14 shadow-glow animate-pulse-glow"
                  onClick={() => { selectPack("Curve Combo ⭐"); scrollToForm(); }}
                >
                  <Sparkles className="mr-2 h-5 w-5" /> Add the Combo to My Order
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Pay on delivery · Free nationwide shipping · NAFDAC compliant
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-sm uppercase tracking-widest text-primary mb-3">Real women, real curves</div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold">
              What happened after <span className="italic text-primary">the combo</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <Card key={r.initials} className="gradient-card border-border p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full gradient-rose text-primary-foreground font-bold flex items-center justify-center shrink-0">
                    {r.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.location}</div>
                  </div>
                  <div className="text-accent text-sm">★★★★★</div>
                </div>
                <p className="text-foreground/90 mb-4 italic">"{r.quote}"</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-success flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5" /> {r.tag}
                  </span>
                  <span className="text-muted-foreground">Verified — {r.bottles}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-sm uppercase tracking-widest text-primary mb-3">Your curve timeline</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">
              From <span className="italic text-gradient-rose">flat</span> to fully curvy
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {timeline.map((t) => (
              <Card key={t.n} className="gradient-card border-border p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl gradient-primary text-primary-foreground font-bold flex items-center justify-center">
                    {t.n}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-primary">{t.range}</div>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Proof (before order) */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm uppercase tracking-widest text-primary mb-3">More results from real customers</div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-4">
              Still not sure? <span className="italic text-primary">See for yourself.</span>
            </h2>
            <p className="text-lg text-muted-foreground/85 leading-relaxed">
              Verified videos and photos from women across Nigeria using Daynee Hip & Butt Gummies.
            </p>
          </div>
          <TestimonialGrid items={testimonialsProof} />
          <div className="text-center mt-10">
            <Button
              size="lg"
              onClick={scrollToOrder}
              className="gradient-primary text-primary-foreground font-bold h-14 px-8 shadow-glow"
            >
              <Sparkles className="mr-2 h-5 w-5" /> I Want These Results Too
            </Button>
          </div>
        </div>
      </section>

      {/* Order Section: Packs + Form */}
      <section id="order" className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-sm uppercase tracking-widest text-primary mb-3">Choose your pack</div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-4">
              Pick the plan that <span className="italic text-primary">gets you curvy</span>
            </h2>
            <p className="text-lg text-muted-foreground/85 leading-relaxed">
              Free delivery, pay on delivery. Combo packs include the Zahidi Vita Plus accelerator.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {packs.map((p) => (
              <Card
                key={p.name}
                className={`relative p-7 transition-smooth ${
                  p.highlight
                    ? "gradient-card border-primary shadow-glow scale-[1.02]"
                    : "gradient-card border-border hover:border-primary/40"
                }`}
              >
                {p.badge && (
                  <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 ${p.highlight ? "gradient-primary text-primary-foreground" : "bg-secondary text-foreground border-border"} font-bold px-4 py-1.5 whitespace-nowrap`}>
                    {p.badge}
                  </Badge>
                )}
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-1">{p.name}</div>
                <h3 className="font-display text-3xl font-extrabold mb-4">{p.qty}</h3>
                <div className="flex items-end gap-3 mb-2">
                  <div className="font-display text-4xl font-extrabold text-gradient-gold">{p.price}</div>
                  <div className="text-muted-foreground line-through text-lg mb-1">{p.old}</div>
                </div>
                <Badge variant="outline" className="bg-success/15 border-success/40 text-success mb-6">
                  {p.discount}
                </Badge>
                <ul className="space-y-2.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => { selectPack(p.name); scrollToForm(); }}
                  className={`w-full h-12 font-bold ${
                    p.highlight ? "gradient-primary text-primary-foreground shadow-glow" : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                  }`}
                >
                  {p.cta}
                </Button>
                <p className="text-xs text-muted-foreground mt-4">{p.note}</p>
              </Card>
            ))}
          </div>

          {/* Order form */}
          <Card id="order-form" className="gradient-card border-primary/30 p-6 md:p-10 max-w-3xl mx-auto shadow-glow">
            <div className="text-center mb-6">
              <div className="text-sm uppercase tracking-widest text-primary mb-2">Place your order</div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold">
                Pay on delivery — fill in your details
              </h3>
            </div>
            <OrderForm defaultPack={selectedPack} />
          </Card>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-secondary/20 border-y border-border">
        <div className="container max-w-3xl">
          <Card className="gradient-card border-primary/30 p-10 text-center">
            <div className="text-sm uppercase tracking-widest text-primary mb-3">Zero risk</div>
            <h2 className="font-display text-5xl font-extrabold mb-6">
              You see curves. Or <span className="italic text-primary">we refund.</span>
            </h2>
            <div className="h-20 w-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 shadow-glow">
              <ShieldCheck className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="font-display font-bold text-xl mb-3">30-Day Curve Guarantee</div>
            <p className="text-muted-foreground">
              Use Daynee for 30 days as instructed. If you don't notice fuller hips, a rounder butt, or a firmer feel — contact us. We'll send another bottle free, or give you a full refund. No arguments.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-widest text-primary mb-3">Got questions?</div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold">
              Frequently asked <span className="italic text-primary">questions</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="gradient-card border border-border rounded-xl px-5">
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(700px circle at 50% 0%, hsl(var(--primary) / 0.3), transparent 70%)" }} />
        <div className="container max-w-3xl relative text-center">
          <div className="text-sm uppercase tracking-widest text-primary mb-3">Claim your pack</div>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-8">
            Order now — <span className="italic text-primary">promo price</span> won't last
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Clock className="h-4 w-4" /> Promo price expires in:
          </div>
          <Countdown />
          <Button
            size="lg"
            onClick={scrollToOrder}
            className="gradient-primary text-primary-foreground font-bold text-lg h-16 px-12 mt-10 shadow-glow animate-pulse-glow"
          >
            <Sparkles className="mr-2 h-5 w-5" /> Get My Curves NOW!
          </Button>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Daynee. 100% Natural · NAFDAC Compliant · Free Delivery Nationwide.
        </div>
      </footer>
    </div>
  );
};

export default Index;
