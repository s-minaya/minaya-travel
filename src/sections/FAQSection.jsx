import { useState } from "react";
import faqs from "../data/faqs";

function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full px-6 dark:bg-dark-bg" id="faqs">
      <p className="mt-6 pb-6 text-3xl font-semibold text-primary">FAQs</p>

      <div className="grid grid-cols-1 gap-4 pb-6 lg:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="FAQItem"
            onClick={() => handleToggle(faq.id)}
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium text-tertiary lg:text-2xl dark:text-secondary">
                {faq.question}
              </p>
              <span className={`text-primary text-2xl transition-transform duration-300 shrink-0 ml-4 ${openId === faq.id ? "rotate-45" : ""}`}>
                +
              </span>
            </div>
            {openId === faq.id && (
              <p className="mt-3 leading-relaxed text-tertiary/80 text-sm lg:text-base dark:text-secondary/70 ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;