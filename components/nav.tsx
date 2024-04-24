import Image from "next/image";

export default function Nav() {
	return (
		<nav className="absolute w-screen z-50 flex items-center justify-between p-4 bg-gradient-to-b from-white dark:from-black">
			<div className="flex items-center justify-between w-full max-w-5xl mx-auto font-mono text-sm">
				<h1 className="hidden lg:flex">
					Some title
				</h1>
                <a href="/#footer">
                    Download
                </a>
			</div>
		</nav>
	);
}
