import SceneCanvas from '@/components/3d/SceneCanvas';

export default function Home() {
  return (
    <main className="relative w-full min-h-[200vh]">
      {/* Motor 3D renderizando de fondo */}
      <SceneCanvas />

      {/* Contenedor principal para la UI */}
      <div className="relative z-10 flex flex-col items-center min-h-screen pt-32 px-4">

        {/* Título inicial */}
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl text-[#F4F0FF] font-light tracking-widest drop-shadow-lg">
            MIS XV
          </h1>
          <p className="text-[#B28DFF] mt-4 tracking-[0.3em] uppercase text-xs md:text-sm">
            Haz scroll para descubrir
          </p>
        </div>

        {/* Tarjeta flotante con Glassmorphism */}
        <div className="w-full max-w-md bg-[#2A1B3D]/30 backdrop-blur-md border border-[#B28DFF]/20 rounded-2xl p-8 text-center shadow-2xl mt-32 mb-64">
          <h2 className="text-2xl text-[#F4F0FF] font-light tracking-wide mb-4">
            La Celebración
          </h2>
          <p className="text-[#B28DFF] font-light leading-relaxed">
            Falta un año para la magia, pero la historia empieza aquí. Muy pronto revelaremos los detalles.
          </p>
        </div>

        {/* Espacio extra abajo para que puedas scrollear y ver el vestido rotar completo */}
        <div className="h-[50vh]"></div>

      </div>
    </main>
  );
}