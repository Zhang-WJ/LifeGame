// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Tile = require("./Tile.bs.js");
var CssJs = require("bs-css-emotion/src/CssJs.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Caml_option = require("rescript/lib/js/caml_option.js");

var deleteProp = ((newProps, key) => delete newProps[key]);

function getOrEmpty(str) {
  if (str !== undefined) {
    return " " + str;
  } else {
    return "";
  }
}

var styles = CssJs.style([
      CssJs.label("Wrapper"),
      CssJs.display("flex"),
      CssJs.border({
            NAME: "rem",
            VAL: 0.25
          }, "solid", {
            NAME: "hex",
            VAL: "222"
          }),
      CssJs.borderRadius({
            NAME: "rem",
            VAL: 0.75
          }),
      CssJs.padding({
            NAME: "rem",
            VAL: 0.125
          })
    ]);

function make(props) {
  var className = styles + getOrEmpty(Caml_option.undefined_to_opt(props.className));
  var stylesObject = {
    className: className,
    ref: Caml_option.undefined_to_opt(props.innerRef)
  };
  var newProps = Object.assign({}, props, stylesObject);
  deleteProp(newProps, "innerRef");
  return React.createElement("div", newProps);
}

var Wrapper = {
  deleteProp: deleteProp,
  getOrEmpty: getOrEmpty,
  styles: styles,
  make: make
};

function Grid(Props) {
  var data = Props.data;
  var onToggle = Props.onToggle;
  var renderTile = React.useCallback((function (y) {
          return function (x, cellState) {
            var key = "" + x + "-" + y;
            return React.createElement(Tile.make, {
                        isAlive: cellState === /* Alive */1,
                        onToggle: (function (param) {
                            return Curry._2(onToggle, y, x);
                          }),
                        y: y,
                        x: x,
                        key: key
                      });
          };
        }), []);
  var renderRow = React.useCallback((function (y) {
          return function (row) {
            return React.createElement("div", {
                        key: String(y)
                      }, Belt_Array.mapWithIndex(row, Curry._1(renderTile, y)));
          };
        }), []);
  return React.createElement(make, {
              children: Belt_Array.mapWithIndex(data, renderRow)
            });
}

var R;

var A;

var make$1 = Grid;

exports.R = R;
exports.A = A;
exports.Wrapper = Wrapper;
exports.make = make$1;
/* styles Not a pure module */
