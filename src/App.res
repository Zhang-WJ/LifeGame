open Toaster

@react.component
let make = () => {
  <div>
    <Toaster />
    <div className="min-h-screen flex flex-col container mx-auto">
      <header className="p-2 bg-indigo-200">{React.string("Header")}</header>
      <main className="flex-1 bg-indigo-50 p-2">
        <div className="mb-20">{React.string("Content1")}</div>
      </main>
      <footer className="p-2 bg-indigo-200">{React.string("Footer")}</footer>
    </div>
  </div>
}