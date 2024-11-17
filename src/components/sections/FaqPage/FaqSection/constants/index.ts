export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFAQs: FAQItem[] = [
  {
    question: "How do I create a Settla account?",
    answer:
      "Creating a Settla account is easy! Simply click on 'Create an account' page, follow the prompts to enter your details and complete KYC verification. You'll be ready to send your first transfer in no time.",
  },
  {
    question: "How does Settla ensure my payments are secure?",
    answer:
      "Settla uses advanced encryption and fraud detection systems to ensure your payments are secure and protected at all times.",
  },
  {
    question: "What currencies can I send and receive with Settla?",
    answer:
      "Settla supports a wide range of currencies. Check our platform for the most updated list of supported currencies.",
  },
  {
    question:
      "What's the process for KYC/KYB verification, and how long does it take?",
    answer:
      "The process involves submitting your identification documents and completing a verification form. Verification typically takes 1–3 business days.",
  },
  {
    question:
      "How long do international transfers take with Settla?",
    answer:
      "International transfers usually take between 1–5 business days, depending on the destination and currency.",
  },
  {
    question: "How can I add money to my Settla account?",
    answer:
      "You can add money to your Settla account by linking your bank account or using a debit/credit card through the Settla platform.",
  },
];
