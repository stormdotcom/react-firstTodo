module.exports{
    @keyframes animate {
        0% {
            width: 0,
            height: 0,
            borderTopColor: "black",
            border-right-color: "transparent",
            border-bottom-color: "transparent",
            border-left-color: transparent,
        }
     
        50% {
            width: 100%,
            height: 0,
            border-top-color: black,
            border-right-color: black,
            border-bottom-color: transparent,
            border-left-color: transparent,
        }
     
        100% {
            width: 100%,
            height: 100%,
            border-top-color: black,
            border-right-color: black,
            border-bottom-color: transparent,
            border-left-color: transparent,
        }
    }
}