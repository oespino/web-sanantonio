import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div className="text-green-800">
			<h1 className={title()}>Sobre nosotros</h1>
			<h2 className={subtitle({ class: "mt-12 text-green-800 font-bold" })}>Somos una empresa familiar con más de 45 años de experiencia en el sector</h2>
			<p className="py-4">
				Somos una empresa avícola familiar que comenzó en los años 70 con un pequeño lote de gallinas en el sureste de la isla. Desde entonces, y hasta ahora, dos generaciones más tarde, nuestra filosofía ha sido siempre la de producir un producto de calidad que llegue en perfectas condiciones de frescura al cliente.
			</p>
			<p className="py-4">
				Siempre hemos criado nuestras propias pollitas, desde que se reciben con un día de edad hasta que se acaba su ciclo productivo. Esto hace que podamos llevar un control de calidad a lo largo de toda la vida de la gallina, que nos permite conseguir un producto de calidad.
			</p>
			<p className="py-4">
				Actualmente disponemos de dos instalaciones en Ingenio, Gran Canaria, ambas con naves de recría y de puesta. Con el paso de los años hemos actualizado nuestros equipos de automatismo, para estar al día con las nuevas tecnologías, permitiendo cada vez más un control más minucioso y exhaustivo del producto, en su producción, recogida, empaquetado y transporte al destinatario final.
			</p>
			<p className="py-4">
				Tanto nosotros como nuestro personal cuenta con las cualidades necesarias para garantizar un control de calidad del huevo y la seguridad alimentaria del mismo, desde su producción hasta su venta en cualquiera de los canales de los que disponemos.
			</p>
			<p className="py-4">
				Nuestro producto lo vendemos directamente en las instalaciones, a distribuidores independientes y directamente en el mercado, haciendo reparto directo a los negocios que lo necesiten.
			</p>
		</div>
	);
}
