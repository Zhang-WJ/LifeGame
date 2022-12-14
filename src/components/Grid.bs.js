// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Tile from "./Tile.bs.js";
import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

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

export {
  R ,
  A ,
  Wrapper ,
  make$1 as make,
  
}
/* styles Not a pure module */
