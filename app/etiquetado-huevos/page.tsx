import { subtitle, title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Etiquetado del huevo"
};

export default function EtiquetadoPage() {
    return (
        <div className="text-green-800">
            <h1 className={title()}>Etiquetado</h1>
            <p className="py-4">
                Los huevos se clasifican según distintos factores según el <a className="font-bold" target="_blank" href="https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:32008R0589">Reglamento (CE) n.o 589/2008 relativo a las normas de comercialización de los huevos.</a>
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Categoría</h2>
            <p className="py-4">
                Los huevos se pueden <span className="font-bold">clasificar</span> como <span className="font-bold">categoría A</span> o como <span className="font-bold">categoría B</span>.
            </p>
            <p className="py-4">
                Los huevos de la categoría A deberán presentar las siguientes características:
            </p>
            <ul className="py-4 pl-8">
                <li>· Una cáscara y cutícula: de forma normal, limpias e intactas</li>
                <li>· Una cámara de aire: de altura fija no superior a 6 milímetros</li>
                <li>· Una yema que sea claramente discernible, que se mueva solo levemente al girar el huevo</li>
                <li>· La clara debe ser transparente y traslúcida</li>
                <li>· El huevo no debe presentar materias u olores extraños</li>
                <li>· El huevo no debe presentar desarrollo perceptible de gérmenes</li>
            </ul>
            <p className="py-4">
                Los huevos de la <span className="font-bold">categoría A</span> no podrán lavarse o limpiarse antes ni después de su clasificación, y no deberán ser sometidos a ningún tratamiento de conservación ni refrigerados a menos de 5 °C.
            </p>
            <p className="py-4">
                Los huevos de la <span className="font-bold">categoría B</span> son los huevos que no cumplen con los umbrales de calidad de los huevos de la categoría A, o son huevos de la categoría A que han sido degradados.
            </p>
            <p className="py-4">
                Únicamente los <span className="font-bold">centros de embalaje</span> clasificarán y embalarán los huevos y etiquetarán sus <a className="font-bold" target="_blank" href="https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=LEGISSUM%3A4324376#keyterm_E0002">estuches*</a>. Los centros de embalaje deben disponer del <span className="font-bold">equipo adecuado</span> para clasificar y marcar los huevos. Los huevos se clasificarán, marcarán y embalarán <span className="font-bold">en los 10 días siguientes a su puesta</span>.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Peso</h2>
            <p className="py-4">
                Los huevos de la categoría A se clasifican por peso:
            </p>
            <ul className="py-4 pl-8">
                <li><span className="font-bold">· XL:</span> más de 72 g.</li>
                <li><span className="font-bold">· L:</span> 63-72 g.</li>
                <li><span className="font-bold">· M:</span> 53-62 g.</li>
                <li><span className="font-bold">· S:</span> menos de 53 g.</li>
            </ul>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Etiquetado</h2>
            <div className="lg:flex width-full">
                <div className="px-8 lg:pt-0 lg:w-1/2">
                    <p className="py-4">
                        Los huevos irán etiquetados en su cáscara con un código que indicará:
                    </p>
                    <ul className="py-4 pl-8">
                        <li><span className="font-bold">· Primer dígito:</span> Forma de cría de las gallinas</li>
                        <li><span className="font-bold">· Dos letras siguientes:</span> Estado miembro de producción</li>
                        <li><span className="font-bold">· Resto de dígitos:</span> Código único de la granja de producción</li>
                    </ul>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        as={NextImage}
                        isZoomed
                        width={500}
                        height={600}
                        src="/etiquetado_huevo.jpg"
                        alt="Foto de huevos frescos"
                    />
                </div>
            </div>
        </div >
    );
}
