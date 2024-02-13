import { subtitle, title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { ExternalLinkLogo } from "@/components/icons";

export default function GallinasPage() {
    return (
        <div className="text-green-800">
            <Image
                as={NextImage}
                isZoomed
                width={800}
                height={200}
                src="/gallinas_banner.jpg"
                alt="Foto de huevos frescos"
            >
            </Image>
            <p className="mt-6"></p>
            <h1 className={title()}>Gallinas</h1>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Más de 45 años criando nuestras propias gallinas, y más de 20 años criando para el resto del sector avícola</h2>
            <p className="py-4">
                Comenzamos criando los pollitos de nuestros propios lotes hace más de 45 años. Criando en suelo y lotes pequeños. Con los años nos hemos ido adaptando a las necesidades del sector y aumentando nuestra capacidad de cría, así como adaptando nuestras instalaciones a las nuevas tecnologías y sistemas de crianza.
            </p>
            <p className="py-4">
                Actualmente nuestra empresa cuenta con dos instalaciones para la cría de gallinas ponedoras. Ambas en el sistema de batería adaptado a la Directiva 1999/74/CE, y al posterior RD 3/2002, de 11 de enero, por el que se establecen las normas mínimas de protección de las gallinas ponedoras.
            </p>
            <p className="py-4">
                Nuestra mayor preocupación es la seguridad sanitaria, es por ello que seguimos constantemente mejorando los sistemas de cría y control sanitario de las instalaciones, así como adaptando los programas de vacunación a las necesidades del sector.
            </p>
            <p className="py-4">
                Para que una cría sea correcta hay muchos factores a tener en cuenta, pero los más importantes son los siguientes:
            </p>
            <p className="py-4">
                <span className="font-bold">Alojamiento:</span> Respetar el espacio mínimo necesario de cada animal es fundamental, al igual que disponer de un fácil acceso al agua y la alimentación. En el sistema de batería lo más importante es el evitar que la pollita este en contacto con su propia gallinaza (excrementos), pues es una de los principales focos de infecciones y enfermedades.
            </p>
            <p className="py-4">
                <span className="font-bold">Bebida:</span> El control de la calidad del agua también es fundamental, al igual que la presión de la instalación, suficiente para que las tetinas puedan moverse con facilidad y el agua fluya naturalmente.
            </p>
            <p className="py-4">
                <span className="font-bold">Alimentación:</span> Es muy importante, sobre todo en las primeras semanas de cría, pues es cuando la pollita más rápido crece y más nutrientes necesita. El control de la composición y el estado del alimento se controla en cada entrada de pienso.
            </p>
            <p className="py-4">
                <span className="font-bold">Temperatura:</span> La pollita es un animal que necesita, para su correcto desarrollo, seguir un plan de temperatura, que normalmente, empieza a una temperatura elevada y va disminuyendo gradualmente a partir de la primera semana. Para esto es importante tener un control de la temperatura general en las instalaciones, y contar con sistemas automáticos que mantengan una temperatura lo más constante posible.
            </p>
            <p className="py-4">
                <span className="font-bold">Humedad:</span> La humedad relativa es un dato importante, pues a mayor humedad, menos temperatura es necesaria para un correcto desarrollo, y aquí en las islas, disponemos de unas humedades relativas muy altas, con lo que podríamos reducir la temperatura entre 3 y 4 grados.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Qué le podemos ofrecer</h2>
            <p className="py-4">
                Nos dedicamos a la cría de pollitos de 1 día de edad hasta los 3 o 4 meses de vida. Las pollitas llevan un riguroso control de calidad en cuanto a pesaje, consumo y programa de vacunas, para finalizar la cría con lotes de animales en buen estado y preparados para la entrada en granja y su posterior inicio de puesta.            </p>
            <p className="py-4">
                Tenemos distintos proveedores de pollitos, y, por tanto, trabajamos con distintas estirpes:
            </p>
            <a target="_blank" href="http://www.ibertec.es/"><h1 className={title()}><span>Ibertec <ExternalLinkLogo className="inline" /></span></h1></a>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Lohmann LSL-Classic</h2>
            <p className="py-4">
                Se trata de una de las gallinas ponedoras más rentable y productivas que hay en el mercado. Produce una gran cantidad de huevos de color blanco con un consumo de pienso muy ajustado. Gallina ideal para todos los sistemas de producción.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Lohmann BROWN-Classic</h2>
            <p className="py-4">
                Se trata de una excelente gallina ponedora de huevo moreno que se caracteriza por su gran porcentaje de puesta, extraordinaria persistencia de puesta junto con un color de huevo y una calidad de cáscara incomparable. Además, esta gallina, se adapta a todos los sistemas de producción.
            </p>
            <a target="_blank" href="https://www.avigan.es/"><h1 className={title()}><span>Avigan Terralta <ExternalLinkLogo className="inline" /></span></h1></a>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Hy-Line Brown</h2>
            <p className="py-4">
                Productora Prolífica, Huevos Color Marrón Oscuro, Ponedora Resistente
            </p>
            <p className="py-4">
                La Hy-Line Brown es una de las ponedoras de huevo marrón más balanceada del mundo. Produce más de 355 huevos color marrón oscuro hasta las 80 semanas, tiene buen pico de producción y comienza a poner temprano con un tamaño del huevo óptimo. Estas características combinadas con una eficiencia alimenticia sin igual, con la mejor calidad interior del huevo en el mercado y con una excelente viabilidad le dan a la Hy-Line Brown el balance perfecto, lo que significa mayores ganancias para el productor avícola.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Hy-Line W-36</h2>
            <p className="py-4">
                Eficiente, Alto Rendimiento… Más Huevos en el Cartón
            </p>
            <p className="py-4">
                La Hy-Line W-36 es una de las ponedoras más eficientes del mundo con una viabilidad excelente. La Hy-Line W-36 pone docenas de huevos de la más alta calidad, con cáscaras resistentes y con un consumo alimenticio mínimo. Con un contenido de sólidos sin igual, es una de las aves preferidas por los clientes procesadores de huevo. La Hy-Line W-36 es fiable y genera utilidades máximas para el productor de huevo.
            </p>
        </div >
    );
}
