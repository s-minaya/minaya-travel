import { useState } from "react";
import faqs from "../data/faqs";

function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full px-6" id="faqs">
      <p className="mt-6 pb-6 text-3xl font-semibold text-primary">FAQs</p>
      <div className="flex flex-col space-y-4 pb-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="FAQItem"
            onClick={() => handleToggle(faq.id)}
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium text-tertiary">{faq.question}</p>
              <span className={`text-primary text-2xl transition-transform duration-300 ${openId === faq.id ? "rotate-45" : ""}`}>
                +
              </span>
            </div>
            {openId === faq.id && (
              <p className="mt-3 text-sm leading-relaxed text-tertiary/80">
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