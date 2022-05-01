import React from "react";
import {Link, useParams} from "react-router-dom";
import {ChildrenList} from "../components/Children/ChildrenList";
import {AddChild} from "../components/AddChild/AddChild";

export const ChildView = () => {
  const {foobar} = useParams();
  
  console.log(foobar);
  
  return (
    <>
      <h1>Dzieci:</h1>
      <ChildrenList/>
      <AddChild/>
      <Link to="/child">Przełącz do Prezentów.</Link>
    </>
  )
}

