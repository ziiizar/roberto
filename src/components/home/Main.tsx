import Image from "next/image";

export default function Main() {
    return (
        <main className="[grid-area:main] h-full relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="https://assets.luckywolf.io/lw/bg/lw_rk_bg.png" 
                    alt="Background" 
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className="relative z-10 w-full h-full bg-gradient-to-r from-main-mask-from to-main-mask-to opacity-90 ">
                {/* Contenido que estará sobre la máscara */}
            </div>
        </main>
    )
}