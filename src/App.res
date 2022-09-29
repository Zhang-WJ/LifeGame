open Toaster

@react.component
let make = () => {
  <div>
    <Toaster />
    <div className="min-h-screen flex flex-col container mx-auto">
      <header className="p-2 bg-indigo-200">
        <div
          className="flex flex-row items-stretch"
          onClick={_ => Toaster.make1->Toaster.success("Success!")}>
          <div className="mr-4">
            <img
              className="inline-block rounded-full ring ring-white w-12 h-12"
              src="https://avatars.githubusercontent.com/u/37130869?v=4"
            />
          </div>
          <div className="basis-1/4 flex items-center">
            <p className="text-base"> {React.string("https://github.com/Zhang-WJ")} </p>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-indigo-50 p-2">
        <div className="mb-20"> {React.string("Content1")} </div>
      </main>
      <footer className="p-2 bg-indigo-200"> {React.string("Footer")} </footer>
    </div>
  </div>
}