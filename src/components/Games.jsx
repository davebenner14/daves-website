import React, { useRef, useEffect } from "react";

export default function Games() {
  const games = [
    {
      file: "Game1.png",
      url: "https://pixel-packer.vercel.app/",
      label: "PixelPacker – A Tetris Game"
    },
    {
      file: "Game2.png",
      url: "https://strike-wing.vercel.app/",
      label: "Strike Wing"
    },
    {
      file: "Game3.png",
      url: "https://casino-series001-cash-drop.vercel.app/",
      label: "Cash Drop"
    },
    {
      file: "Game4.png",
      url: "https://vue-blackjack21.vercel.app/",
      label: "Vue Blackjack"
    }
  ];
  const looped = [...games, ...games];
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf;
    const speed = 1;

    const step = () => {
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section
        style={{ backgroundColor: "#fff" }}
        className="w-full overflow-hidden flex flex-col items-center py-6"
      >
        <h2
          style={{
            color: "#1f2937",
            fontSize: "2.5rem",
            marginBottom: "1.5rem"
          }}
        >
          Games
        </h2>

        <div
          ref={scrollRef}
          className="no-scrollbar"
          style={{
            width: "100%",
            overflowX: "auto",
            whiteSpace: "nowrap"
          }}
        >
          {looped.map((game, idx) => (
            <a
              key={idx}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                width: "36rem",
                marginRight: idx === looped.length - 1 ? 0 : "3rem",
                cursor: "pointer",
                textDecoration: "none",
                verticalAlign: "top"
              }}
            >
              <img
                src={`/Assets/Game Assets/${game.file}`}
                alt={game.label}
                style={{
                  width: "100%",
                  height: "22.5rem",
                  objectFit: "cover",
                  borderRadius: "0.5rem"
                }}
              />
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "1rem",
                  textAlign: "center",
                  marginTop: "0.5rem"
                }}
              >
                {game.label}
              </p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
