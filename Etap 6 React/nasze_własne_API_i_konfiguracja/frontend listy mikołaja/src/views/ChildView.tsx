import React from "react";
import {Link, useParams} from "react-router-dom";

export const ChildView = () => {
  const {foobar} = useParams();
  
  console.log(foobar);
  
  return (
    <>
      <h1>Dzieci:</h1>
      <Link to="/child">Przełącz do Prezentów.</Link>
    </>
  )
}

