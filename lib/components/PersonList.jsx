import React, { memo } from "react";
import Person from "@/components/Person";

const PersonList = memo((props) => {
  return (
    <>
      {props.people.map((person, index) => (
        <p key={index} onClick={() => props.delete(index)}>
          <Person {...person}/>
        </p>
      ))}
    </>
  );
});

export default PersonList;
