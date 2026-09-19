import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	alternates: {
		canonical: "https://www.avicolasanantonio.com/"
	}
};


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-6 py-24 text-center">
				<div className="max-w-3xl rounded-3xl bg-white/60 backdrop-blur-sm px-6 py-10 sm:px-12">
					<h1 className={title({ class: "text-green-800 font-bold text-balance text-2xl min-[360px]:text-3xl sm:text-4xl", size: "lg" })}>Granja&nbsp;Avícola San&nbsp;Antonio&nbsp;C.&nbsp;B.</h1>
					<h2 className={subtitle({ class: "mt-8 mx-auto text-green-800 font-bold" })}>
						Productores de huevos en Gran&nbsp;Canaria. Cría de gallinas ponedoras.
					</h2>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
						<Link
							href="/contacto/"
							className={buttonStyles({ radius: "none", variant: "flat", class: "text-white bg-green-800 px-6 sm:px-10 py-6 font-bold uppercase" })}
						>
							Contáctanos
						</Link>
						<Link
							href="tel:+34928781329"
							className={buttonStyles({ radius: "none", variant: "bordered", class: "text-green-800 border-green-800 bg-white/70 px-6 sm:px-10 py-6 font-bold" })}
						>
							Llámanos: (+34) 928781329
						</Link>
					</div>
					<p className="mt-6 text-sm font-semibold text-green-800">
						<span className="whitespace-nowrap">Lunes a Viernes 08:00 - 13:00</span> · <span className="whitespace-nowrap">Sábados 08:00 - 11:00</span> · <span className="whitespace-nowrap">Ingenio, Gran&nbsp;Canaria</span>
					</p>
				</div>
			</div>

			<div className="bg-white flex w-full justify-center">
				<div className="lg:flex justify-center max-w-6xl my-8 py-8">
					<div className="lg:w-1/2 my-12 px-12 lg:px-0 flex mx-auto justify-center">
						<Image
							as={NextImage}
							isZoomed
							width={576}
							height={324}
							preload
							src="/huevos_portada.webp"
							alt="Cestas de mimbre con huevos frescos"
							style={{ height: 'auto' }}
						>
						</Image>
					</div>
					<div className="lg:w-1/2 px-12 flex mx-auto">
						<div className="mx-auto my-auto text-center lg:text-left ">
							<h2 className="text-green-800 my-4 font-bold text-2xl">
								Huevos frescos
							</h2>
							<p className="text-green-800">
								Recogemos y repartimos nuestra producción diariamente. De esta forma podemos asegurar que nuestro producto es fresco y siempre se encuentra en perfecto estado de conservación.
							</p>
							<Link
								href="/huevos/"
								className={buttonStyles({ radius: "none", variant: "flat", class: "text-white bg-green-800 px-10 py-6 mt-6 font-bold uppercase" })}
							>
								Ver huevos
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-amber-100 flex w-full justify-center">
				<div className="lg:flex justify-center max-w-6xl my-8 py-8">
					<div className="lg:w-1/2 px-12 flex mx-auto">
						<div className="mx-auto my-auto text-center lg:text-left ">
							<h2 className="text-green-800 my-4 font-bold text-2xl">
								Cría de gallinas
							</h2>
							<p className="text-green-800">
								Realizamos cría de gallinas para otras explotaciones ganaderas bajo encargo. También vendemos al por menor a particulares, tiendas y pequeñas granjas.
							</p>
							<Link
								href="/gallinas/"
								className={buttonStyles({ radius: "none", variant: "flat", class: "text-white bg-green-800 px-10 py-6 mt-6 font-bold uppercase" })}
							>
								Ver gallinas
							</Link>
						</div>
					</div>
					<div className="lg:w-1/2 my-12 px-12 lg:px-0 flex mx-auto justify-center">
						<Image
							as={NextImage}
							isZoomed
							width={576}
							height={324}
							src="/gallinas_portada.webp"
							alt="Gallinas ponedoras de plumaje marrón en la granja"
							style={{ height: 'auto' }}
						>
						</Image>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-center my-12">
				<div className="text-center justify-center max-w-6xl my-8 py-8 px-6">
					<h2 className={title({ class: "text-green-800 font-bold", size: "lg" })}>Elige producto local</h2>
					<p className={subtitle({ class: "mt-12 mx-auto text-green-800 font-normal md:w-3/4!" })}>
						Todos los huevos que se venden dentro de la Unión Europea están obligados a llevar marcado un código que indica la procedencia del mismo. Esto nos permite como consumidores, de forma muy sencilla, elegir un producto local cuando vamos al supermercado.
					</p>
					<Link
						href="/etiquetado-huevos/"
						className={buttonStyles({ radius: "none", variant: "flat", class: "text-white bg-green-800 px-10 py-6 mt-6 font-bold uppercase" })}
					>
						Entender el etiquetado
					</Link>
				</div>
			</div>
		</section >
	);
}
