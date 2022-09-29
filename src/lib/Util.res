@val
external requestAnimationFrame: (unit => unit) => int = "requestAnimationFrame"

module Colors = {
    // Module contents
    @module("polished")
    external opacity: (float, string) => string = "opacify"

    let sqrSize = Config.boardSize * Config.boardSize

    let sumOfSquares = (sqrSize * 2)->float_of_int
    let diagonalLength = Js.Math.sqrt(sumOfSquares)
    let hueIncrement = 360. /. diagonalLength

    let colorCache = Belt.HashMap.String.make(~hintSize=sqrSize)

    let rainbowHSL = (y, x) => {
        let cacheKey = j`$y-$x`

        let (color, cached) = switch colorCache->Belt.HashMap.String.get(cacheKey) {
            | Some(found) => (found, true)
            | None =>
                let sumOfPoints = (y * y + x * x)->float_of_int
                let raw = Js.Math.sqrt(sumOfPoints) *. hueIncrement
                let h = raw->Js.Math.floor
                let color = j`hsl($h, 100%, 60%)`

                (color, false)
        }

        if !cached {
            colorCache->Belt.HashMap.String.set(cacheKey, color)
        }

        color
    }
}