import { useState, useEffect } from "react";
import { SingleValue } from "react-select";
import Image from "next/image";

import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import TypeSelector, { SelectOptionProps } from "../components/TypeSelector";
import Player from "../components/Player";
import Button from "../components/Button";

import beatmaker from '../assets/beatmaker.png';
import fire from '../assets/fire.png'
import magician from '../assets/magician.png';

import beats from '../data/beats.json';
import { BeatModel } from "../models/Beat";

const Home = () => {

	const [filteredBeats, setFilteredBeats] = useState<BeatModel[]>(beats);
	const [highlights, setHighlights] = useState<BeatModel[]>([] as BeatModel[]);

	const [search, setSearch] = useState<string>("");
	const [typeSelected, setTypeSelected] = useState<SelectOptionProps>({} as SelectOptionProps);

	const handleTypeSelectorClick = (selection: SingleValue<SelectOptionProps>): void => {
		if(selection) {
			setTypeSelected(selection);
		}
	}

	const handleClearClick = (): void => {
		setSearch("");
		setTypeSelected({} as SelectOptionProps);
	}
	
	useEffect(() => {
		const highlights = beats.sort((a, b) => {
			if(a.plays > b.plays) {
				return -1;
			} else if(a.plays < b.plays) {
				return 1;
			}
			return 0;
		}).slice(0, 5);
			
		setHighlights(highlights);
	}, []);

	return (
		<main className="bg-gradient min-h-screen">
			<Header />

			<section>
				<Container>
					<div className="flex items-center">
						<Image alt="Beatmaker" src={beatmaker} />

						<div>
							<div className="flex items-center">
								<h1 className="text-5xl mr-2">Faça o circo pegar fogo!</h1>
								<Image alt="Fire Icon" src={fire} />
							</div>

							<h3 className="font-light text-xl mt-6">
								Monte sua música com um Beat CIRCUS e veja tudo ao seu redor pegando fogo!
							</h3>
						</div>
					</div>
				</Container>
			</section>

			<section>
				<Container>
					<div className="my-14">
						<div className="flex items-center mb-2">
							<Image alt="Magician Icon" src={magician} />
							<h5 className="text-lg ml-2">Atrações</h5>
						</div>

						<div className="flex items-center">
							<Input 
								value={search}
								setValue={setSearch}
								className="mr-10"
							/>

							<TypeSelector 
								onSelect={handleTypeSelectorClick}
							/>

							<Button 
								text="LIMPAR"
								onClick={handleClearClick}
								type="clear"
								className="ml-10 hover:scale-105"
							/>
						</div>

						<div className="mt-10 flex">
							<div className="mr-16">
								<h3 className="text-lg mb-4">Destaques</h3>

								{highlights.map((beat, index) => (
									<Player key={index} beat={beat} className="mb-8" />
								))}
							</div>

							<div className="w-[1px] bg-grey-800 shadow-white" />

							<div className="ml-16">
								<h3 className="text-lg mb-4">Resultados</h3>

								<div className="grid grid-cols-3 gap-8">
									{beats.map((beat, index) => (
										<div>
											<Player key={index} beat={beat} />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<Footer />
		</main>
	);
}

export default Home;