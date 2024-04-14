import { ReactElement, Fragment } from "react";

import randomInt from "./random";

import "../styles/utils/circle.scss";

const generateCircles = (count: number): Array<ReactElement> => {
  const colors: string[] = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "purple",
    "magenta",
    "orange",
  ];
  const sizes: number[] = [40, 60, 80];
  const circles: ReactElement[] = [];

  for (let i: number = 0; i <= count; i++) {
    const color: string = colors[randomInt(colors.length, -1)];
    const size: string = `${sizes[randomInt(sizes.length, -1)]}px`;

    const circle: ReactElement = (
      <div
        className="circle"
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          marginLeft: `${size}`,
        }}
      ></div>
    );

    circles.push(circle);
  }

  return circles;
};

const Circles = (): ReactElement => {
  const circles: ReactElement[] = generateCircles(6);

  return (
    <Fragment>
      {circles.map(
        (circle: ReactElement, index: number): ReactElement => (
          <Fragment key={index}>{circle}</Fragment>
        )
      )}
    </Fragment>
  );
};

export default Circles;
