const confetti = require("canvas-confetti");

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const useConfetti = (ref: React.RefObject<HTMLCanvasElement>) => {
  const confettiSettings = {
    angle: 90,
    spread: 360,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    ticks: 60,
    zIndex: 0,
    perspective: "500px",
    colors: ["#FF4D00", "#F4E3D6", "#FFFF", "#19191D", "#141414"],
  };

  const fireConfetti = () => {
    const duration = 1 * 1000;
    const animationEnd = Date.now() + duration;

    const interval: NodeJS.Timeout = setInterval(() => {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      let particleCount = 100 * (timeLeft / duration);

      if (ref.current) {
        const myConfetti = confetti.create(ref.current, {
          resize: true,
          useWorker: true,
        });

        myConfetti(
          Object.assign({}, confettiSettings, {
            origin: {x: randomInRange(0.1, 0.3), y: Math.random() - 0.2},
            particleCount,
          }),
        );
        myConfetti(
          Object.assign({}, confettiSettings, {
            origin: {x: randomInRange(0.7, 0.9), y: Math.random() - 0.2},
            particleCount,
          }),
        );
      }
    }, 100);
  };

  return fireConfetti;
};

export default useConfetti;
