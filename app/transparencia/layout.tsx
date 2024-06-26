export default function TransparenciaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-4xl mx-auto bg-white bg-opacity-75">
			<div className="inline-block px-12 justify-center">
				{children}
			</div>
		</section>
	);
}