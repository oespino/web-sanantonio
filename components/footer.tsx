import { Link } from "@nextui-org/link";
import { EmailLogo, PhoneLogo, ScheduleLogo } from "./icons";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export const Footer = () => {
    return (
        <footer className="backdrop-blur-lg bg-orange-950 opacity-90 text-green-800 font-bold">
            <section className="w-full flex items-center justify-center py-3 backdrop-blur-lg bg-orange-950 opacity-90 text-green-800 font-bold">
                <div className="max-w-6xl lg:flex items-center justify-center">
                    <div className="grow min-w-80 px-12">
                        <div className="flex m-4 items-center align-middle">
                            <div className="mx-4">
                                <ScheduleLogo />
                            </div>
                            <div>
                                <div>Lunes a Viernes</div>
                                <div>08:00 - 13:00</div>
                                <div>Sábados</div>
                                <div>08:00 - 11:00</div>
                            </div>
                        </div>
                        <div className="flex m-4 items-center align-middle">
                            <div className="mx-4">
                                <PhoneLogo />
                            </div>
                            <div>
                                <div>
                                    <Link
                                        isExternal
                                        className="flex items-center gap-1 text-current"
                                        href="tel:+34928781329"
                                        title="phone"
                                    >
                                        <p className="text-primary">(+34) 928781329</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex m-4 items-center align-middle">
                            <div className="mx-4">
                                <EmailLogo />
                            </div>
                            <div>
                                <div>
                                    <Link
                                        isExternal
                                        className="flex items-center gap-1 text-current"
                                        href="mailto:info@avicolasanantonio.com"
                                        title="email"
                                    >
                                        <p className="text-primary">info@avicolasanantonio.com</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-80 px-12">
                        <Image
                            as={NextImage}
                            width={300}
                            height={200}
                            src="/logo.png"
                            alt="Logo de la empresa"
                        >
                        </Image>
                    </div>
                </div>
            </section>
            <div className="border-1 border-green-800">
            </div>
            <div className="my-4 w-full flex items-center justify-center">
                Granja Avícola San Antonio C.B. © - <a href="/aviso-legal/">Aviso Legal</a>
            </div>
        </footer>
    )
}