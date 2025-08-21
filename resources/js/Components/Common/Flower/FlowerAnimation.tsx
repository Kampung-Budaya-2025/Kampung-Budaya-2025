export const flowerAnimation = `
  @keyframes spin-ccw {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes spin-cw {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  .animate-spin-cw {
    animation: spin-cw 15s linear infinite;
  }

  .animate-spin-ccw {
    animation: spin-ccw 15s linear infinite;
  }
`;
