import React, { useEffect, useState } from "react";

const FullName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName);
  console.log(lastName);
  // const [fullName, setFullName] = useState("");

  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`);
  // }, [firstName, lastName]);
  return (
    <div>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      {/* <p>{fullName}</p> */}
    </div>
  );
};

export default FullName;
