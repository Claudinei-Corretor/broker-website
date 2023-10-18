import { useState, useEffect } from 'react';

const Services = () => {
	const services = [
	"COMPRA",
	"VENDA",
	"CONTRATOS",
	"ALUGUEL",
	"AVALIAÇÃO",
	"ADMINISTRAÇÃO",
];

const descriptions = [
	"Encontre a propriedade dos seus sonhos.",
	"Venda seu imóvel com facilidade e no melhor preço.",
	"Consultoria especializada em contratos imobiliários."
	,"Encontre o imóvel perfeito para alugar.",
	"Avalie seu patrimônio com precisão.",
	"Deixe a gestão do seu imóvel conosco."
];

const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

useEffect(() => {
	const interval = setInterval(() => {
		setCurrentServiceIndex((prevIndex) =>
		(prevIndex + 1) % services.length);
	}, 10000);
	
	return () => {
		clearInterval(interval)
	};
});

const handleLiClick = (index) => {
	setCurrentServiceIndex(index);
};

return (
	<div className='SectionServices'>
		<div>
			<h2>Serviços</h2> {services.map((service, index) => (
			<li key={index} style={{ listStyle: currentServiceIndex === index ? 'disc' : 'circle' }} onClick={() => handleLiClick(index)}>
				{service}
			</li>))}
		</div>

		<div className='ServicesDescription'>
			<p>{descriptions[currentServiceIndex]}</p>
		</div>
	</div>

);
};

export default Services;
