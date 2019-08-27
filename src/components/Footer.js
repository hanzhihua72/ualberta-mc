import React from 'react';
import styled from 'styled-components';

const Content = styled.footer`
	color: ${props => props.theme.colors.secondary};
	text-align: center;
	font-size: 0.9rem;
	padding-top: 3rem;
	padding-bottom: 3rem;
	background: ${props => props.theme.colors.bg};
`;

const Footer = () => (
	<Content>
		Send me your in-game screenshots to zhhan@ualberta.ca and I'll add them
		to the site! Photos should preferably be taken in fullscreen.
	</Content>
);

export default Footer;
