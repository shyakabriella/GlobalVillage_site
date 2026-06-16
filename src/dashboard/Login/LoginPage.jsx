import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { cn } from "../../lib/utils";

/* ─── tiny helpers ─────────────────────────────────────────────── */
function InputField({ id, label, type = "text", value, onChange, error, icon: Icon, rightSlot, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
            <Icon className="h-4 w-4" />
          </span>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={id}
          className={cn(
            "w-full rounded-none border bg-white/80 px-4 py-3 text-sm text-stone-800 placeholder-stone-300",
            "transition-all duration-200 outline-none",
            "focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-600/10",
            Icon && "pl-10",
            rightSlot && "pr-12",
            error ? "border-red-400 focus:border-red-500 focus:ring-red-500/10" : "border-stone-200"
          )}
        />
        {rightSlot && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightSlot}
          </span>
        )}
      </div>
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500 animate-fade-in">
          <AlertCircle className="h-3 w-3 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── main page ────────────────────────────────────────────────── */
export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = location.state?.returnTo || "/dashboard";

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  function setField(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
    if (globalError) setGlobalError("");
  }

  function validate() {
    const e = {};
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.password) e.password = "Password is required.";
    else if (form.password.length < 4) e.password = "Password is too short.";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    const result = await login(form.email, form.password);
    setLoading(false);

    if (result.ok) {
      navigate(returnTo, { replace: true });
    } else {
      setGlobalError(result.message);
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* ── Left: hotel branding panel ────────────────────────────── */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden flex-col items-center justify-end">
        {/* Hero image */}
        <img
          src="/Danakigali-photos-021.jpg"
          alt="Dana Kigali Hotel"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

        {/* Animated gold accent bar at top */}
        <div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400"
          style={{ width: "100%", animation: "shimmer 3s linear infinite", backgroundSize: "200% 100%" }}
        />

        {/* Brand content */}
        <div className="relative z-10 w-full px-12 pb-16 animate-fade-in-up">
          <div className="mb-6 h-px w-16 bg-amber-500" />
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
            Staff Portal
          </p>
          <h1 className="font-display text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Dana Kigali<br />Hotel
          </h1>
          <p className="text-stone-300 text-sm leading-relaxed max-w-xs">
            Manage reservations, guest experiences, and hotel operations from one place.
          </p>

          {/* Decorative stat badges */}
          <div className="mt-10 flex gap-6">
            {[
              { value: "5★", label: "Rating" },
              { value: "48+", label: "Rooms" },
              { value: "Kigali", label: "Rwanda" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-amber-400 font-display">{value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: login form panel ───────────────────────────────── */}
      <div className="flex flex-1 flex-col items-center justify-center bg-stone-50 px-6 sm:px-12 py-12 relative">

        {/* Top accent bar (mobile only) */}
        <div
          className="absolute top-0 inset-x-0 h-1 lg:hidden bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400"
          style={{ animation: "shimmer 3s linear infinite", backgroundSize: "200% 100%" }}
        />

        <div className="w-full max-w-sm animate-scale-in">
          {/* Logo */}
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <img
              src="/DANA%20HOTEL.png"
              alt="Dana Kigali Hotel"
              className="h-20 w-auto mb-4"
            />
            <h2 className="font-display text-2xl font-bold text-stone-900">
              Welcome back
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Sign in to your staff account to continue.
            </p>
          </div>

          {/* Global error */}
          {globalError && (
            <div className="mb-6 flex items-start gap-3 rounded-none border border-red-200 bg-red-50 px-4 py-3 animate-fade-in">
              <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{globalError}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <InputField
              id="email"
              label="Email Address"
              type="email"
              placeholder="admin@danakigali.com"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              error={errors.email}
              icon={Mail}
            />

            <InputField
              id="password"
              label="Password"
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setField("password", e.target.value)}
              error={errors.password}
              icon={Lock}
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="text-stone-400 hover:text-stone-700 transition-colors p-1"
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />

            {/* Forgot password */}
            <div className="flex justify-end -mt-2">
              <button
                type="button"
                className="text-xs text-amber-700 hover:text-amber-900 underline underline-offset-2 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              id="btn-login"
              type="submit"
              disabled={loading}
              className={cn(
                "relative mt-2 w-full overflow-hidden rounded-none py-3.5 text-sm font-semibold uppercase tracking-[0.18em]",
                "bg-gradient-to-r from-amber-600 to-amber-500 text-white",
                "transition-all duration-300",
                "hover:from-amber-700 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/25",
                "active:scale-[0.98]",
                "disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100",
                "focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
              )}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Signing in…
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer note */}
          <p className="mt-10 text-center text-xs text-stone-400 lg:text-left">
            © {new Date().getFullYear()} Dana Kigali Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
