import React from "react";
import {Dialog} from "../common/Dialog/Dialog";
import {Dialog2} from "../Dialog2/Dialog2";

export const TextApp = props => {
  return (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad est facilis inventore ipsum labore minus, molestiae mollitia nam nisi quasi quibusdam recusandae, repellendus voluptas. Consequatur consequuntur qui sint velit veritatis?</p>
      <Dialog>Witam serdetsznie na stronie głównej :)</Dialog>
      <Dialog>
        <h1>Tytuł</h1>
        <p>sialala</p>
      </Dialog>
      <Dialog2 body='Jedziemy po zielsko!!!'/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores assumenda aut commodi culpa doloremque dolores enim, error id laboriosam magnam natus nemo nihil nulla pariatur, quam ullam, ut voluptatibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio inventore nesciunt odio porro saepe vitae. A, dignissimos doloremque eaque facere hic maiores modi obcaecati odio quasi, quia quos, sit veniam.</p>
    </>
  )
}