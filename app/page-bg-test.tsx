import AnimatedBackground from "@/components/AnimatedBackgroundSimple";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Flowers Encyclopedia
          </h1>
          <p className="mt-6 text-xl text-white/90 drop-shadow-md">
            Test page - with AnimatedBackground
          </p>
        </div>
      </div>
    </div>
  );
}
