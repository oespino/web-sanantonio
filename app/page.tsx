import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center">
			<div className="inline-block text-center justify-center py-64 min-h-screen">
				<h1 className={title({ class: "text-green-800 font-bold", size: "lg" })}>Granja Avícola San Antonio C. B.</h1>
				<br />
				<h2 className={subtitle({ class: "mt-12 text-green-800 font-bold" })}>
					Productores de huevos en Gran Canaria. Cría de gallinas ponedoras.
				</h2>
				<Link
					href="/contacto"
					className={buttonStyles({ radius: "none", variant: "flat", class: "text-white bg-green-800 px-10 py-6 mt-12 font-bold uppercase" })}
				>
					Contáctanos
				</Link>
			</div>

			<div className="bg-white flex w-full justify-center">
				<div className="lg:flex justify-center max-w-6xl my-8 py-8">
					<div className="lg:w-1/2 my-12 px-12 lg:px-0 flex mx-auto justify-center">
						<Image
							as={NextImage}
							isBlurred
							isZoomed
							width={600}
							height={400}
							src="/huevos_portada.jpg"
							alt="Foto de huevos frescos"
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
								href="/huevos"
								className={buttonStyles({ radius: "none", variant: "flat", class: "text-white bg-green-800 px-10 py-6 mt-6 font-bold uppercase" })}
							>
								Saber más
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
								href="/gallinas"
								className={buttonStyles({ radius: "none", variant: "flat", class: "text-white bg-green-800 px-10 py-6 mt-6 font-bold uppercase" })}
							>
								Saber más
							</Link>
						</div>
					</div>
					<div className="lg:w-1/2 my-12 px-12 lg:px-0 flex mx-auto justify-center">
						<Image
							as={NextImage}
							isBlurred
							isZoomed
							width={600}
							height={400}
							src="/gallinas_portada.jpg"
							alt="Foto de gallinas"
						>
						</Image>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-center my-12">
				<div className="text-center justify-center max-w-6xl my-8 py-8">
					<h1 className={title({ class: "text-green-800 font-bold", size: "lg" })}>Elige producto local</h1>
					<br />
					<h2 className={subtitle({ class: "mt-12 text-green-800 font-bold" })}>
						Todos los huevos que se venden dentro de la Unión Europea están obligados a llevar marcado un código que indica la procedencia del mismo. Esto nos permite como consumidores, de forma muy sencilla, elegir un producto local cuando vamos al supermercado.
					</h2>
				</div>
			</div>
		</section>
	);
}
