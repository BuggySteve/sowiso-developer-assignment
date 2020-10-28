module.exports = {
  theme: {
    extend: {
      keyframes: {
        "bounce-and-stop": {
          "0%, 50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "25%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-and-stop": "bounce-and-ping 3s ease-in-out",
      },
    },
  },
};
