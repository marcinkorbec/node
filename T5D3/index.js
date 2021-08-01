"use strict";

function f() {
  this.name = 'name';
}



class G {
  constructor() {
    debugger;
    this.name = 'name';
  }
}

const obj = new G();
