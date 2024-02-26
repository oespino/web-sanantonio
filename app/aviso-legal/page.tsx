import { subtitle, title } from "@/components/primitives";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aviso legal",
    alternates: {
        canonical: "https://www.avicolasanantonio.com/aviso-legal/"
    }
};

export default function AvisoLegalPage() {
    return (
        <div className="text-green-800">
            <h1 className={title()}>Aviso Legal</h1>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Identificación y Titularidad</h2>
            <p className="py-4">
                En cumplimiento del artículo 10 de la Ley 34 / 2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, el Titular expone sus datos identificativos.
            </p>
            <ul className="py-4 pl-8">
                <li><span className="font-bold">· Titular:</span> Granja Avícola San Antonio C. B.</li>
                <li><span className="font-bold">· NIF:</span>  E35283134</li>
                <li><span className="font-bold">· Domicilio:</span> C/ Andrea Doria 17, 2C, 35118, Las Palmas, España</li>
                <li><span className="font-bold">· Correo electrónico:</span> info@avicolasanantonio.com</li>
                <li><span className="font-bold">· Sitio Web:</span> www.avicolasanantonio.com</li>
            </ul>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Objeto</h2>
            <p className="py-4">
                La finalidad del sitio Web tiene por objeto informar sobre Granja Avícola San Antonio, las actividades que realiza y de los servicios que presta.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Condiciones de Uso</h2>
            <p className="py-4">
                La utilización del sitio Web le otorga la condición de Usuario, e implica la aceptación completa de todas las cláusulas y condiciones de uso incluidas en las páginas:
            </p>
            <ul className="py-4 pl-8">
                <li><span className="font-bold">· Aviso Legal</span></li>
            </ul>
            <p className="py-4">
                Si no estuviera conforme con todas y cada una de estas cláusulas y condiciones absténgase de utilizar este sitio Web.
            </p>
            <p className="py-4">
                El acceso a este sitio Web no supone, en modo alguno, el inicio de una relación comercial con el Titular.
            </p>
            <p className="py-4">
                A través de este sitio Web, el Titular le facilita el acceso y la utilización de diversos contenidos que el Titular o sus colaboradores han publicadon por medio de Internet.
            </p>
            <p className="py-4">
                A tal efecto, usted está obligado y comprometido a NO utilizar cualquiera de los contenidos del sitio Web con fines o efectos ilícitos, prohibidos en este Aviso Legal o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático propios o contratados por el Titular, de otros usuarios o de cualquier usuario de Internet.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Medidas de seguridad</h2>
            <p className="py-4">
                Los datos personales que facilite al Titular pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva a el Titular, que asume todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
            </p>
            <p className="py-4">
                No obstante, debe ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son enteramente fiables y que, por tanto el Titular no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos aunque el Titular pone todos los medios necesarios y toma las medidas de seguridad oportunas para evitar la presencia de estos elementos dañinos.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Datos personales</h2>
            <p className="py-4">
                Usted puede consultar toda la información relativa al tratamiento de datos personales que recoge el Titular en la página de la Política de Privacidad.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Contenidos</h2>
            <p className="py-4">
                El Titular ha obtenido la información, el contenido multimedia y los materiales incluidos en el sitio Web de fuentes que considera fiables, pero, si bien ha tomado todas las medidas razonables para asegurar que la información contenida es correcta, el Titular no garantiza que sea exacta, completa o actualizada. El Titular declina expresamente cualquier responsabilidad por error u omisión en la información contenida en las páginas de este sitio Web.
            </p>
            <p className="py-4">
                Queda prohibido transmitir o enviar a través del sitio Web cualquier contenido ilegal o ilícito, virus informáticos, o mensajes que, en general, afecten o violen derechos de el Titular o de terceros.
            </p>
            <p className="py-4">
                Los contenidos del Sitio Web tienen únicamente una finalidad informativa y bajo ninguna circunstancia deben usarse ni considerarse como oferta de venta, solicitud de una oferta de compra ni recomendación para realizar cualquier otra operación, salvo que así se indique expresamente.
            </p>
            <p className="py-4">
                El Titular se reserva el derecho a modificar, suspender, cancelar o restringir el contenido del Sitio Web, los vínculos o la información obtenida a través del sitio Web, sin necesidad de previo aviso.
            </p>
            <p className="py-4">
                El Titular no es responsable de los daños y perjuicios que pudieran derivarse de la utilización de la información del sitio Web o de la contenida en las redes sociales del Titular.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Política de cookies</h2>
            <p className="py-4">
                En la página Política de Cookies puede consultar toda la información relativa a la política de recogida y tratamiento de las cookies.
            </p>
            <p className="py-4">
                El Titular sólo obtiene y conserva la siguiente información acerca de los visitantes del Sitio Web:
            </p>
            <ul className="py-4 pl-8">
                <li>· El nombre de dominio del proveedor (PSI) y/o dirección IP que les da acceso a la red.</li>
                <li>· La fecha y hora de acceso al sitio Web.</li>
                <li>· La dirección de Internet origen del enlace que dirige al sitio Web.</li>
                <li>· El número de visitantes diarios de cada sección.</li>
                <li>· La información obtenida es totalmente anónima, y en ningún caso puede ser asociada a un Usuario concreto e identificado.</li>
            </ul>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Enlaces de interés a otros sitios Web</h2>
            <p className="py-4">
                El Titular puede proporcionarle acceso a sitios Web de terceros mediante enlaces con la finalidad de informar sobre la existencia de otras fuentes de información en Internet en las que podrá ampliar los datos ofrecidos en el sitio Web.
            </p>
            <p className="py-4">
                Estos enlaces a otros sitios Web no suponen en ningún caso una sugerencia o recomendación para que usted visite las páginas web de destino, que están fuera del control del Titular, por lo que Titular no es responsable del contenido de los sitios web vinculados ni del resultado que obtenga al seguir los enlaces.
            </p>
            <p className="py-4">
                Asimismo, el Titular no responde de los links o enlaces ubicados en los sitios web vinculados a los que le proporciona acceso.
            </p>
            <p className="py-4">
                El establecimiento del enlace no implica en ningún caso la existencia de relaciones entre Titular y el propietario del sitio en el que se establezca el enlace, ni la aceptación o aprobación por parte del Titular de sus contenidos o servicios.
            </p>
            <p className="py-4">
                Si accede a un sitio Web externo desde un enlace que encuentre en el Sitio Web usted deberá leer la propia política de privacidad del otro sitio web que puede ser diferente de la de este sitio Web.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Propiedad intelectual e industrial</h2>
            <p className="py-4">
                Todos los derechos están reservados.
            </p>
            <p className="py-4">
                Todo acceso a este sitio Web está sujeto a las siguientes condiciones: la reproducción, almacenaje permanente y la difusión de los contenidos o cualquier otro uso que tenga finalidad pública o comercial queda expresamente prohibida sin el consentimiento previo expreso y por escrito de Titular.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Limitación de responsabilidad</h2>
            <p className="py-4">
                La información y servicios incluidos o disponibles a través de este sitio Web pueden incluir incorrecciones o errores tipográficos. De forma periódica el Titular incorpora mejoras y/o cambios a la información contenida y/o los Servicios que puede introducir en cualquier momento.
            </p>
            <p className="py-4">
                El Titular no declara ni garantiza que los servicios o contenidos sean interrumpidos o que estén libres de errores, que los defectos sean corregidos, o que el servicio o el servidor que lo pone a disposición estén libres de virus u otros componentes nocivos sin perjuicio de que el Titular realiza todos los esfuerzos en evitar este tipo de incidentes.
            </p>
            <p className="py-4">
                Titular declina cualquier responsabilidad en caso de que existan interrupciones o un mal funcionamiento de los Servicios o contenidos ofrecidos en Internet, cualquiera que sea su causa. Asimismo, el Titular no se hace responsable por caídas de la red, pérdidas de negocio a consecuencia de dichas caídas, suspensiones temporales de fluido eléctrico o cualquier otro tipo de daño indirecto que te pueda ser causado por causas ajenas a el Titular.
            </p>
            <p className="py-4">
                Antes de tomar decisiones y/o acciones con base a la información incluida en el sitio Web, el Titular le recomienda comprobar y contrastar la información recibida con otras fuentes.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Jurisdicción</h2>
            <p className="py-4">
                Este Aviso Legal se rige íntegramente por la legislación española.
            </p>
            <p className="py-4">
                Siempre que no haya una norma que obligue a otra cosa, para cuantas cuestiones se susciten sobre la interpretación, aplicación y cumplimiento de este Aviso Legal, así como de las reclamaciones que puedan derivarse de su uso, las partes acuerdan someterse a los Jueces y Tribunales de la provincia de Las Palmas, con renuncia expresa de cualquier otra jurisdicción que pudiera corresponderles.
            </p>
            <h2 className={subtitle({ class: "text-green-800 font-bold mt-6" })}>Contacto</h2>
            <p className="py-4">
                En caso de que usted tenga cualquier duda acerca de estas Condiciones legales o quiera realizar cualquier comentario sobre este sitio Web, puede enviar un mensaje de correo electrónico a la dirección info@avicolasanantonio.com.
            </p>
        </div >
    );
}
