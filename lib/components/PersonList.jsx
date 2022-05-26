import React, { memo } from "react";
import Person from "@/components/Person";

const PersonList = memo((props) => {
  console.log('person list');
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
