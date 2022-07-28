open Toaster

@react.component
let make = () => {
  <div>
    <Toaster />
    <div className={`container mx-auto`} onClick={_ => Toaster.make1->Toaster.success("Success!")}>
      {React.string("Hello World 1")}
    </div>
  </div>
}