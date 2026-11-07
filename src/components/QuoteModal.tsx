import React, { useState, useEffect } from 'react';
import { X, Zap, Phone, CheckCircle2, Mail, MessageSquare, ExternalLink, Copy, Check } from 'lucide-react';
import { COMPANY_INFO, LOCATION_GROUPS, SERVICES } from '../data/websiteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledItem?: string;
  onSuccess: (message: string) => void;
}

const TARGET_EMAIL = "sltecmaldives@gmail.com";

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledItem = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: prefilledItem || 'All Types of Generators',
    atoll: 'Malé & Kaafu Atoll',
    island: '',
    generatorModel: '',
    urgency: 'urgent',
    details: '',
  });

  const [loading, setLoading] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledItem) {
      setFormData((prev) => ({ ...prev, service: prefilledItem }));
    }
  }, [prefilledItem]);

  if (!isOpen) return null;

  const priorityLabel = 
    formData.urgency === 'emergency' ? '🚨 EMERGENCY (< 4 Hours)' :
    formData.urgency === 'urgent' ? '⚡ URGENT (< 24 Hours)' : '📅 SCHEDULED MAINTENANCE';

  const formattedDetails = 
    `⚡ URGENT SERVICE REQUEST - SL TEC MALDIVES\n` +
    `-----------------------------------------\n` +
    `• Client Name: ${formData.name}\n` +
    `• Phone/WhatsApp: ${formData.phone}\n` +
    `• Client Email: ${formData.email || 'Not provided'}\n` +
    `• Service Requested: ${formData.service}\n` +
    `• Location (Atoll / District): ${formData.atoll}\n` +
    `• Island / Resort / City / Vessel: ${formData.island || 'Not specified'}\n` +
    `• Equipment / kVA: ${formData.generatorModel || 'Not specified'}\n` +
    `• Priority Level: ${priorityLabel}\n` +
    `• Issue Details: ${formData.details || 'None'}\n` +
    `-----------------------------------------\n` +
    `Destination: ${TARGET_EMAIL} | Hotlines: +960 7370267 (MV) / +94 77 056 8753 (LK)`;

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
    setLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const emailPayload = {
        _subject: `⚡ [SERVICE REQUEST] ${formData.service} - ${formData.name} (${formData.atoll})`,
        _captcha: "false",
        _template: "table",
        "Client Name / Title": formData.name,
        "Phone / WhatsApp": formData.phone,
        "Client Email": formData.email || "Not provided",
        "Service Requested": formData.service,
        "Maldives Atoll Location": formData.atoll,
        "Island / Resort / Vessel": formData.island || "Not specified",
        "Generator Make & Capacity (kVA)": formData.generatorModel || "Not specified",
        "Service Priority Level": priorityLabel,
        "Problem Details & Requirements": formData.details || "None",
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

    setLoading(false);
    setSentSuccess(true);
    onSuccess(`Service request prepared for ${TARGET_EMAIL}! Select your preferred dispatch method below.`);
  };

  const handleReset = () => {
    setSentSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'All Types of Generators',
      atoll: 'Malé & Kaafu Atoll',
      island: '',
      generatorModel: '',
      urgency: 'urgent',
      details: '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#081329] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-500/10 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-orange-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {sentSuccess ? (
          /* SUCCESS DISPATCH PANEL */
          <div className="py-2 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 text-emerald-400" />
            </div>

            <h3 className="font-montserrat font-black text-2xl text-white mb-2">
              Request Ready for {TARGET_EMAIL}!
            </h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Thank you <strong className="text-white">{formData.name}</strong>. Choose how you would like to transmit this request immediately to our engineering team:
            </p>

            {/* Summary Box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-left text-xs space-y-1.5 text-slate-300 mb-6 font-mono">
              <div><span className="text-orange-400 font-bold">Service:</span> {formData.service}</div>
              <div><span className="text-orange-400 font-bold">Priority:</span> {priorityLabel}</div>
              <div><span className="text-orange-400 font-bold">Location:</span> {formData.atoll} {formData.island ? `(${formData.island})` : ''}</div>
              <div><span className="text-orange-400 font-bold">Equipment:</span> {formData.generatorModel || 'Not specified'}</div>
              <div><span className="text-orange-400 font-bold">Client Contact:</span> {formData.phone}</div>
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

              {/* Direct Hotlines (MV & LK) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-slate-900 border border-orange-500/30 text-orange-400 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-orange-500/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call MV: {COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.rawPhoneSL}`}
                  className="py-2.5 px-3 rounded-xl bg-slate-900 border border-orange-500/30 text-orange-400 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-orange-500/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call LK: +94 77 056 8753</span>
                </a>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white underline transition-colors"
            >
              Submit another request
            </button>
          </div>
        ) : (
          /* FORM VIEW */
          <>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-montserrat font-black text-2xl text-white">
                  Request a Service or Quote
                </h3>
                <p className="text-slate-400 text-xs">
                  Emergency dispatch & scheduled maintenance nationwide &bull; Direct to <strong className="text-orange-400">{TARGET_EMAIL}</strong>
                </p>
              </div>
            </div>

            {/* Quick Hotline Notice */}
            <div className="mb-6 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300">Need emergency response right now?</span>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                Call {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Your Name / Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Chief Engineer Mohamed"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 text-white text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+960 7XXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 text-white text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Service or Product Needed *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 text-white text-sm outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Genuine Spare Parts Supply">Genuine Spare Parts Supply (All Brands)</option>
                    <option value="Emergency Breakdown Repair">Emergency Breakdown Repair (Any Island)</option>
                    <option value="Preventive Maintenance Agreement (AMC)">Preventive Maintenance Contract (AMC)</option>
                    <option value="Other Technical Requirement">Other Technical Requirement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Location (Atoll / District) *
                  </label>
                  <select
                    required
                    value={formData.atoll}
                    onChange={(e) => setFormData({ ...formData, atoll: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 text-white text-sm outline-none"
                  >
                    {LOCATION_GROUPS.map((grp) => (
                      <optgroup key={grp.group} label={grp.group} className="bg-slate-950 text-orange-400 font-bold">
                        {grp.locations.map((loc, i) => (
                          <option key={i} value={loc} className="bg-slate-900 text-white font-normal">
                            {loc}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Island / Resort / City / Vessel Name
                  </label>
                  <input
                    type="text"
                    value={formData.island}
                    onChange={(e) => setFormData({ ...formData, island: e.target.value })}
                    placeholder="e.g. Soneva Fushi, Colombo 03, Kandy, Safari Yacht"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 text-white text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Generator Make & kVA
                  </label>
                  <input
                    type="text"
                    value={formData.generatorModel}
                    onChange={(e) => setFormData({ ...formData, generatorModel: e.target.value })}
                    placeholder="e.g. Perkins 650kVA, Cummins 6BT"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 text-white text-sm outline-none"
                  />
                </div>
              </div>

              {/* Urgency selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Service Priority Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'emergency', label: '🚨 Emergency (<4h)' },
                    { id: 'urgent', label: '⚡ Urgent (<24h)' },
                    { id: 'scheduled', label: '📅 Scheduled Maintenance' },
                  ].map((lvl) => (
                    <button
                      type="button"
                      key={lvl.id}
                      onClick={() => setFormData({ ...formData, urgency: lvl.id })}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
                        formData.urgency === lvl.id
                          ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Issue Details / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Provide any additional details or parts needed..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-orange-500 text-white text-sm outline-none resize-none"
                />
              </div>

              {/* Destination notice */}
              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Directly sent to: <strong className="text-orange-400">{TARGET_EMAIL}</strong></span>
                <span className="text-emerald-400">● 24/7 Monitored Dispatch</span>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-montserrat font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/25 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Preparing Request for {TARGET_EMAIL}...</span>
                    </>
                  ) : (
                    <span>Confirm Service Request</span>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
