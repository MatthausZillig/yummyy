import Layout from '../components/navigationBar';
import { Grid, Item } from '../components/yummyy';
import { Paragraph } from '../components/paragraph';
import { Title } from '../components/title';
import { ExternalLink } from '../components/externalLink';
import { Typography } from '@material-ui/core';
const GridSystem = () => {
	return (
		<Layout>
			<Grid
				columns={'1fr'}
				rows={'1fr 1fr 1fr 1fr'}
				areas={['one', 'two', 'tree', 'four']}
				justifyContent='center'
				alignContent='center'
				space='24px'
			>
				<Item
					flexDirection='column'
					justifySelf='flex-start'
					area='one'
				>
					<Title>Grid</Title>
					<Paragraph size='20px'>
						O yummyy grid foi construído para ser totalmente
						adaptável e responsivo.
					</Paragraph>
					<Paragraph size='16px'>
						Além de ser intuitivo, já que todas as <em>props</em>{' '}
						que recebe sào baseadas em{' '}
						<ExternalLink href='/'>flexbox</ExternalLink> e{' '}
						<ExternalLink href='/'>css grid.</ExternalLink>
					</Paragraph>
				</Item>
				<Item
					flexDirection='column'
					justifySelf='flex-start'
					area='two'
				>
					<Title>Como funciona</Title>
					<Paragraph size='20px'>
						O core do yummyy é o <em>css grid</em>, que é o sistema
						de layout mais poderoso do css, utilizado junto com{' '}
						<em>flexbox</em>.
					</Paragraph>
					<Paragraph size='16px'>
						Nosso yummyy consiste em duas tags: <em>Grid</em>, que é
						o elemento pai, é nele que você consegue definir o{' '}
						<em>grid-template-rows</em>,{' '}
						<em>grid-template-columns</em> e o{' '}
						<em>grid-template-areas</em>. O <em>Item</em> por sua
						vez é o elemento filho, pode ser um só ou muitos, nele
						você declara a <em>area</em>, <em>grid-row</em> ou{' '}
						<em>grid-column</em>.
					</Paragraph>
				</Item>
				<Item
					flexDirection='column'
					justifySelf='flex-start'
					area='tree'
				>
					Menu
				</Item>
				<Item
					flexDirection='column'
					justifySelf='flex-start'
					area='four'
				>
					Ads
				</Item>
			</Grid>
		</Layout>
	);
};

export default GridSystem;
