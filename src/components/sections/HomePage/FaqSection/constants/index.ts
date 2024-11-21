export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFAQs: FAQItem[] = [
  {
    question: "How do I create a Settla account?",
    answer:
      'Creating a Settla account is easy! Simply click on "Create an account" page, follow the prompts to enter your details and complete KYC verification. You\'ll be ready to send your first transfer in no time.',
  },
  {
    question: "How does Settla ensure my payments are secure?",
    answer:
      "Settla uses advanced encryption, multi-factor authentication, and continuous monitoring to keep your payments and data safe. Every transaction follows strict compliance standards.",
  },
  {
    question: "What currencies can I send and receive with Settla?",
    answer:
      "Settla supports major currencies, including USD, GBP, EUR, CAD, and NGN, and allows you to send and receive funds easily in these currencies. We are always expanding our currency options to meet your needs.",
  },
  {
    question:
      "What's the process for KYC/KYB verification, and how long does it take?",
    answer:
      "Our KYC (Know Your Customer) and KYB (Know Your Business) processes are quick and straightforward. Simply submit the required documents online, and verification typically takes less than 24 hours, depending on the information provided. Our support team will notify you of any additional steps if necessary.",
  },
  {
    question: "Are there limits on how much I can send or receive with Settla?",
    answer:
      "Settla offers flexible transaction limits based on your account type and verification level. After full verification, there is no amount limit on how much you can send or receive. For specific details, visit your account dashboard or contact our support team for assistance.",
  },
  {
    question: "How long do international transfers take with Settla?",
    answer:
      "Most international transfers are completed within 1–2 business days, though exact timing depends on the recipient’s country and currency. We provide real-time updates, so you’ll always know the status of your transfer.",
  },
  {
    question: "How can I add money to my Settla account?",
    answer:
      "To add money, log in to your Settla account, click on 'Add Funds,' and choose from options like bank transfer, credit/debit card, or linking an external wallet. Funds will be available in your Settla account instantly or within a few minutes, depending on your method.",
  },
];
