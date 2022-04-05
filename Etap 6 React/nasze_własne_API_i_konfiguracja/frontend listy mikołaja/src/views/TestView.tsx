import React from "react";
import {Link, useParams} from "react-router-dom";

export const TestView = () => {
  const {foobar} = useParams();
  
  console.log(foobar);
  
  return (
    <>
      <h1>Test!</h1>
      <Link to="/gift">Przełącz do gifts.</Link>
    </>
  )
}

