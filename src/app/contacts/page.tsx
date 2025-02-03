import { Metadata } from "next";
import { ContactCard } from "@/entities/contact-card";
import {
  AccordionContent,
  AccordionDetails,
  AccordionGroup,
  AccordionItem,
  Socials,
} from "@/shared/ui";
import { Card } from "@/entities/card";
import { FeedbackForm } from "@/features/feedback-form";
import "@/shared/ui/bordered-grid/BorderedGrid.scss";
import "@/shared/ui/list/List.scss";
import "./contacts.scss";

export const metadata: Metadata = {
  title: "Contacts",
};

const ourContacts = [
  {
    title: "General Inquiries",
    email: "contact@ai-podcasts.com",
    tel: "+11234567890",
  },
  {
    title: "Technical Support",
    email: "contact@ai-podcasts.com",
    tel: "+11234567890",
  },
  {
    title: "Our Office",
    address: "Address: 123 AI Tech Avenue, Techville, 54321",
    link: "#",
    linkLabel: "Get Directions",
  },
];

const cardData = [
  {
    srcIcon: "./images/contacts/icon-1.svg",
    title: "Get in Touch with AI Podcasts",
  },
  {
    srcIcon: "./images/contacts/icon-2.svg",
    title: "Get in Touch with AI Podcasts",
    description:
      "If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. ",
    link: "#",
    linkLabel: "Ask Qustion",
  },
];

export default function Contacts() {
  return (
    <main>
      <section className="contacts" aria-labelledby="contacts-title">
        <header className="contacts__header">
          <h1 className="visually-hidden" id="contacts-title">
            Contacts
          </h1>
          <ul className="bordered-grid bordered-grid--4-cols container">
            <li className="bordered-grid__item">
              <ContactCard data={ourContacts[0]} />
            </li>
            <li className="bordered-grid__item">
              <ContactCard data={ourContacts[1]} />
            </li>
            <li className="bordered-grid__item">
              <ContactCard data={ourContacts[2]} />
            </li>
            <li className="bordered-grid__item">
              <ContactCard>
                <Socials className="soc1als--3-cols" />
              </ContactCard>
            </li>
          </ul>
        </header>
        <div className="contacts__body">
          <div className="list">
            <div className="list__item">
              <Card data={cardData[0]} titleSize="h2">
                <FeedbackForm />
              </Card>
            </div>
            <div className="list__item">
              <Card data={cardData[1]} titleSize="h2">
                <AccordionGroup>
                  <AccordionItem>
                    <AccordionDetails name="faq" open>
                      <h4 className="accordion__title h6">
                        <span role="term" aria-details="faq-1">
                          What is AI?
                        </span>
                      </h4>
                    </AccordionDetails>
                    <AccordionContent className="content" id="faq-1">
                      <div className="accordion__content-body">
                        <p>
                          AI stands for Artificial Intelligence, which refers to
                          the simulation of human intelligence in machines. It
                          enables them to perform tasks like problem-solving,
                          learning, and decision-making.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionDetails name="faq">
                      <h4 className="accordion__title h6">
                        <span role="term" aria-details="faq-1">
                          How can I listen to your podcasts?
                        </span>
                      </h4>
                    </AccordionDetails>
                    <AccordionContent id="faq-2">
                      <div className="accordion__content-body">
                        <p>
                          AI stands for Artificial Intelligence, which refers to
                          the simulation of human intelligence in machines. It
                          enables them to perform tasks like problem-solving,
                          learning, and decision-making.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionDetails name="faq">
                      <h4 className="accordion__title h6">
                        <span role="term" aria-details="faq-1">
                          Are your podcasts free to listen to?
                        </span>
                      </h4>
                    </AccordionDetails>
                    <AccordionContent id="faq-3">
                      <div className="accordion__content-body">
                        <p>
                          AI stands for Artificial Intelligence, which refers to
                          the simulation of human intelligence in machines. It
                          enables them to perform tasks like problem-solving,
                          learning, and decision-making.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionDetails name="faq">
                      <h4 className="accordion__title h6">
                        <span role="term" aria-details="faq-1">
                          Can I download episodes to listen offline?
                        </span>
                      </h4>
                    </AccordionDetails>
                    <AccordionContent id="faq-4">
                      <div className="accordion__content-body">
                        <p>
                          AI stands for Artificial Intelligence, which refers to
                          the simulation of human intelligence in machines. It
                          enables them to perform tasks like problem-solving,
                          learning, and decision-making.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionDetails name="faq">
                      <h4 className="accordion__title h6">
                        <span role="term" aria-details="faq-1">
                          How often do you release new episodes?
                        </span>
                      </h4>
                    </AccordionDetails>
                    <AccordionContent id="faq-5">
                      <div className="accordion__content-body">
                        <p>
                          AI stands for Artificial Intelligence, which refers to
                          the simulation of human intelligence in machines. It
                          enables them to perform tasks like problem-solving,
                          learning, and decision-making.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionGroup>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
