import { Link } from "@nextui-org/link";
import { EmailLogo, PhoneLogo, ScheduleLogo } from "./icons";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export const Footer = () => {
    return (
        <footer className="backdrop-blur-lg bg-orange-950 opacity-90 text-amber-100 font-bold">
            <section className="w-full flex items-center justify-center py-3 backdrop-blur-lg bg-orange-950 opacity-90 text-amber-100 font-bold">
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
                                    <a target="_blank" href="tel:+34928781329">(+34) 928781329</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex m-4 items-center align-middle">
                            <div className="mx-4">
                                <EmailLogo />
                            </div>
                            <div>
                                <div>
                                    <a target="_blank" href="mailto:info@avicolasanantonio.com">info@avicolasanantonio.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-80 px-12">
                        <Image
                            as={NextImage}
                            width={300}
                            height={200}
                            src="/logo_inverted.png"
                            alt="Logo de la empresa"
                        >
                        </Image>
                    </div>
                </div>
            </section>
            <div className="border-1 border-amber-100">
            </div>
            <div className="my-4 w-full flex items-center justify-center">
                <span>Granja Avícola San Antonio C.B. © - </span><a className="pl-1" href="/aviso-legal/">Aviso Legal</a>
            </div>
        </footer>
    )
}