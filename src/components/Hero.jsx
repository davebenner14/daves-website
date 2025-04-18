export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/futuristic-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-display text-neon-purple mb-4">
          Hi, I’m David
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Building tomorrow’s web experiences today.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 border-2 border-neon-cyan font-medium rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-shadow"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}
