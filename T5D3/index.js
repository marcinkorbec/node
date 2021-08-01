"use strict";

function f() {
  this.name = 'name';
}


class G {
  constructor() {
    this.name = 'name';
  }
}

f();
G();