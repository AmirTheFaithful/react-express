import {
  FC,
  ReactElement,
  useState,
  ChangeEventHandler,
  ChangeEvent,
  FormEventHandler,
  FormEvent,
} from "react";

import InputsGenerator from "./_InputsGenerator";

import "./form.css";

interface Data {
  firstname: string;
  lastname: string;
}

const Form: FC = (): ReactElement => {
  const [data, setData] = useState<Data>({
    firstname: "",
    lastname: "",
  });

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit: FormEventHandler = (event: FormEvent): void => {
    event.preventDefault();

    alert(`${data.firstname}\n${data.lastname}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputsGenerator handler={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
