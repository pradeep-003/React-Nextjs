import { Children, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "Jonas" });
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    if (step === 3) {
      setTest({ name: "Fred" });
    } else {
      setTest({ name: "Jonas" });
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }

    if (step === 1) {
      setTest({ name: "Fred" });
    } else {
      setTest({ name: "Jonas" });
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {isOpen === false ? "👁️" : String.fromCharCode(0x00d7)}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]} {test.name}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>🐑</span> Previous
            </Button>
            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff">
              Next <span>🐦‍⬛</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3> {children}
    </div>
  );
}
