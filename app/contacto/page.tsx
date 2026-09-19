import { subtitle, title } from "@/components/primitives";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto",
    alternates: {
		canonical: "https://www.avicolasanantonio.com/contacto/"
	}
};

const locations = [
    {
        name: "La Montañeta",
        address: ["Cam. Viejo Al Carrizal, S/N", "35250 Ingenio", "Las Palmas"],
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.594128632325!2d-15.429882323973214!3d27.914425916326774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4098935b909677%3A0x20f387b0e92823a2!2sGranja%20Av%C3%ADcola%20San%20Antonio%20C.B.!5e0!3m2!1ses!2ses!4v1707764070228!5m2!1ses!2ses",
        directionsHref: "https://maps.app.goo.gl/sc3rvoxqGbJwhdA48",
    },
    {
        name: "Los Moriscos",
        address: ["Los Moriscos, S/N", "35259 Ingenio", "Las Palmas"],
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.843232161968!2d-15.410359323972626!3d27.93745081530395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4099cf451e2ffb%3A0xf365021cf0ec692f!2sGranja%20Av%C3%ADcola%20San%20Antonio%20C.B.%20-%20Los%20Moriscos!5e0!3m2!1ses!2ses!4v1707765829789!5m2!1ses!2ses",
        directionsHref: "https://maps.app.goo.gl/76N4NDxubRveRH359",
    },
];

export default function ContactPage() {
    return (
        <div className="text-green-800">
            <h1 className={title()}>Contacta con nosotros</h1>
            <p className="py-4">
                Si tienes alguna duda sobre nuestros servicios puedes ponerte en contacto con nosotros en el teléfono <Link href="tel:+34928781329"
                    title="phone" underline="always">(+34) 928781329</Link> o envíanos un email a <Link href="mailto:info@avicolasanantonio.com"
                        title="email" underline="always">info@avicolasanantonio.com</Link>.
            </p>
            <p>
                También puedes venir a visitarnos en nuestro horario comercial (Lunes a Viernes de 08:00 a 13:00 y Sábados de 08:00 a 11:00) a nuestras instalaciones. Ambas se encuentran en Ingenio.
            </p>

            {locations.map((location) => (
                <div key={location.name}>
                    <h2 className={subtitle({ class: "mt-12 text-green-800 font-bold" })}>{location.name}</h2>
                    <div className="lg:flex lg:gap-8">
                        <div className="lg:w-3/5">
                            <iframe src={location.mapSrc} title={`Mapa de ${location.name}`}
                                width="100%" height="450" className="rounded-2xl" style={{ border: 0, opacity: 1 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <address className="not-italic font-bold text-lg mt-6 lg:mt-0 lg:w-2/5 lg:self-center flex flex-col justify-center rounded-2xl bg-white/80 p-6 lg:p-8">
                            {location.address.map((line) => (
                                <div key={line}>{line}</div>
                            ))}
                            <Link
                                isExternal
                                href={location.directionsHref}
                                className={buttonStyles({ radius: "none", variant: "flat", class: "text-white bg-green-800 px-8 py-6 mt-6 font-bold uppercase self-start" })}
                            >
                                Cómo llegar
                            </Link>
                        </address>
                    </div>
                </div>
            ))}

        </div >
    );
}
