import {
  FC,
  ReactElement,
  useState,
  ChangeEventHandler,
  ChangeEvent,
  FormEventHandler,
  FormEvent,
} from "react";
import axios, { AxiosResponse } from "axios";

import InputsGenerator from "./_InputsGenerator";
import List from "../comments/List";

import "./form.css";

interface Data {
  title: string;
  message: string;
}

const Form: FC = (): ReactElement => {
  const [data, setData] = useState<Data>({
    title: "",
    message: "",
  });

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit: FormEventHandler = (event: FormEvent): void => {
    event.preventDefault();
    axios
      .post("http://localhost:2000/comments", data)
      .then((response: AxiosResponse) => setData(response.data));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <InputsGenerator handler={handleChange} />

        <button type="submit">Submit</button>
      </form>

      <List />
    </main>
  );
};

export default Form;
