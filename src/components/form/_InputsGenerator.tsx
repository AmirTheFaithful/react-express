import { FC, ReactElement, ChangeEventHandler, Fragment } from "react";

type Props = {
  handler: ChangeEventHandler;
};

const InputsGenerator: FC<Props> = ({ handler }): ReactElement => {
  // Just labels for generating input fields
  const fields: Array<string> = ["firstname", "lastname"];

  return (
    <Fragment>
      {fields.map(
        (field: string): ReactElement => (
          <input
            type="text"
            name={field}
            placeholder={field}
            onChange={handler}
          />
        )
      )}
    </Fragment>
  );
};

export default InputsGenerator;
