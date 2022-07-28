module Toaster = {
  // JavaScript equivalent
  //   import { Toaster } from 'react-hot-toast'
  @react.component @module("react-hot-toast")
  external make: unit => React.element = "Toaster"

  // import ReactHotToast from 'react-hot-toast'
  @module("react-hot-toast")
  external make1: React.element = "default"

  // ReactHotToast.success("Some string")
  @send external success: (React.element, string) => unit = "success"
}