%%raw("require('./index.css')")

let randomSeed = Js.Date.now()->int_of_float

let fallback = <div> {React.string("...")} </div>

let app = <React.Suspense fallback> <Lifegame key="app" /> </React.Suspense>

let root = ReactDOM.querySelector("#root")

switch root {
| None => ()
| Some(node) => ReactDOM.render(app, node)
}
