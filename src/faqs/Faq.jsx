import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Question } from "./Question";
import { questions } from "./data.js";
import "./Faq.scss";

export const Faq = () => {
  return (
    <section className="faq-sec">
      <div className=".container faq">
        <div className="title  --flex-center --dir-column">
          <MdOutlineLibraryBooks size={30} color="orangered" />
          <h2 className="--mb2">FAQS</h2>
          <p className="--text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            odio expedita, quasi veniam a quaerat labore provident officia
            tenetur neque?
          </p>
        </div>
      </div>
      <div className="questions">
        {questions.map(({ title, answer, id }) => {
          return <Question title={title} answer={answer} key={id} />;
        })}
      </div>
    </section>
  );
};
