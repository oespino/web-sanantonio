import { ExternalLinkLogo, CSVLogo } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { Metadata } from "next";
import { Image } from "@heroui/image";
import NextImage from "next/image";

export const metadata: Metadata = {
    title: "Transparencia",
    alternates: {
        canonical: "https://www.avicolasanantonio.com/transparencia/"
    }
};

export default function TransparenciaPage() {
    return (
        <div className="text-green-800">
            <h1 className={title()}>Portal de transparencia</h1>
            <p className="py-4">
                A través del Portal de Transparencia de Granja Avícola San Antonio C.B. puede acceder a toda
                la información pública de la empresa. Este portal de transparencia se ha creado siguiendo las
                indicaciones del Comisionado de Transparencia del Gobierno de Canarias y en cumplimiento
                con la <a target="_blank" href="https://www.boe.es/eli/es/l/2013/12/09/19/con" className="font-bold">Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y
                    buen gobierno <ExternalLinkLogo size={16} className="inline mb-1" /></a> y la <a target="_blank" href="https://www.boe.es/eli/es-cn/l/2014/12/26/12" className="font-bold">Ley 12/2014, de 26 de diciembre, de transparencia y de acceso a la
                        información pública <ExternalLinkLogo size={16} className="inline mb-1" /></a>.
            </p>
            <p className="py-4">
                Esta información será actualizada bienalmente, para que nuestros clientes, proveedores y la
                ciudadanía en general puedan consultar la información sobre nuestra empresa.
            </p>
            <p className="py-4">
                Más información: <a target="_blank" href="https://transparenciacanarias.org/" className="font-bold">Comisionado de Transparencia del Gobierno de Canarias. <ExternalLinkLogo size={16} className="inline mb-1" /></a>
            </p>
            <p className="py-4">
                Última actualización: 11 de Abril de 2024.
            </p>
            <p className="py-4">
                Período: 2022-2023
            </p>


            <h2 id="informacionorganizativa" className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Información Organizativa</h2>
            <h3 className="text-green-800 font-bold text-md">Normativa Aplicable</h3>
            <p className="py-4">
                Granja Avícola San Antonio C.B. es una Comunidad de Bienes registrada en el Registro de
                Entidades Jurídicas del Ministerio de Economía y Hacienda, y se rige por las siguientes
                normativas:
            </p>
            <p className="py-4 pl-4">
                <a target="_blank" href="https://www.boe.es/eli/es/rd/1889/07/24/(1)/con">
                    <span className="font-bold">· Real Decreto de 24 de julio de 1889 por el que se publica el Código
                        Civil. <ExternalLinkLogo size={16} className="inline mb-2 mx-1" /></span>
                </a>
            </p>
            <p className="pl-4">
                <a target="_blank" href="https://www.boe.es/eli/es/l/2013/12/09/19/con">
                    <span className="font-bold">· Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen
                        gobierno. <ExternalLinkLogo size={16} className="inline mb-2 mx-1" /></span>
                </a>
            </p>
            <h3 className="text-green-800 font-bold mt-6 text-md">Funciones, competencias, objeto social y fin fundacional de la entidad</h3>
            <p className="py-4">
                Las funciones, competencias, objeto social y fin fundacional vienen recogidos en los estatutos,
                que es la explotación de granja avícola. <span className="font-bold">CNAE 0147. Avicultura.</span>
            </p>


            <h2 id="administradoresydirectivos" className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Administradores y directivos</h2>
            <p className="py-4">
                La comunidad de bienes se administra a través de una serie de administradores solidarios,
                aunque se faculta a uno de ellos como representante de la misma. Ninguno de los socios
                recibe remuneración por el cargo de administrador / representante.
            </p>
            <p className="py-4">
                La empresa ha tenido en plantilla 3 empleados la mayor parte del período.
            </p>
            <Image
                as={NextImage}
                width={800}
                height={200}
                src="/orgchart.svg"
                alt="Organigrama de la empresa"
            >
            </Image>


            <h2 id="serviciosyprocedimientos" className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Servicios y procedimientos</h2>
            <p className="py-4">
                Aunque nuestra empresa no esté obligada a disponer de un canal interno para denuncias
                según la <a target="_blank" href="https://www.boe.es/eli/es/l/2023/02/20/2/con" className="font-bold">Ley 2/2023, de 20 de febrero, reguladora de la protección de las personas que
                    informen sobre infracciones normativas y de lucha contra la corrupción <ExternalLinkLogo size={16} className="inline mb-1" /></a>,
                pues no alcanza la cifra de 50 trabajadores, la empresa dispone del correo <a target="_blank" href="mailto:transparencia@avicolasanantonio.com" className="font-bold">transparencia@avicolasanantonio.com</a> como
                sistema interno de información.
            </p>
            <p className="py-4">
                Este canal permite, si así se desea, la presentación de informaciones sin identificación,
                garantizando la ausencia de represalias de cualquier tipo por denuncias que se hayan remitido
                de buena fe, debiendo contar el denunciante con indicios razonables para sustentar la misma y
                quedando excluidas la remisión de informaciones falsas o tergiversadas, así como aquellas que
                se han obtenido de manera ilícita.
            </p>


            <h2 id="economicofinanciera" className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Económico – Financiera</h2>
            <h3 className="text-green-800 font-bold text-md">Cuentas anuales de la entidad</h3>
            <p className="py-4">
                Granja Avícola San Antonio C.B. cumple con sus obligaciones documentales y contables tal y
                como se establece el artículo 6 de la <a target="_blank" href="https://www.boe.es/eli/es/l/2014/11/27/27/con" className="font-bold">Ley 27/2014, de 27 de noviembre, del Impuesto sobre
                    Sociedades <ExternalLinkLogo size={16} className="inline mb-1" /></a>,
                y el artículo 35.4 de la <a target="_blank" href="https://www.boe.es/eli/es/l/2003/12/17/58/con" className="font-bold">Ley 58/2003, de 17 de diciembre, General Tributaria <ExternalLinkLogo size={16} className="inline mb-1" /></a>.
            </p>

            <h3 className="text-green-800 font-bold mt-6 text-md">Informes de auditoría de cuentas y de fiscalización por los órganos de
                control externo</h3>
            <p className="py-4">
                Granja Avícola San Antonio C.B. no está obligada a auditar sus cuentas al tratarse de una
                comunidad de bienes y tal y como se especifica en los artículos anteriormente citados está
                sometida al régimen de atribución de rentas.
            </p>


            <h2 id="contratos" className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Contratos</h2>
            <p className="py-4">
                A continuación se pone a disposición en distintos formatos la información relativa a contratos
                formalizados con administraciones y organismos públicos para los ejercicios indicados, así
                como los datos estadísticos relacionados con los mismos.
            </p>
            <p className="pl-8">
                No se ha formalizado ningún contrato con ninguna entidad pública.
            </p>
            <p className="pl-8">
                No se ha desistido o renunciado a ningún contrato.
            </p>
            <p className="pl-8">
                No se realizaron modificaciones sobre los contratos formalizados.
            </p>


            <h2 id="convenios" className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Convenios</h2>
            <p className="py-4">
                A continuación se pone a disposición las informaciones relativas a convenio y encomiendas de
                gestión formalizadas con administraciones y organismos públicos para los ejercicios indicados.
            </p>
            <p className="pl-8">
                No se ha formalizado ningún convenio y/o encomienda de gestión con ninguna entidad
                pública.
            </p>
            <p className="pl-8">
                No se ha desistido o renunciado a ningún convenio y/o encomienda de gestión.
            </p>
            <p className="pl-8">
                No se realizaron modificaciones sobre los convenios y/o encomiendas de gestión
                formalizados.
            </p>


            <h2 id="ayudasysubvenciones" className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Ayudas y subvenciones</h2>
            <p className="py-4">
                A continuación se detalla la lista de ayudas y subvenciones recibidas a través de
                administraciones y organismos públicos para el ejercicio indicado.
            </p>
            <p className="py-4 pl-4">
                <a target="_blank" href="/subvenciones2024.csv">
                    <span className="font-bold">· Listado de subvenciones. <CSVLogo size={16} className="inline mb-2 mx-1" /></span>
                </a>
            </p>
        </div >
    );
}
