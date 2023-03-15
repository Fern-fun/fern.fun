import React from "react";

import { labs } from "./Labs";

function LabContainer() {
  const [lab_elements, setLabElements] = React.useState([]);

  React.useEffect(() => {
    labs.forEach((lab) => {
      setLabElements((lab_elements) => [
        ...lab_elements,
        <div className="lab-element" key={`${lab.titl}+${lab.author}`}>
          <div className="lab-container__img">
            <img src="https://i.imgur.com/0Z0Z9Zm.png" alt="lab" />
          </div>
          <div className="lab-container__title">
            <div>
              <div>
                <a href={`/a/${lab.id}`}>{lab.title}</a>
              </div>
              <div>{lab.description}</div>
            </div>
            <div>
              {lab.tags.map((i) => (
                <span key={i} className={i}>
                  #{i}
                </span>
              ))}
            </div>
          </div>
        </div>,
      ]);
    });
  }, []);

  return (
    <div className="lab-container fadeInFromBottom">
      {lab_elements.map((lab) => lab)}
    </div>
  );
}

export default LabContainer;
