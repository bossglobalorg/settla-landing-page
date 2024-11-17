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
      "We use state-of-the-art security measures to protect your payments and data.",
  },
  {
    question: "What currencies can I send and receive with Settla?",
    answer: "We support a wide range of major global currencies for transfers.",
  },
  {
    question:
      "What's the process for KYC/KYB verification, and how long does it take?",
    answer:
      "Our verification process is straightforward and typically completed within 24 hours.",
  },
  {
    question: "How long do international transfers take with Settla?",
    answer:
      "Most international transfers are processed within 1-2 business days.",
  },
  {
    question: "How can I add money to my Settla account?",
    answer:
      "You can add funds through bank transfer, debit card, or other supported payment methods.",
  },
];
