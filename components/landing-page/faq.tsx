"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How do I rent a number?",
    answer: "Sign up, deposit funds, choose a country and service, then rent instantly from the dashboard.",
  },
  {
    id: 2,
    question: "Where do I see my SMS?",
    answer: "All incoming codes appear in your Dashboard → SMS Inbox and under each active number.",
  },
  {
    id: 3,
    question: "Can I withdraw remaining wallet funds?",
    answer: "Yes. Go to Dashboard → Wallet → Withdraw and follow the prompts.",
  },
  {
    id: 4,
    question: "Do you support eSIM?",
    answer: "Yes. Purchase a plan, scan the QR, and manage usage in Dashboard → eSIM.",
  },
  {
    id: 5,
    question: "Is my data secure?",
    answer: "Yes. Standard auth plus optional 2FA; API keys are scoped and revocable in Settings.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6">
          Frequently Asked
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Questions</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Have questions about virtual numbers and eSIM services? Find answers to the most common questions about our
          platform.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
