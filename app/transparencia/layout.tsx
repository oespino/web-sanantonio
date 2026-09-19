export default function TransparenciaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-4xl mx-auto bg-white/75">
			<div className="block w-full px-12">
				{children}
			</div>
		</section>
	);
}