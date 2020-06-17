import styled from 'styled-components';

export const Paragraph = styled.p`
	font-size: ${({ size }) => (size ? size : '24px')};
	margin: 3px;
	letter-spacing: 2px;
	line-height: 2rem;
`;
