import { subtitle, title } from "@/components/primitives";
import { Image } from "@heroui/image";
import { Metadata } from "next";
import NextImage from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Huevos",
    alternates: {
        canonical: "https://www.avicolasanantonio.com/huevos/"
    }
};

export default function HuevosPage() {
    return (
        <div className="text-green-800">
            <Image
                as={NextImage}
                isZoomed
                width={800}
                height={200}
                src="/huevos_banner.jpg"
                alt="Foto de huevos frescos"
                style={{ height: 'auto' }}
            >
            </Image>
            <p className="mt-6"></p>
            <h1 className={title()}>Huevos</h1>
            <p className="py-4">
                En nuestra empresa disponemos de dos instalaciones ganaderas avícolas destinadas a la producción de huevos de gallinas. Los huevos son recogidos diariamente y envasados en distintos embalajes según la necesidad de nuestros clientes. Los huevos son vendidos siempre sin pasar por ningún tipo de refrigeración por lo que son de categoría A. Si quieres saber más sobre la categorización y etiquetado de los huevos en la Unión Europea <Link className="font-bold" href="/etiquetado-huevos/">pulsa aquí</Link>.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Bandejas</h2>
            <div className="lg:flex width-full">
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        as={NextImage}
                        isZoomed
                        width={300}
                        height={600}
                        src="/huevos_bandeja.jpg"
                        alt="Foto de huevos frescos"
                        style={{ height: 'auto' }}
                    />
                </div>
                <div className="lg:w-1/2">
                    <p className="py-4">
                        Esta presentación es la más utilizada para la hostelería por su comodidad para el almacenamiento. Con el fin de ser respetuosos con el medio ambiente trabajamos con bandejas de celulosa o de plástico (en este caso retornables para su reutilización).
                    </p>
                    <p className="py-4">
                        Estas bandejas son fácilmente apilables permitiendo así hacer un uso eficiente del espacio de almacenamiento de las cocinas así como su transporte.
                    </p>
                    <p className="py-4">
                        Las bandejas serán de 30 unidades para los huevos de tamaño S, M y L, o de 20 unidades para los de tamaño XL.
                    </p>
                </div>

            </div>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Estuches</h2>
            <div className="lg:flex width-full">
                <div className="lg:w-1/2">
                    <p className="py-4">
                        Es el usado para supermercados y tiendas de alimentación en general. Su material está basado en celulosa y se presentan en formato de 6 unidades o de 10 unidades. Los huevos que empaquetamos en este tipo de embalaje es de tamaño M.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        as={NextImage}
                        isZoomed
                        width={300}
                        height={600}
                        src="/huevos_estuche.jpg"
                        alt="Foto de huevos frescos"
                        style={{ height: 'auto' }}
                    />
                </div>
            </div>
        </div >
    );
}
