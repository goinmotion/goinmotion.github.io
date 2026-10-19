
import React from 'react';
import { ArrowRight, Check, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreGateways: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#f7f9fc] border-b border-neutral-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Independent Payment Gateway Advisors</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00112c] tracking-tight leading-[1.1] mb-4">
            Find the Right Payment Gateway for Your Business.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal mb-8 max-w-xl">
            We compare leading payment gateways, negotiate lower transaction rates, and fast-track your merchant approval with dedicated partner support.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#00112c] hover:bg-neutral-800 transition-all rounded-md shadow-xs cursor-pointer"
            >
              <span>Get Gateway Advice</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all rounded-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-neutral-500">
            <span className="flex items-center gap-1.5 text-neutral-700">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Independent Consultation
            </span>
            <span className="flex items-center gap-1.5 text-neutral-700">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Unbiased Comparison
            </span>
            <span className="flex items-center gap-1.5 text-neutral-700">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Fast-Track Approvals
            </span>
          </div>
        </div>

        {/* Partner Logo Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 shrink-0">
            Partnered With Leading Gateways:
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-black text-neutral-800 tracking-tight">
            <span className="hover:text-orange-600 transition-colors">Airwallex</span>
            <span className="text-neutral-300">·</span>
            <span className="hover:text-orange-600 transition-colors">HitPay</span>
            <span className="text-neutral-300">·</span>
            <span className="hover:text-orange-600 transition-colors">Curlec by Razorpay</span>
            <span className="text-neutral-300">·</span>
            <span className="hover:text-orange-600 transition-colors">CommercePay</span>
          </div>
        </div>
      </div>
    </section>
  );
};
