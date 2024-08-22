// import React from "react"

// The position will be left to the user, either by using px, %, vh, vw, etc. Return a tailwind equivalent class
// export const HorizontalTextPosition = ({ position }: { position: string }) => {
//     return (
//         <style jsx>

//         </style>
//     )
// }

// export const VerticalTextPosition = ({ position }: { position: string }) => {
//     return (
//         <style jsx>{`
//             .vertical-text-position {
//                 position: absolute;
//                 top: ${position};
//             }
//         `}</style>
//     )
// }

export const textPositionClasses = {
  "top-left": " top-0 left-0 m-5 text-left  ",
  "top-right": " top-0 right-0 m-5 text-right ",
  "top-center": " top-0 left-1/2 transform -translate-x-1/2 mt-5 text-center ",

  "middle-left": "top-1/2 left-0 transform -translate-y-1/2 ml-5 text-left",
  "middle-center":
    "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",
  "middle-right": "top-1/2 right-0 transform -translate-y-1/2 mr-5 text-right",

  "bottom-left": "bottom-0 left-0 ml-5 mb-5 text-left",
  "bottom-center":
    "bottom-0 left-1/2 transform -translate-x-1/2 mb-5 text-center",
  "bottom-right": "bottom-0 right-0 mr-5 mb-5 text-right",
};
