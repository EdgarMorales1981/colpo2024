import Gallery from '../pages/Components/Gallery'
import NavMenu from "@/pages/navmenu";

export default function Acerca() {
    return (
        <div>
            <NavMenu />
            <h1>Acerca de Bérgamo</h1>

            <p>
                Bérgamo es una hermosa ciudad en el norte de Italia, conocida por su rica historia, arquitectura impresionante y paisajes pintorescos. Aquí tienes una galería de fotos que muestra la belleza de Bérgamo.
            </p>
            <Gallery />
        </div>
    )
}
