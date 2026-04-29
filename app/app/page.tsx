import {
  Star,
  Check,
  X,
  Smartphone,
  Home as HomeIcon,
  Shield,
  Users,
  TrendingUp,
  MessageCircle,
  Lightbulb,
  Rocket,
  Zap,
  Globe,
  CreditCard,
  Lock,
  Phone,
  Flag,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 font-inter">
      {/* ========== HEADER ========== */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-sm sm:text-base tracking-wide uppercase">
                Social Media Masterclass
              </span>
              <span className="text-gray-500 text-xs hidden sm:inline">
                get access to proven system
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-gray-600 text-sm hidden sm:inline-flex items-center gap-1">
              <Flag className="w-4 h-4" /> EN 🇺🇸
            </span>
            <button className="text-emerald-700 border border-emerald-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-emerald-50 transition">
              Login
            </button>
            <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition hidden sm:inline-block">
              Get Access
            </button>
          </div>
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="gradient-bg relative overflow-hidden py-12 md:py-20 px-4">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Left Column */}
            <div className="flex-1 lg:max-w-[55%] text-center lg:text-left">
              {/* Badge */}
              <div className="badge mb-6">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-white text-xs sm:text-sm font-medium">
                  By Invite Only • No Credit Card Required
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-wide leading-tight">
                Get Unlimited Leads Using{" "}
                <span className="text-amber-300">Social Media</span>
              </h1>

              {/* Subheadline */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6">
                Get strangers to come to you and ask YOU about your product or
                business opportunity—stop going through friends and family.
              </p>

              {/* Glass Card - All You Need */}
              <div className="glass-card p-5 sm:p-6 max-w-md mx-auto lg:mx-0 mb-6 text-left">
                <h3 className="font-bebas text-xl text-white mb-4 tracking-wider">
                  All You Need:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="check-icon">
                      <Check className="w-3 h-3" strokeWidth={4} />
                    </div>
                    <span className="text-white/90 text-sm">
                      A smartphone (just like the one you're using now)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="check-icon">
                      <Check className="w-3 h-3" strokeWidth={4} />
                    </div>
                    <span className="text-white/90 text-sm">
                      A social media account (TikTok, Facebook, Instagram, etc.)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="check-icon">
                      <Check className="w-3 h-3" strokeWidth={4} />
                    </div>
                    <span className="text-white/90 text-sm">
                      Can start from ZERO followers
                    </span>
                  </li>
                </ul>
              </div>

              {/* Extra check items */}
              <ul className="space-y-2 mb-6 max-w-md mx-auto lg:mx-0">
                <li className="flex items-center gap-2 justify-center lg:justify-start text-white/80 text-sm">
                  <div className="check-icon w-5 h-5">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  Unlimited leads — never run out again
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start text-white/80 text-sm">
                  <div className="check-icon w-5 h-5">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  Stop running out of warm contacts
                </li>
                <li className="flex items-center gap-2 justify-center lg:justify-start text-white/80 text-sm">
                  <div className="check-icon w-5 h-5">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  Works for any network marketing company
                </li>
              </ul>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-white/90">
                  <div className="icon-circle-amber w-9 h-9">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold">$1M+ Generated</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <div className="icon-circle-amber w-9 h-9">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold">Work From Home</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <div className="icon-circle-amber w-9 h-9">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold">100% Free Access</span>
                </div>
              </div>

              {/* CTA */}
              <button className="cta-button text-base sm:text-lg">
                <Rocket className="w-5 h-5" />
                Sign Up For The Masterclass (FREE)
              </button>
            </div>

            {/* Right Column - Video Embed */}
            <div className="flex-shrink-0 relative w-full max-w-[500px] lg:max-w-[540px]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500/30 bg-black">
                <iframe
                  src="https://www.veed.io/embed/1aab29ee-8341-47c2-bab2-8f0533bca955?watermark=1&color=&sharing=1&title=1"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  title="Dave Smith's Video - Apr 29, 2026"
                  allowFullScreen
                />
              </div>
              {/* Label Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap z-10">
                A Network Marketer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST BADGE ========== */}
      <section className="bg-gray-50 py-6 px-4 text-center">
        <div className="trust-pill mx-auto">
          <Star className="w-4 h-4 fill-current" />
          Over $1 Million Generated Using This System
        </div>
      </section>

      {/* ========== WHAT YOU'LL LEARN ========== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 tracking-wide">
              What You'll Learn in the{" "}
              <span className="text-emerald-600">Masterclass</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stop chasing your warm market. Learn how to attract leads who
              actually want what you have to offer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Stop Running Out of Contacts",
                desc: "Never again worry about who to talk to next. Build an endless pipeline of prospects.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Attraction Marketing That Actually Works",
                desc: "Make people come to YOU instead of awkwardly chasing friends and family.",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Start From ZERO Followers",
                desc: "You don't need a massive audience. This works with a brand new account.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Works for ANY Network Marketing Company",
                desc: "These strategies are universal and work regardless of what company you're with.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Works on ANY Platform",
                desc: "TikTok, Instagram, Facebook, YouTube — use whatever platform you prefer.",
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Simple, Step-by-Step Master Class",
                desc: "No fluff. Just a clear, actionable roadmap you can follow immediately.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="icon-circle-emerald mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM LINE ========== */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-bg-alt rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h2 className="font-bebas text-3xl sm:text-4xl mb-6 tracking-wide">
              Here's The Bottom Line:
            </h2>
            <p className="text-white/90 leading-relaxed mb-4 text-base sm:text-lg">
              I spent thousands of dollars on ads and burned through my entire
              warm market trying to build my network marketing business. I ran
              out of people to talk to, and my business was stalling.
            </p>
            <p className="text-white/90 leading-relaxed mb-4 text-base sm:text-lg">
              Then I discovered how to use social media to attract perfect
              prospects to me — people who were already interested in what I had
              to offer. No more cold messaging. No more awkward conversations.
            </p>
            <p className="text-amber-400 font-bold text-lg sm:text-xl">
              And I'm going to teach you step by step how to do this. For FREE.
            </p>
          </div>
        </div>
      </section>

      {/* ========== RESULTS SECTION ========== */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="emerald-pill mb-4 mx-auto">
            <TrendingUp className="w-4 h-4" />
            Real Results From Social Media
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 tracking-wide">
            See The Results For Yourself
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Trent's content consistently gets massive reach and engagement using
            the exact system you'll learn in this masterclass.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                img: "/social-proof-1.jpg",
                caption: "254K+ Views & Thousands of Engaged Followers",
              },
              {
                img: "/social-proof-2.jpg",
                caption: "Real-Time Results From Trent's Posts",
              },
              {
                img: "/social-proof-3.jpg",
                caption: "8,807 Comments & Highly Engaged Audience",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-800 font-semibold text-sm">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== THIS COULD BE YOU CTA ========== */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 sm:p-10 md:p-12 text-center border border-slate-700">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white mb-6 tracking-wide">
              This Could Be YOU Getting These Results
            </h2>
            <button className="cta-button text-base sm:text-lg">
              <Rocket className="w-5 h-5" />
              GET FREE ACCESS TO THE MASTERCLASS
            </button>
          </div>
        </div>
      </section>

      {/* ========== SOUND FAMILIAR ========== */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 tracking-wide">
            Sound Familiar?
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Most network marketers struggle with the same problems...
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                border: "border-amber-400",
                emoji: "😰",
                title: "You've Run Out of Leads",
                desc: "Your warm market is exhausted and you don't know where to find new people to talk to.",
              },
              {
                border: "border-emerald-500",
                emoji: "💸",
                title: "Wasting Money on Ads",
                desc: "You've tried paid ads and they burned through your budget without any real results.",
              },
              {
                border: "border-red-500",
                emoji: "📉",
                title: "The Business Is Drying Up",
                desc: "Your team is shrinking and your checks are getting smaller every month.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-sm p-6 border-t-4 ${item.border}`}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOLUTION SECTION ========== */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="icon-circle-amber mx-auto mb-6 w-14 h-14">
            <Lightbulb className="w-7 h-7" />
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white mb-6 tracking-wide">
            The Solution: Social Media Marketing
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            Instead of chasing people down, you'll learn how to create content
            that attracts your ideal prospects to YOU. People who are already
            interested in health, wellness, and making money from home.
          </p>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            No more awkward conversations. No more rejection. Just a simple
            system that brings qualified leads into your inbox every single day.
          </p>
          <p className="text-amber-400 font-bold text-lg sm:text-xl mb-8">
            It's the exact system that has generated over $1 million in revenue.
          </p>
          <button className="cta-button text-base sm:text-lg">
            <Rocket className="w-5 h-5" />
            I WANT THIS SYSTEM (FREE)
          </button>
        </div>
      </section>

      {/* ========== WHY MARKETERS FAIL ========== */}
      <section className="bg-slate-800 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white text-center mb-10 tracking-wide">
            Why Most Network Marketers Fail at Social Media
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "They're Being Too Sales-y",
                desc: "Constantly pitching their product turns people off. Social media is about giving value first.",
              },
              {
                title: "They Don't Know The Algorithm",
                desc: "They post randomly without understanding what actually gets shown to people.",
              },
              {
                title: "They Give Up Too Early",
                desc: "They post for a week, get no results, and quit before the algorithm picks up their content.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-700/50 rounded-xl p-6 border border-slate-600"
              >
                <div className="x-icon mb-4">
                  <X className="w-4 h-4" strokeWidth={3} />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GOOD NEWS ========== */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 sm:p-10 md:p-12 text-center border border-amber-500/30">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white mb-6 tracking-wide">
              The Good News: You Can Learn This
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
              You don't need to be a tech genius or have any prior marketing
              experience. This system has been used by complete beginners to
              generate over{" "}
              <span className="text-amber-400 font-bold">$1 million</span> in
              combined revenue.
            </p>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              If you can use a smartphone, you can do this. It's that simple.
            </p>
            <button className="cta-button text-base sm:text-lg">
              <Zap className="w-5 h-5" />
              GET THE MASTER CLASS NOW (FREE)
            </button>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="emerald-pill mb-4 mx-auto">
            <Users className="w-4 h-4" />
            Join 500+ Network Marketers Getting Results
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-10 tracking-wide">
            Real People. Real Results.
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                avatar: "/avatar-aaron.jpg",
                name: "Aaron",
                location: "Real Estate Investor, Provo UT",
                quote:
                  "This masterclass completely changed how I approach my business. I'm getting 10-15 new leads per day without spending a dime on ads.",
              },
              {
                avatar: "/avatar-trent.jpg",
                name: "Trent",
                location: "Instructor, Salt Lake City UT",
                quote:
                  "I went from struggling to find people to talk to, to having a waitlist of prospects. The social media strategies in this course are game-changing.",
              },
              {
                avatar: "/avatar-denise.jpg",
                name: "Denise R.",
                location: "Former Math Teacher",
                quote:
                  "As someone completely new to social media, I was shocked at how simple this was to implement. Within 30 days I had my first 5 customers from TikTok.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 text-left border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-gray-500 text-xs">{item.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== READY CTA ========== */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 sm:p-10 md:p-12 text-center border border-slate-700">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white mb-4 tracking-wide">
              Ready to Get Your Results?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-2">
              The masterclass is{" "}
              <span className="text-amber-400 font-bold">100% FREE</span> and
              by invite only.
            </p>
            <p className="text-white/60 text-sm mb-8">
              Spots are limited. Claim yours now.
            </p>
            <button className="cta-button text-base sm:text-lg">
              <Rocket className="w-5 h-5" />
              CLAIM MY FREE SPOT NOW
            </button>
          </div>
        </div>
      </section>

      {/* ========== SIGNUP FORM ========== */}
      <section className="bg-gray-100 py-16 px-4" id="signup">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="emerald-pill mb-4 mx-auto">
              <Zap className="w-4 h-4" />
              LIMITED TIME: Free Access Still Available
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 tracking-wide">
              Get Instant Access to the Social Media Masterclass
            </h2>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <span className="trust-pill !bg-gray-200 !text-gray-700 !py-1.5 !px-3 !text-xs">
                <CreditCard className="w-3 h-3" /> No Credit Card
              </span>
              <span className="trust-pill !bg-gray-200 !text-gray-700 !py-1.5 !px-3 !text-xs">
                <Shield className="w-3 h-3" /> 100% Free
              </span>
              <span className="trust-pill !bg-gray-200 !text-gray-700 !py-1.5 !px-3 !text-xs">
                <Lock className="w-3 h-3" /> Invite Only
              </span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700">
            <div className="text-center mb-6">
              <h3 className="font-bebas text-2xl text-white tracking-wide flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5 text-amber-400" />
                Get Instant Access
              </h3>
              <div className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mt-2">
                NO SPAM TEXTS, EVER
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Phone
                </label>
                <div className="flex gap-2">
                  <div className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-3 flex items-center gap-2 text-white">
                    <Flag className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">+1</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
                <p className="text-white/50 text-xs mt-1 flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  Used to verify real accounts only. No payment required for
                  access.
                </p>
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
              <button className="cta-button w-full justify-center text-lg py-4 mt-2">
                <Rocket className="w-5 h-5" />
                YES! GIVE ME FREE ACCESS NOW
              </button>
            </form>

            <div className="text-center mt-6 space-y-2">
              <p className="text-white/50 text-xs flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Secure • 100% Free • 500+ Members
              </p>
              <p className="text-emerald-400 text-xs font-medium flex items-center justify-center gap-1">
                <Zap className="w-3 h-3" /> Instant access • No credit card
                required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT YOU'LL DISCOVER ========== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center mb-10 tracking-wide">
            What you'll discover in this master class:
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "How to create content that attracts your ideal prospect",
              "The exact posting strategy that generated $1M+ in sales",
              "How to turn comments and DMs into paying customers",
              "The simple daily routine that brings in 5-10 leads per day",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100"
              >
                <div className="check-icon">
                  <Check className="w-3 h-3" strokeWidth={4} />
                </div>
                <span className="text-gray-800 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER BANNER ========== */}
      <section className="gradient-footer py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl mb-3 tracking-wide">
            FREE Access - Limited Time Only!
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8">
            Complete training system normally valued at{" "}
            <span className="line-through">$1590</span>
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" /> Step-by-Step
                Training
              </h4>
              <p className="text-white/70 text-sm">
                Every module is designed to take you from zero to generating
                consistent leads.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" /> Proven Templates
              </h4>
              <p className="text-white/70 text-sm">
                Copy-and-paste content templates that have already generated
                millions in sales.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" /> Private Community
              </h4>
              <p className="text-white/70 text-sm">
                Join 500+ members who are already using this system to grow
                their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-950 py-10 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-md">
              S
            </div>
            <span className="font-bold text-white text-lg tracking-wide uppercase">
              Social Media Masterclass
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            © 2026 Social Media Masterclass. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
