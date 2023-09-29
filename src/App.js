import { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const buttonStyle = {
    backgroundColor: "#7950f2",
    color: "#fff",
  };
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <Steps>
          <Numbers>
            {[1, 2, 3].map((num) => (
              <Step step={step} key={num}>
                {num}
              </Step>
            ))}
          </Numbers>

          <Message>
            Step{step}:{messages[step - 1]}
          </Message>

          <Buttons>
            <Button
              style={{
                ...buttonStyle,
              }}
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button style={{ ...buttonStyle }} onClick={handleNext}>
              Next
            </Button>
          </Buttons>
        </Steps>
      )}
    </>
  );
}

function Steps({ children }) {
  return <div className="steps">{children}</div>;
}

function Numbers({ children }) {
  return <div className="numbers">{children}</div>;
}
function Message({ children }) {
  return <p className="message">{children}</p>;
}
function Buttons({ children }) {
  return <div className="buttons">{children}</div>;
}

function Button({ children, style, onClick }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
function Step({ children, step }) {
  const isActive = children <= step;
  return <div className={`${isActive ? "active" : ""}`}>{children}</div>;
}
