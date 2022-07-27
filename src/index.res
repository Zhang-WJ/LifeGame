let root = ReactDOM.querySelector("#root")

switch root {
| None => ()
| Some(node) => ReactDOM.render(<App />, node)
}