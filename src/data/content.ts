
import { GatewayPartner, SimpleSolution, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'Go Inmotion',
  brandName: 'INMOTION',
  registrationNo: '202603112901 (LA0088931-P)',
  email: 'sales@goinmotion.net',
  phone: '+60 11-3762 1454',
  phoneClean: '+601137621454',
  whatsappUrl: 'https://wa.me/601137621454',
  tagline: 'Payment Gateway Advisors for Growing Businesses',
  heroHeadline: 'Find the Right Payment Gateway for Your Business',
  heroSubhead:
    'We compare payment gateway options, help you evaluate pricing, and support merchant onboarding. Advisory, setup and onboarding services are chargeable and quoted according to your requirements.',
  copyright: '© 2026 Go Inmotion. All rights reserved.',
};

export const PARTNERS: GatewayPartner[] = [
  {
    id: 'hitpay',
    name: 'HitPay',
    badge: 'Best for E-Commerce & Retail POS',
    bestFor: 'Online stores, retail shops, pop-up events',
    description:
      'Payment gateway with e-commerce integrations, payment links and smart card terminal options. Applicable platform, transaction and terminal fees depend on the provider’s current pricing and terms.',
    supportedMethods: [
      'Visa / Mastercard',
      'FPX & PayNow',
      'GrabPay & eWallets',
      'Buy Now Pay Later',
    ],
    settlementSpeed: 'Subject to provider terms',
    referralUrl:
      'https://dashboard.hit-pay.com/register?partner_referral=GOINYPPKZN',
    buttonLabel: 'Register with Partner Code',
  },
  {
    id: 'airwallex',
    name: 'Airwallex',
    badge: 'Best for Multi-Currency & Payouts',
    bestFor: 'Businesses selling globally or paying overseas suppliers',
    description:
      'Multi-currency collection accounts, international payments, corporate cards and supplier payouts. Available currencies, fees and services depend on eligibility and provider terms.',
    supportedMethods: [
      'Multi-Currency Accounts',
      'Global Cards',
      'Local Bank Clearing',
      'International Payouts',
    ],
    settlementSpeed: 'Subject to provider terms',
    referralUrl: 'https://partners.airwallex.com/55f5vh0z0os5',
    buttonLabel: 'Explore Airwallex Partner Offer',
  },
  {
    id: 'curlec',
    name: 'Curlec by Razorpay',
    badge: 'Best for Subscription & Recurring Billing',
    bestFor: 'SaaS companies, gym memberships, recurring service retainers',
    description:
      'Automate recurring collections through supported direct debit and card payment methods. Available features, processing fees and settlement terms depend on the provider.',
    supportedMethods: [
      'FPX Direct Debit',
      'Card Tokenization',
      'Automated Mandates',
      'Scheduled Collections',
    ],
    settlementSpeed: 'Subject to provider terms',
    referralUrl: 'https://wa.me/601137621454/',
    buttonLabel: 'Enquire via Inmotion',
  },
  {
    id: 'commercepay',
    name: 'CommercePay',
    badge: 'Best for High-Volume SEA Merchants',
    bestFor:
      'Regional B2B transactions and alternative Southeast Asian payment methods',
    description:
      'Payment gateway solutions for Southeast Asian merchants, with available payment methods, underwriting requirements and settlement arrangements subject to provider approval.',
    supportedMethods: [
      'Local Bank Transfers',
      'Regional eWallets',
      'High-Volume Processing',
      'API Checkout',
    ],
    settlementSpeed: 'Subject to provider terms',
    referralUrl: 'https://wa.me/601137621454/',
    buttonLabel: 'Enquire via Inmotion',
  },
];

export const SOLUTIONS: SimpleSolution[] = [
  {
    id: 'online-gateway',
    title: 'Online Payment Gateway',
    tagline: 'Accept cards, FPX and eWallets on your website',
    iconType: 'online',
    bestFor: 'Shopify, WooCommerce, custom websites',
    highlights: [
      'Support for cards, online banking and selected eWallets, depending on provider',
      'Available plugins and integrations for supported platforms',
      'Payment processing and fraud tools subject to provider capabilities and terms',
    ],
    partnerNames: ['HitPay', 'CommercePay', 'Curlec'],
  },
  {
    id: 'card-terminals',
    title: 'In-Store POS Terminals',
    tagline: 'Card payment terminals for retail and dining',
    iconType: 'terminal',
    bestFor: 'Retail stores, restaurants, events, trade shows',
    highlights: [
      'Terminal connectivity options depend on the selected device',
      'Card and QR payment acceptance subject to provider support',
      'Terminal rental, transaction and settlement terms depend on the selected provider and merchant eligibility',
    ],
    partnerNames: ['HitPay', 'CommercePay'],
  },
  {
    id: 'recurring-billing',
    title: 'Recurring & Subscription Billing',
    tagline: 'Automated direct debit and card subscriptions',
    iconType: 'recurring',
    bestFor: 'SaaS software, gyms, monthly retainers, tuition',
    highlights: [
      'Recurring collection through supported payment methods',
      'Available retry and failed-payment management features depend on the provider',
      'Digital mandates and approval timelines depend on the payment method and provider',
    ],
    partnerNames: ['Curlec by Razorpay'],
  },
  {
    id: 'cross-border',
    title: 'Cross-Border Payouts & FX',
    tagline: 'Pay overseas suppliers and manage foreign currency payments',
    iconType: 'crossborder',
    bestFor: 'Importers, exporters, global eCommerce sellers',
    highlights: [
      'International payouts to supported countries and payment destinations',
      'Foreign exchange rates and fees depend on the provider, currency and transaction',
      'Foreign currency collection accounts subject to provider availability and approval',
    ],
    partnerNames: ['Airwallex', 'HitPay'],
  },
];

export const WHY_US = [
  {
    title: 'Independent Comparison',
    description:
      'We compare suitable payment providers against your business requirements, available features and quoted pricing.',
  },
  {
    title: 'Commercial Clarity',
    description:
      'We help you evaluate transaction rates and provider charges. Final pricing and any fee waivers are subject to provider approval and terms.',
  },
  {
    title: 'Onboarding Support',
    description:
      'We help you prepare documentation and coordinate with payment provider contacts. Approval decisions and timelines remain subject to the provider.',
  },
  {
    title: 'Transparent Service Fees',
    description:
      'Inmotion charges for advisory, setup and onboarding services. Fees depend on your requirements and are quoted for approval before work begins. Partner referral compensation may also apply.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Share Your Payment Needs',
    desc:
      'Tell us what you sell, where your customers are and your estimated monthly payment volume. We will clarify the scope of support you need.',
  },
  {
    step: '2',
    title: 'Review Options & Fees',
    desc:
      'We compare suitable payment providers and outline the proposed advisory, setup and onboarding fees for your approval.',
  },
  {
    step: '3',
    title: 'Proceed with Onboarding',
    desc:
      'Once you approve the scope and fees, we assist with documentation and onboarding, subject to the payment provider’s requirements and approval.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question:
      'Why use Go Inmotion instead of applying to a gateway directly?',
    answer:
      'We help you compare providers, understand pricing and identify suitable payment solutions for your business. Inmotion’s advisory, setup and onboarding services are chargeable. You can also apply directly to a provider if you prefer to manage the process yourself.',
  },
  {
    question:
      'How much does Go Inmotion charge for advisory, setup and onboarding?',
    answer:
      'Our services are chargeable. Fees depend on the scope of work and will be quoted for your approval before we begin. Payment gateway transaction fees and other provider charges are separate. Where applicable, we may also receive referral compensation from payment gateway partners.',
  },
  {
    question: 'Which payment methods can my customers use?',
    answer:
      'Available methods depend on the selected provider and your approved merchant account. Options may include credit and debit cards, FPX online banking, eWallets and other supported payment methods. We will help you confirm availability with the provider.',
  },
  {
    question: 'How long does merchant account approval take?',
    answer:
      'Approval timelines vary by provider, business type, risk assessment and the completeness of your documents. We help coordinate the process, but approval and timing are determined by the payment provider.',
  },
  {
    question: 'Are payment gateway fees included in Inmotion’s service fees?',
    answer:
      'No. Inmotion’s advisory, setup and onboarding fees are separate from payment gateway transaction fees, terminal charges, bank charges and other fees imposed by the selected provider. Provider charges should be reviewed against the provider’s quotation and merchant agreement.',
  },
  {
    question: 'Do I have to proceed after receiving a quotation?',
    answer:
      'No. You can review the proposed scope and fees before deciding whether to proceed. Work will begin after you approve the agreed scope and applicable fees.',
  },
];

export const PRIVACY_POLICY_DATA = {
  lastUpdated: 'July 2026',
  articles: [
    {
      title: 'Introduction',
      content: [
        'Welcome to Go Inmotion. We respect your privacy and are committed to protecting your personal information.',
        'This Privacy Policy explains how we collect and use your details when you enquire about payment gateway advisory, setup, onboarding or referral services.',
      ],
    },
    {
      title: 'Information We Collect',
      content: [
        'We collect details you provide such as name, company name, email, phone number and payment requirements.',
        'We do not collect or store credit card numbers or banking passwords through this website.',
      ],
    },
    {
      title: 'How We Use Information',
      content: [
        'We use your details to respond to enquiries, prepare relevant service quotations, provide agreed services and connect you with payment providers you choose to engage.',
        'Where applicable, information may be shared with a selected provider with your knowledge or direction to support an enquiry or onboarding process.',
      ],
    },
    {
      title: 'Contact Details',
      content: [
        'Go Inmotion',
        'Registration: 202603112901 (LA0088931-P)',
        'Email: sales@goinmotion.net',
        'Phone: +60 11-3762 1454',
      ],
    },
  ],
};

export const TERMS_OF_SERVICE_DATA = {
  lastUpdated: 'July 2026',
  articles: [
    {
      title: 'Nature of Service',
      content: [
        'Go Inmotion operates as an independent commercial and payment gateway advisory business. Our services may include paid advisory, setup, documentation and onboarding support.',
        'Service scope, fees and applicable terms will be provided for customer approval before work begins.',
        'We do not directly process customer payments or hold merchant funds. Payment gateway and acquiring services are provided by third-party providers, subject to their own merchant agreements, eligibility requirements and regulatory obligations.',
      ],
    },
    {
      title: 'Third-Party Providers',
      content: [
        'Payment providers independently determine merchant eligibility, approval, processing rates, settlement timing, supported payment methods and other service terms.',
        'Any provider pricing or product information shared by Go Inmotion should be confirmed against the provider’s current quotation and merchant agreement.',
      ],
    },
    {
      title: 'Referral Compensation',
      content: [
        'Where applicable, Go Inmotion may receive referral compensation or other commercial benefits from payment provider partners. This does not replace or automatically waive the fees payable for Inmotion’s own services.',
      ],
    },
  ],
};
