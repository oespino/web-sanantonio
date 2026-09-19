'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import NextImage from "next/image";

import { link as linkStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { useReducer } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {

	const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);
	const pathname = usePathname();
	const isActive = (href: string) =>
		href === "/" ? pathname === "/" : pathname.startsWith(href);

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-amber-100">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image
							as={NextImage}
							unoptimized
							radius="none"
							width="200"
							height="47"
							alt="Granja Avícola San Antonio"
							src="/logo.png"
							style={{ height: 'auto' }}
						/>
					</NextLink>
				</NavbarBrand>
				<div className="grow"></div>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href} isActive={isActive(item.href)}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"text-green-800 font-bold",
									"aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
								)}
								aria-current={isActive(item.href) ? "page" : undefined}
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle className="text-green-800" />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`} isActive={isActive(item.href)}>
							<Link
								className="text-green-800 aria-[current=page]:font-bold aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-4"
								aria-current={isActive(item.href) ? "page" : undefined}
								href={item.href}
								size="lg"
								onPress={() => setIsMenuOpen()}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
