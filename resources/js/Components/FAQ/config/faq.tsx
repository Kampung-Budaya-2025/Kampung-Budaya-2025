import { faqData } from "./constants";

const FAQ = () => {
  return (
    <div className="faq-container">
      {faqData.map((item) => (
        <div key={item.id} className="faq-item">
          <h3>{item.question}</h3>
          <div 
            className="faq-answer"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQ;