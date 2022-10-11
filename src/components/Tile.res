open CssJs
module Wrapper = %styled.div(
  (~background, ~shadow, ~tileSize) =>
    `
    width: $(tileSize);
    height: $(tileSize);
    background-color: $(background);
    border-radius: 50%;
    margin: 2px 1px;
    padding: 0;
    transition-property: all;
    transition-timing-function: ease-in-out;
    cursor: pointer;
  `
)

@react.component
let make = (~isAlive, ~onToggle, ~y, ~x) => {
  let aliveColor = hsl(deg(Util.Colors.rainbowHSL(y, x)->float_of_int), pct(100.0), pct(60.0))
  let deadColor = hex("272B30")
  let (background, shadow) = isAlive ? (aliveColor, j`0 0 0 0 $aliveColor`) : (deadColor, "")

  let handleMouseEvent = React.useCallback0((callback, e) =>
    if ReactEvent.Mouse.nativeEvent(e)["which"] === 1 {
      callback()
    }
  )

  <Wrapper
    background={background}
    shadow={shadow}
    tileSize={rem(Config.tileSize)}
    onMouseOver={handleMouseEvent(onToggle)}
    onMouseDown={handleMouseEvent(onToggle)}
  />
}
