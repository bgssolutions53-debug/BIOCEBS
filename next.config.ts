// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // ESTA ES LA LÍNEA CLAVE QUE FALTA
    basePath: '/BIOCEBS', 
    
    output: 'export', // Mantienes esta línea
    images: {
        unoptimized: true, // Deshabilita la optimización
    },
    /* otras configuraciones */
};

export default nextConfig;