
import React from 'react';
import { WHY_US } from '../data/content';
import { Scale, DollarSign, Zap } from 'lucide-react';

interface WhySectionProps {
  onOpenConsultation: () => void;
}

const icons = [Scale, DollarSign, Zap];

export const WhySection: React.FC<WhySectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="why-inmotion"
      className="py-20 bg-[#f7f9fc] border-b border-neutral-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
            Why Inmotion
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00112c] tracking-tight leading-tight mb-3">
            Why Work With a Payment Gateway Advisor?
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Applying directly to gateways can make comparing rates and
            navigating onboarding more time-consuming. We help you evaluate
            suitable options and coordinate with providers.
          </p>
        </div>

        {/* Three equal-width cards spanning the full container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-10">
          {WHY_US.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="w-full min-w-0 h-full p-6 sm:p-7 rounded-xl border border-neutral-200 bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-5">
                  <Icon
                    className={`w-5 h-5 ${
                      index === 0
                        ? 'text-orange-600'
                        : index === 1
                          ? 'text-emerald-600'
                          : 'text-blue-600'
                    }`}
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#00112c] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom transparency panel */}
        <div className="w-full p-6 rounded-xl border border-neutral-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              Our Approach
            </p>

            <h3 className="text-base sm:text-lg font-bold text-[#00112c] mb-2">
              How does Inmotion work with payment gateways?
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-3xl">
              We compare payment providers and help coordinate merchant
              onboarding. Inmotion's advisory, setup and onboarding services
              are chargeable, with fees quoted for your approval before work
              begins. Where applicable, we may also receive referral
              compensation from payment gateway partners.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="shrink-0 px-5 py-3 text-xs font-bold text-white bg-[#00112c] hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
          >
            Discuss Services &amp; Fees
          </button>
        </div>
      </div>
    </section>
  );
};
