import React, { useState } from "react"
import PersonList from "@/components/PersonList"

const TopPage = () => {
  const [ people, setPeople ] = useState([
    { name: "Bob", age:41, face:"👨", death: true},
    { name: "Mary", age:22, face:"👩", death: false},
    { name: "Mash", age:8, face:"👦", death: false}
  ]);
  const handleClick = (index) => {
    setPeople(
      people.map((person, i) => i === index ? { ...person, age: person.age + 1 } : person)
    )
  };

  return (
    <>
      <PersonList people={people} delete={handleClick}/>
    </>
  );
}

export default TopPage
