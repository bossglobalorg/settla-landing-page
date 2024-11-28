export interface FAQItem {
  question: string;
  answer: string;
  tags: string[];
}

export const defaultFAQs: FAQItem[] = [
  // SENDING MONEY
  {
    question: "How do I create a Settla account?",
    answer:
      'Creating a Settla account is easy! Simply click on "Create an account" page, follow the prompts to enter your details and complete KYC verification. You\'ll be ready to send your first transfer in no time.',
    tags: ["sending money"],
  },
  {
    question: "How do I send money with Settla?",
    answer:
      "Sending money is simple. Log into your Settla account, select the “Send Money” option, input the recipient’s details, choose the amount, and confirm. It’s that easy.",
    tags: ["sending money"],
  },
  {
    question: "Can I send money to multiple currencies?",
    answer:
      "Yes, you can send money in multiple currencies, including USD, GBP, CAD, and more, giving you flexibility to meet diverse needs.",
    tags: ["sending money"],
  },
  {
    question: "Are there limits on how much I can send?",
    answer:
      "Transaction limits depend on your account type and verification level. For larger transfers, simply ensure your KYB/KYC verification is complete.",
    tags: ["sending money"],
  },

  // MANAGING YOUR ACCOUNT
  {
    question: "How do I access my Settla account?",
    answer:
      "Access your account by logging in via the Settla app or website using your registered email and password.",
    tags: ["managing your account"],
  },
  {
    question: "Can I manage multiple wallets?",
    answer:
      "Absolutely. Settla allows you to manage multiple currency wallets for seamless transactions and better control over your finances.",
    tags: ["managing your account"],
  },
  {
    question: "What if I forget my password?",
    answer:
      "Use the “Forgot Password” option on the login page to reset your password securely.",
    tags: ["managing your account"],
  },

  // RECEIVING MONEY
  {
    question: "How do I receive money using Settla?",
    answer:
      "Share your Settla account details or wallet address with the sender. Once they transfer the funds, they will appear in your account.",
    tags: ["receiving money"],
  },
  {
    question: "Can I receive payments from other countries?",
    answer:
      "Yes, Settla supports international payments, allowing you to receive funds from across the globe.",
    tags: ["receiving money"],
  },
  {
    question: "Are there fees for receiving money?",
    answer:
      "Receiving money is often free, but currency conversion fees may apply depending on the transaction.",
    tags: ["receiving money"],
  },

  // SETTLA SUPPORT
  {
    question: "How can I contact Settla support?",
    answer:
      "Reach us 24/7 through our in-app chat, email support, or the “Contact Us” page on our website.",
    tags: ["settla support"],
  },
  {
    question: "Does Settla offer multilingual support?",
    answer:
      "Yes, our support team is equipped to assist you in multiple languages to ensure smooth communication.",
    tags: ["settla support"],
  },

  // CONVERSION
  {
    question: "How does currency conversion work on Settla?",
    answer:
      "Settla provides real-time exchange rates for transparent conversions. Choose your currencies, confirm the rate, and convert seamlessly within your wallet.",
    tags: ["conversion"],
  },
  {
    question: "Are there hidden fees for currency conversion?",
    answer:
      "No hidden fees! You'll always see the exact rate and cost before confirming any transaction",
    tags: ["conversion"],
  },

  // PAY-IN
  {
    question: "How do I deposit money into my Settla account?",
    answer:
      "Fund your account via bank transfer, debit/credit card, or supported mobile wallets.",
    tags: ["pay-in"],
  },
  {
    question: "Can I add money in multiple currencies?",
    answer:
      "Yes, you can add funds in supported currencies like USD, GBP, CAD, and more.",
    tags: ["pay-in"],
  },

  // ACCOUNT
  {
    question: "How do I set up a Settla account?",
    answer:
      "Sign up with your email, complete the KYC/KYB verification, and you’re ready to start.",
    tags: ["account"],
  },
  {
    question: "Is Settla available for both personal and business accounts?",
    answer:
      "Yes, we offer solutions tailored for personal use and minority/ethnically diverse businesses.",
    tags: ["account"],
  },

  //  SECURITY
  {
    question: "Is my money safe with Settla?",
    answer:
      "Absolutely. Settla uses top-tier encryption, fraud detection, and regulatory compliance to ensure your funds and data are secure.",
    tags: ["security"],
  },
  {
    question: "What should I do if I suspect fraud?",
    answer:
      "Contact Settla support immediately if you notice any suspicious activity.",
    tags: ["security"],
  },

  //  TRACK A PAYMENT
  {
    question: "How can I track my payments on Settla?",
    answer:
      "Use the “Transaction History” feature to see real-time updates on the status of your payments.",
    tags: ["track a payment"],
  },
  {
    question: "What if my payment is delayed?",
    answer:
      "Payments are typically fast, but delays can happen due to bank processing times. Check your transaction details or contact Settla support for help.",
    tags: ["track a payment"],
  },

  // {
  //   question: "What currencies can I send and receive with Settla?",
  //   answer:
  //     "Settla supports major currencies, including USD, GBP, EUR, CAD, and NGN, and allows you to send and receive funds easily in these currencies. We are always expanding our currency options to meet your needs.",
  //   tags: ["settla"],
  // },
  // {
  //   question:
  //     "What's the process for KYC/KYB verification, and how long does it take?",
  //   answer:
  //     "Our KYC (Know Your Customer) and KYB (Know Your Business) processes are quick and straightforward. Simply submit the required documents online, and verification typically takes less than 24 hours, depending on the information provided. Our support team will notify you of any additional steps if necessary.",
  //   tags: ["settla"],
  // },
  // {
  //   question: "Are there limits on how much I can send or receive with Settla?",
  //   answer:
  //     "Settla offers flexible transaction limits based on your account type and verification level. After full verification, there is no amount limit on how much you can send or receive. For specific details, visit your account dashboard or contact our support team for assistance.",
  //   tags: ["settla"],
  // },
  // {
  //   question: "How long do international transfers take with Settla?",
  //   answer:
  //     "Most international transfers are completed within 1–2 business days, though exact timing depends on the recipient’s country and currency. We provide real-time updates, so you’ll always know the status of your transfer.",
  //   tags: ["settla"],
  // },
  // {
  //   question: "How can I add money to my Settla account?",
  //   answer:
  //     "To add money, log in to your Settla account, click on 'Add Funds,' and choose from options like bank transfer, credit/debit card, or linking an external wallet. Funds will be available in your Settla account instantly or within a few minutes, depending on your method.",
  //   tags: ["settla"],
  // },
];
