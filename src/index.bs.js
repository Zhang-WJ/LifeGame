// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var App = require("./App.bs.js");
var React = require("react");
var ReactDom = require("react-dom");
var Caml_option = require("rescript/lib/js/caml_option.js");

require('./index.css')
;

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(App.make, {}), root);
}

var root$1 = (root == null) ? undefined : Caml_option.some(root);

exports.root = root$1;
/*  Not a pure module */