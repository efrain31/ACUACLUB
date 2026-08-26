import { useRef, useState } from 'react';
import { faqItems } from '@constants/faqItems';

export function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggleQuestion = (index: number, answerEl: HTMLParagraphElement | null) => {
    if (openIndex === index) {
      // Closing
      if (answerEl) {
        answerEl.style.height = '0px';
      }
      setOpenIndex(null);
    } else {
      // Opening
      // First close the previously open one
      if (openIndex !== null && answerRefs.current[openIndex]) {
        answerRefs.current[openIndex]!.style.height = '0px';
      }

      // Open the new one
      if (answerEl) {
        answerEl.style.height = `${answerEl.scrollHeight}px`;
      }
      setOpenIndex(index);
    }
  };

  return (
    <section className="questions__container" id="objetivos">
      <h1 className="head hea-dark">Preguntas frecuentes</h1>

      {faqItems.map((item, index) => (
        <article
          key={index}
          className={`questions__padding ${openIndex === index ? 'questions__padding--add' : ''}`}
        >
          <div className="questions__answer">
            <h3
              className="questions__title"
              onClick={() => toggleQuestion(index, answerRefs.current[index])}
            >
              {item.question}
              <span className={`questions__arrow ${openIndex === index ? 'questions__arrow--rotate' : ''}`}>
                <img
                  src="/img/flecha-hacia-arriba.png"
                  className="questions__img"
                  alt="Toggle answer"
                />
              </span>
            </h3>

            <p
              ref={(el) => {
                answerRefs.current[index] = el;
              }}
              className="questions__show"
              style={{
                height: openIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : '0px',
                overflow: 'hidden'
              }}
            >
              {item.answer}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
