const confetti = require("canvas-confetti");

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

const useConfetti = (ref: React.RefObject<HTMLCanvasElement>) => {
  const confettiSettings = {
    spread: 360,
    startVelocity: 45,
    colors: ["#ff4d00", "#f4e3d6", "#fff", "#19191d", "#141414"],
  };

  const fireConfetti = () => {
    const duration = 1000;
    const animationEnd = Date.now() + duration;

    const interval: NodeJS.Timeout = setInterval(() => {
      if (ref.current) {
        let timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        let particleCount = 100 * (timeLeft / duration);

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
