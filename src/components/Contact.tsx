import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Mail, MessageSquare, ExternalLink, Copy, Check } from 'lucide-react';
import { COMPANY_INFO, MALDIVES_ATOLLS, SERVICES } from '../data/websiteData';

interface ContactProps {
  onSuccessToast: (msg: string) => void;
}

const TARGET_EMAIL = "sltecmaldives@gmail.com";

export const Contact: React.FC<ContactProps> = ({ onSuccessToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'All Types of Generators',
    atoll: 'Malé & Kaafu Atoll',
    island: '',
    generatorModel: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formattedDetails = 
    `⚡ TECHNICAL SERVICE INQUIRY - SL TEC MALDIVES\n` +
    `-----------------------------------------\n` +
    `• Client Name: ${formData.name}\n` +
    `• Phone/WhatsApp: ${formData.phone}\n` +
    `• Client Email: ${formData.email || 'Not provided'}\n` +
    `• Service Required: ${formData.service}\n` +
    `• Atoll Location: ${formData.atoll}\n` +
    `• Island / Resort / Vessel: ${formData.island || 'Not specified'}\n` +
    `• Machine / Generator Model: ${formData.generatorModel || 'Not specified'}\n` +
    `• Notes / Problem Description: ${formData.message || 'None'}\n` +
    `-----------------------------------------\n` +
    `Recipient: ${TARGET_EMAIL} | Hotlines: +960 7370267 (MV) / +94 77 056 8753 (LK)`;

  const emailSubject = encodeURIComponent(`[SERVICE REQUEST] ${formData.service} - ${formData.name} (${formData.atoll})`);
  const emailBody = encodeURIComponent(formattedDetails);
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${emailSubject}&body=${emailBody}`;
  const mailtoUrl = `mailto:${TARGET_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
  const whatsappMvUrl = `https://wa.me/9607370267?text=${encodeURIComponent(formattedDetails)}`;
  const whatsappLkUrl = `https://wa.me/94770568753?text=${encodeURIComponent(formattedDetails)}`;

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(formattedDetails);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Attempt background API dispatch with a strict 3-second timeout so it never hangs
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const emailPayload = {
        _subject: `📩 [TECHNICAL INQUIRY] ${formData.service} - ${formData.name} (${formData.atoll})`,
        _captcha: "false",
        _template: "table",
        "Client Name": formData.name,
        "Phone / WhatsApp": formData.phone,
        "Client Email": formData.email || "Not specified",
        "Service Required": formData.service,
        "Atoll Location": formData.atoll,
        "Island / Resort / Vessel": formData.island || "Not specified",
        "Generator Make & Capacity": formData.generatorModel || "Not specified",
        "Message": formData.message || "None",
        "Target Recipient": TARGET_EMAIL,
      };

      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(emailPayload),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
    } catch (err) {
      console.warn("Background API attempt skipped/timed out; showing direct dispatch options:", err);
    }

    setStatus('submitted');
    onSuccessToast(`Inquiry ready! Click below to send directly to ${TARGET_EMAIL} or via WhatsApp.`);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'All Types of Generators',
      atoll: 'Malé & Kaafu Atoll',
      island: '',
      generatorModel: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#050b17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-0.5 bg-orange-500 rounded-full" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
                Ready to <span className="text-orange-400">Power Up</span> Your Operations?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Contact us today for a free technical consultation, routine maintenance proposal, or immediate breakdown response on your island.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Emergency 24/7 Hotlines
                      </div>
                      <div className="text-[11px] text-orange-400/80">Direct connection to lead engineers</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-orange-500/50 transition-colors group"
                    >
                      <div>
                        <div className="text-[10px] uppercase font-bold text-orange-400">Maldives (MV)</div>
                        <div className="font-montserrat font-black text-sm text-white group-hover:text-orange-300">
                          +960 7370267
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-white font-semibold">Call &rarr;</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.rawPhoneSL}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-orange-500/50 transition-colors group"
                    >
                      <div>
                        <div className="text-[10px] uppercase font-bold text-orange-400">Sri Lanka (LK)</div>
                        <div className="font-montserrat font-black text-sm text-white group-hover:text-orange-300">
                          +94 77 056 8753
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-white font-semibold">Call &rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-11 h-11 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Service Coverage
                    </div>
                    <div className="font-montserrat font-bold text-sm text-white">
                      All Maldives Islands, Resorts & Atolls
                    </div>
                    <div className="text-xs text-slate-400">Maldives & Sri Lanka Operations</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-11 h-11 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Email Support
                    </div>
                    <a href={`mailto:${TARGET_EMAIL}`} className="font-montserrat font-bold text-sm text-orange-400 hover:underline">
                      {TARGET_EMAIL}
                    </a>
                    <div className="text-xs text-slate-400">24/7 Monitored Engineering Desk</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guaranteed Trust badge */}
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-orange-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white block">Official OEM Warranty</span>
                All replacement parts and technical overhauls carry comprehensive workmanship warranties.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#09152e] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              
              {status === 'submitted' ? (
                /* SUCCESS DISPATCH PANEL */
                <div className="py-4 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9 text-emerald-400" />
                  </div>

                  <h3 className="font-montserrat font-black text-2xl text-white mb-2">
                    Inquiry Prepared for {TARGET_EMAIL}!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you <strong className="text-white">{formData.name}</strong>. Choose your preferred way to transmit your technical service request immediately:
                  </p>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-left text-xs space-y-1.5 text-slate-300 mb-6 font-mono">
                    <div><span className="text-orange-400 font-bold">Service:</span> {formData.service}</div>
                    <div><span className="text-orange-400 font-bold">Location:</span> {formData.atoll} {formData.island ? `(${formData.island})` : ''}</div>
                    <div><span className="text-orange-400 font-bold">Equipment:</span> {formData.generatorModel || 'Not specified'}</div>
                    <div><span className="text-orange-400 font-bold">Contact:</span> {formData.phone}</div>
                  </div>

                  {/* High-Converting Dispatch Action Buttons */}
                  <div className="space-y-3 mb-6">
                    {/* 1. Gmail Web One-Click */}
                    <a
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 text-white font-montserrat font-bold text-sm shadow-lg shadow-red-600/25 flex items-center justify-center gap-2.5 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Send to {TARGET_EMAIL} via Gmail Web</span>
                      <ExternalLink className="w-4 h-4 opacity-75" />
                    </a>

                    {/* 2. Direct WhatsApp Dispatch (Both MV & LK) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href={whatsappMvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-montserrat font-bold text-xs shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-1.5 transition-all text-center"
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>WhatsApp MV (+960 7370267)</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-75 shrink-0" />
                      </a>
                      <a
                        href={whatsappLkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-montserrat font-bold text-xs shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-1.5 transition-all text-center"
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>WhatsApp LK (+94 77 056 8753)</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-75 shrink-0" />
                      </a>
                    </div>

                    {/* 3. Default Mail Client / Copy */}
                    <div className="flex gap-2">
                      <a
                        href={mailtoUrl}
                        className="flex-1 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-orange-400" />
                        <span>Default Mail App</span>
                      </a>

                      <button
                        onClick={handleCopyDetails}
                        className="flex-1 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-orange-400" />}
                        <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white underline transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                /* FORM VIEW */
                <>
                  <div className="mb-6">
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-1">
                      Send Technical Inquiry
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Submissions are routed directly to our engineering desk at <span className="text-orange-400 font-semibold">{TARGET_EMAIL}</span>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Your Name / Designation *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Chief Engineer / Resort Manager"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+960 7XXXXXX"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Genuine Spare Parts Supply">Genuine Spare Parts Supply (All Major Brands)</option>
                          <option value="Emergency Breakdown Repair">Emergency Breakdown Repair</option>
                          <option value="Preventive Maintenance Agreement (AMC)">Preventive Maintenance Agreement (AMC)</option>
                          <option value="Other Technical Requirement">Other Technical Requirement</option>
                        </select>
                      </div>

                      {/* Atoll */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Atoll Location *
                        </label>
                        <select
                          name="atoll"
                          required
                          value={formData.atoll}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors"
                        >
                          {MALDIVES_ATOLLS.map((atoll, idx) => (
                            <option key={idx} value={atoll}>
                              {atoll}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Island or Resort Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Island / Resort / Vessel Name
                        </label>
                        <input
                          type="text"
                          name="island"
                          value={formData.island}
                          onChange={handleChange}
                          placeholder="e.g. Soneva Fushi, Safari Vessel, Thilafushi"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors"
                        />
                      </div>

                      {/* Generator Model / kVA */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Generator / Engine Make & Model
                        </label>
                        <input
                          type="text"
                          name="generatorModel"
                          value={formData.generatorModel}
                          onChange={handleChange}
                          placeholder="e.g. Perkins 500 kVA, Cummins 6BT, Yanmar"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Problem Description / Technical Notes
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe symptoms (e.g. high coolant temp, fault code, scheduled service, need spare injectors...)"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl font-montserrat font-bold text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/25 hover:shadow-orange-500/40 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing Inquiry for {TARGET_EMAIL}...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Submit Technical Service Request
                        </span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
