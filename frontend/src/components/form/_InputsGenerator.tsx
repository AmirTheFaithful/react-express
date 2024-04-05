import { FC, ReactElement, ChangeEventHandler, Fragment } from "react";

type Props = {
  handler: ChangeEventHandler;
};

const InputsGenerator: FC<Props> = ({ handler }): ReactElement => {
  // Just labels for generating input fields
  const fields: Array<string> = ["title", "message"];

  return (
    <Fragment>
      {fields.map(
        (field: string, index: number): ReactElement => (
          <input
            type="text"
            name={field}
            placeholder={field}
            onChange={handler}
            key={index}
          />
        )
      )}
    </Fragment>
  );
};

export default InputsGenerator;
