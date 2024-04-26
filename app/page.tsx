import Image from "next/image";
import { Metadata } from "next";
import Nav from "@/components/nav";
import Card from "@/components/card";
import CardContainer from "@/components/card_container";

export const metadata: Metadata = {
	title: "Gemini Camera App",
	description: "...",
};

export default function Home() {
	return (
		<main className="flex flex-col items-center w-full">
			<div className="flex min-h-screen flex-col justify-center w-full relative mb-20">
				<Image
					src="/stars.gif"
					alt="A starry night sky"
					width={1920}
					height={1080}
					className="rounded-lg text-center absolute top-0 z-[-1] w-screem h-screen"
				/>
				<div className="flex flex-col">
					<h1 className="text-6xl font-bold text-center">
						Welcome to Gemini Camera App
					</h1>
					<p className="mt-4 text-lg text-center">
						An app to improve your photography skills
					</p>
				</div>
				<CardContainer className="absolute bottom-0 mb-10">
					<Card head="Using" quantifier="Gemini" foot="API" />
					<Card head="Trained with" quantifier="500+" foot="Images" />
					<Card
						head="Some title"
						quantifier="500+"
						foot="Some foot"
					/>
				</CardContainer>
      </div>
		</main>
	);
}