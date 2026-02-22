import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import useLanguage from "../hooks/useLanguage";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useLanguage();

  const PHONE_DISPLAY = "+52 663 204 4384";
  const PHONE_TEL = "+526632044384";
  const EMAIL = "contacto@jmyanabogados.com";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" }); // idle | loading | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return t.contacto.errorNombre;
    if (!form.email.trim()) return t.contacto.errorEmail;
    // Validación simple de email
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return t.contacto.errorEmailInvalid;
    if (!form.subject.trim()) return t.contacto.errorSubject;
    if (form.message.trim().length < 12) return t.contacto.errorMessageLen;
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", msg: err });
      return;
    }

    try {
      setStatus({ type: "loading", msg: t.contacto.sending });

      await emailjs.send(
        "service_3akvftf",
        "template_omqe6id",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "mTC8Hfrh8E4b07bNM",
      );

      setStatus({ type: "success", msg: t.contacto.success });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.log("Error sending email:", error);
      setStatus({ type: "error", msg: t.contacto.error });
    }
  };

  return (
    <section id="consulta" className="py-16 sm:py-20 bg-bg mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-900/10 bg-secondary-50 px-4 py-2 sm:py-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
            <span className="t-body text-[12px] text-primary-900/80">
              {t.contacto.badgeA}
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-accent-500" />
            <span className="t-body text-[12px] text-primary-900/70">
              {t.contacto.badgeB}
            </span>
          </div>

          <h2 className="mt-6 h-title text-3xl sm:text-4xl text-primary-900">
            {t.contacto.title}
          </h2>

          <p className="mt-4 t-body text-primary-900/75 text-[16px] leading-relaxed">
            {t.contacto.desc}
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-primary-900/10 bg-secondary-50 p-6 sm:p-8 shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t.contacto.labelName} required>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-xl border border-primary-900/15 bg-secondary-100 px-4 py-3 t-body text-[14px]
                               text-primary-900 placeholder:text-primary-900/40 focus-ring"
                    placeholder={t.contacto.placeholderName}
                    autoComplete="name"
                  />
                </Field>

                <Field label={t.contacto.labelEmail} required>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full rounded-xl border border-primary-900/15 bg-secondary-100 px-4 py-3 t-body text-[14px]
                               text-primary-900 placeholder:text-primary-900/40 focus-ring"
                    placeholder={t.contacto.placeholderEmail}
                    autoComplete="email"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label={t.contacto.labelSubject} required>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    className="w-full rounded-xl border border-primary-900/15 bg-secondary-100 px-4 py-3 t-body text-[14px]
                               text-primary-900 placeholder:text-primary-900/40 focus-ring"
                    placeholder={t.contacto.placeholderSubject}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label={t.contacto.labelMessage} required>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    className="w-full rounded-xl border border-primary-900/15 bg-secondary-100 px-4 py-3 t-body text-[14px]
                               text-primary-900 placeholder:text-primary-900/40 focus-ring resize-y"
                    placeholder={t.contacto.placeholderMessage}
                  />
                </Field>
              </div>

              {/* Status */}
              {status.type !== "idle" && (
                <div
                  className={[
                    "mt-5 rounded-2xl border px-4 py-3 t-body text-[13px] flex items-start gap-2",
                    status.type === "success"
                      ? "border-success-200 bg-success-50 text-success-800"
                      : status.type === "error"
                        ? "border-danger-200 bg-danger-50 text-danger-800"
                        : "border-info-200 bg-info-50 text-info-800",
                  ].join(" ")}
                >
                  {status.type === "success" ? (
                    <CheckCircle size={16} className="mt-0.5" />
                  ) : status.type === "error" ? (
                    <AlertTriangle size={16} className="mt-0.5" />
                  ) : (
                    <Send size={16} className="mt-0.5" />
                  )}
                  <span>{status.msg}</span>
                </div>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 t-body text-[15px] font-semibold
                             bg-accent-500 text-accent-50 hover:bg-accent-600 transition
                             shadow-[0_8px_20px_rgba(0,0,0,0.08)] focus-ring
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {status.type === "loading"
                    ? t.contacto.sending
                    : t.contacto.cta}
                </button>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 t-body text-[15px] font-semibold
                             border border-primary-900/15 bg-secondary-100 hover:bg-secondary-200 transition
                             shadow-[0_6px_16px_rgba(0,0,0,0.06)] focus-ring"
                >
                  <Phone size={18} />
                  {t.contacto.call}
                </a>
              </div>

              <div className="mt-4 t-body text-[12px] text-primary-900/60">
                {t.contacto.disclaimer}
              </div>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-primary-900/10 bg-secondary-50 p-6 sm:p-8 shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
              <h3 className="h-title text-primary-900 text-[22px]">
                {t.contacto.infoTitle}
              </h3>

              <p className="mt-3 t-body text-[14px] text-primary-900/75 leading-relaxed">
                {t.contacto.infoDesc}
              </p>

              <div className="mt-6 space-y-3">
                <InfoRow
                  icon={<Phone size={18} className="text-primary-800" />}
                  label={t.contacto.phone}
                  value={PHONE_DISPLAY}
                  href={`tel:${PHONE_TEL}`}
                />
                <InfoRow
                  icon={<Mail size={18} className="text-primary-800" />}
                  label={t.contacto.email}
                  value={EMAIL}
                  href={`mailto:${EMAIL}`}
                />

                {/* Opcional: ubicación si luego la quieres */}
                <div className="rounded-2xl border border-primary-900/10 bg-secondary-100 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {<MapPin size={18} className="text-primary-800" />}
                    </div>
                    <div>
                      <div className="t-body text-[12px] text-primary-900/60">
                        {t.contacto.location}
                      </div>
                      <div className="t-body text-[14px] text-primary-900/80">
                        Tijuana, Baja California
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-primary-900/10 bg-secondary-100 p-5">
                <div className="t-body text-[12px] text-primary-900/60">
                  {t.contacto.suggestion}
                </div>
                <div className="mt-1 t-body text-[14px] text-primary-900/80">
                  {t.contacto.suggestionA}
                  <span className="font-semibold">
                    {t.contacto.suggestionB}
                  </span>
                  ,{" "}
                  <span className="font-semibold">
                    {t.contacto.suggestionC}
                  </span>
                  ,{" "}
                  <span className="font-semibold">
                    {t.contacto.suggestionD}
                  </span>{" "}
                  {t.contacto.suggestionSeparator}{" "}
                  <span className="font-semibold">
                    {t.contacto.suggestionE}
                  </span>
                  ,{t.contacto.suggestionF}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <div className="mb-2 t-body text-[12px] text-primary-900/70">
        {label} {required && <span className="text-accent-600">*</span>}
      </div>
      {children}
    </label>
  );
}

function InfoRow({ icon, label, value, href }) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-primary-900/10 bg-secondary-100 p-4 hover:bg-secondary-200 transition"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
          <div className="t-body text-[12px] text-primary-900/60">{label}</div>
          <div className="t-body text-[14px] text-primary-900/80">{value}</div>
        </div>
      </div>
    </a>
  );
}
