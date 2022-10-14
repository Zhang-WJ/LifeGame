// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Util from "../lib/Util.bs.js";
import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Config from "../lib/Config.bs.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

var deleteProp = ((newProps, key) => delete newProps[key]);

function getOrEmpty(str) {
  if (str !== undefined) {
    return " " + str;
  } else {
    return "";
  }
}

function styles(background, shadow, tileSize, param) {
  return CssJs.style([
              CssJs.label("Wrapper"),
              CssJs.width(tileSize),
              CssJs.height(tileSize),
              CssJs.backgroundColor(background),
              CssJs.borderRadius({
                    NAME: "percent",
                    VAL: 50
                  }),
              CssJs.margin2({
                    NAME: "pxFloat",
                    VAL: 2
                  }, {
                    NAME: "pxFloat",
                    VAL: 1
                  }),
              CssJs.padding("zero"),
              CssJs.unsafe("transitionProperty", "all"),
              CssJs.transitionTimingFunction("easeInOut"),
              CssJs.unsafe("cursor", "pointer")
            ]);
}

function make(props) {
  var className = styles(props.background, props.shadow, props.tileSize, undefined) + getOrEmpty(Caml_option.undefined_to_opt(props.className));
  var stylesObject = {
    className: className,
    ref: Caml_option.undefined_to_opt(props.innerRef)
  };
  var newProps = Object.assign({}, props, stylesObject);
  deleteProp(newProps, "tileSize");
  deleteProp(newProps, "shadow");
  deleteProp(newProps, "background");
  deleteProp(newProps, "innerRef");
  return React.createElement("div", newProps);
}

var Wrapper = {
  deleteProp: deleteProp,
  getOrEmpty: getOrEmpty,
  styles: styles,
  make: make
};

function Tile(Props) {
  var isAlive = Props.isAlive;
  var onToggle = Props.onToggle;
  var y = Props.y;
  var x = Props.x;
  var aliveColor = CssJs.hsl(CssJs.deg(Util.Colors.rainbowHSL(y, x)), CssJs.pct(100.0), CssJs.pct(60.0));
  var deadColor = CssJs.hex("272B30");
  var match = isAlive ? [
      aliveColor,
      "0 0 0 0 " + aliveColor
    ] : [
      deadColor,
      ""
    ];
  var handleMouseEvent = React.useCallback((function (callback) {
          return function (e) {
            if (e.nativeEvent.which === 1) {
              return Curry._1(callback, undefined);
            }
            
          };
        }), []);
  return React.createElement(make, {
              onMouseDown: Curry._1(handleMouseEvent, onToggle),
              onMouseOver: Curry._1(handleMouseEvent, onToggle),
              tileSize: CssJs.rem(Config.tileSize),
              shadow: match[1],
              background: match[0]
            });
}

var make$1 = Tile;

export {
  Wrapper ,
  make$1 as make,
  
}
/* Util Not a pure module */
