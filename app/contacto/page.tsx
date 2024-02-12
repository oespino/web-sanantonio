import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

export default function ContactPage() {
    return (
        <div className="text-green-800">
            <h1 className={title()}>Contacta con nosotros</h1>
            <p className="py-4">
                Si tienes alguna duda sobre nuestros servicios puedes ponerte en contacto con nosotros en el teléfono <Link href="tel:+34928781329"
                    title="phone">(+34) 928781329</Link> o envíanos un email a <Link href="mailto:info@avicolasanantonio.com"
                        title="email">info@avicolasanantonio.com</Link>.
            </p>
            <p>
                También puedes venir a visitarnos en nuestro horario comercial (Lunes a Viernes de 08:00 a 13:00 y Sábados de 08:00 a 11:00) a nuestras instalaciones. Ambas se encuentran en Ingenio.
            </p>

            <div>
                <h2 className={subtitle({ class: "mt-12 text-green-800 font-bold" })}>La Montañeta</h2>
                <div className="lg:flex width-full">
                    <div className="rounded-large lg:w-1/2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.594128632325!2d-15.429882323973214!3d27.914425916326774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4098935b909677%3A0x20f387b0e92823a2!2sGranja%20Av%C3%ADcola%20San%20Antonio%20C.B.!5e0!3m2!1ses!2ses!4v1707764070228!5m2!1ses!2ses"
                            width="100%" height="450" className="rounded-2xl" style={{ border: 0, opacity: 1 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="font-bold px-8 py-8 lg:pt-0 lg:w-1/2">
                        <div>
                            Cam. Viejo Al Carrizal, S/N
                        </div>
                        <div>
                            35250 Ingenio
                        </div>
                        <div>
                            Las Palmas
                        </div>
                        <div>
                            <Link
                                isExternal
                                href="https://maps.app.goo.gl/sc3rvoxqGbJwhdA48"
                            >
                                Cómo llegar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className={subtitle({ class: "mt-12 text-green-800 font-bold" })}>Los Moriscos</h2>
                <div className="lg:flex width-full">
                    <div className="rounded-large lg:w-1/2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.843232161968!2d-15.410359323972626!3d27.93745081530395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4099cf451e2ffb%3A0xf365021cf0ec692f!2sGranja%20Av%C3%ADcola%20San%20Antonio%20C.B.%20-%20Los%20Moriscos!5e0!3m2!1ses!2ses!4v1707765829789!5m2!1ses!2ses"
                            width="100%" height="450" className="rounded-2xl" style={{ border: 0, opacity: 1 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="font-bold px-8 py-8 lg:pt-0 lg:w-1/2">
                        <div>
                            Los Moriscos, S/N
                        </div>
                        <div>
                            35259 Ingenio
                        </div>
                        <div>
                            Las Palmas
                        </div>
                        <div>
                            <Link
                                isExternal
                                href="https://maps.app.goo.gl/76N4NDxubRveRH359"
                            >
                                Cómo llegar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}
