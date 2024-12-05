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
    tags: ["manage your account"],
  },
  {
    question: "Can I manage multiple wallets?",
    answer:
      "Absolutely. Settla allows you to manage multiple currency wallets for seamless transactions and better control over your finances.",
    tags: ["manage your account"],
  },
  {
    question: "What if I forget my password?",
    answer:
      "Use the “Forgot Password” option on the login page to reset your password securely.",
    tags: ["manage your account"],
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

  // PAY-OUTS
  {
    question: "How do I withdraw money from Settla?",
    answer:
      "Go to your wallet, select “Pay-Out,” choose your preferred bank or payment method, and confirm the withdrawal.",
    tags: ["pay-outs"],
  },
  {
    question: "Are there any pay-out fees?",
    answer:
      "Fees vary depending on your selected payment method and currency. You'll see the exact cost before completing the transaction.",
    tags: ["pay-outs"],
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
];
