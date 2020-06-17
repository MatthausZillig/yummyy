import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/navigationBar';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Yummyy</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
			</Head>
			<Link href='/grid'>grid</Link>
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</Layout>
	);
}
