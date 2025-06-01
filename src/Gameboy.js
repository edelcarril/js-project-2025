import React from "react";


const GameBoy = ({ children, onStart, rotatePiece }) => {
  return (

    <section className="relative w-[400px] h-[550px] z-0">    
        <div className="absolute  z-[-1] left-[1.2%] mt-[2px] w-[400px] h-[550px] border-1 border-slate-950 blur-sm bg-slate-950 rounded-lg shadow-lg shadow-slate-950 p-6 flex flex-col gap-2 "></div>    
        <div className="z-40 w-[408px] h-[560px] bg-slate-900 rounded-xl  p-6 flex flex-col gap-2 font-mono text-gray-400">
          {/* Pantalla */}
          <div className="relative flex-1">
            {/* Div para el borde con gradiente hacia dentro */}
            <div className="bg-opacity-0 w-full h-full shadow-[0_0_15px_rgba(156,163,175,0.2)]">
            <div className="absolute opacity-25 z-50 w-full h-full bg-[url(data:image/png;base64,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)]"></div>
                {/* Div del contenido real */}
            <div className="relative flex-1 h-full flex items-center border-2 border-gray-900 justify-center bg-zinc-950 text-emerald-500 text-sm">
                {children || "Insert Game"}
            </div>
          </div>
        </div>
          {/* Controles */}
          <div className="flex items-center gap-4 p-4 rounded-2xl w-fit font-mono mx-auto">
          <div>
            <div className="relative flex justify-center">
            <section className="relative w-[70px] h-[70px] mx-auto">
                <section class="absolute z-0 top-1/2 left-1/2 w-[70px] h-[25px] bg-slate-950 opacity-25 text-white flex justify-center items-center text-2xl rounded-[3px] -translate-x-[33px] -translate-y-[calc(50%-2px)]">
                </section>
                <section className="absolute z-0 top-1/2 left-1/2 w-[25px] h-[70px] bg-slate-950 opacity-25 text-white flex justify-center items-center text-2xl rounded-[3px] -translate-x-[calc(50%-3px)] -translate-y-[33px]">
                </section>
                <section className="absolute z-10 top-1/2 left-1/2 w-[70px] h-[25px] bg-gray-800 text-white flex justify-center items-center text-2xl rounded-[3px] -translate-x-[35px] -translate-y-1/2">
                </section>
                <section className="absolute z-10 top-1/2 left-1/2 w-[25px] h-[70px] bg-gray-800 text-white flex justify-center items-center text-2xl rounded-[3px] -translate-x-[12px] -translate-y-1/2">
                </section>
            </section>
        
            </div>
            </div>
            {/* Botones Select y Start */}
            <div className="flex w-32 justify-center">
              <button onClick={onStart} className="w-16 h-6 rounded-[3px] bg-gray-800 shadow-md text-xs">Start</button>
            </div>
            {/* Botones ABXY */}
            <div className="flex gap-4 items-center">
              <div className="flex flex-col gap-4">
                <button
                  onClick={rotatePiece} // Llamar a la función de rotación
                  className="w-8 h-8 text-xs rounded-full bg-gray-800 shadow-lg"
                >
                  X
                </button>
                <button className="w-8 h-8 text-xs rounded-full bg-gray-800 shadow-lg">Y</button>
              </div>
              <div className="flex flex-col gap-4">
                <button className="w-8 h-8 text-xs rounded-full bg-gray-800 shadow-lg">A</button>
                <button className="w-8 h-8 text-xs rounded-full bg-gray-800 shadow-lg">B</button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default GameBoy;
