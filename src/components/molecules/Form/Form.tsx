import React from "react";
import Input from "components:atoms/Input/Input";
import Button from "components:atoms/Button/Button";

import styles from "./Form.module.css";

type FormProps = {
  element: React.ReactNode;
  inputs: InputFormProps[];
  buttonProps: ButtonFormProps;
};

type InputFormProps = {
  label: string;
  attributes: React.ComponentProps<"input">;
};

interface ButtonFormProps {
  buttonText: string;
  atributes: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Form: React.FC<FormProps> = ({ element, inputs, buttonProps }) => {
  function handleAction(event: React.FormEvent) {
    event.preventDefault();
    console.log("FORM - SUBMIT");
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleAction} className={styles.formContent}>
        {inputs.map((inputProps) => (
          <Input
            key={inputProps.attributes.name}
            label={inputProps.label}
            attributes={inputProps.attributes}
          />
        ))}
        <div className={styles.buttonContainer}>
          {true && element}
          <Button attributes={buttonProps.atributes}>
            {buttonProps.buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
