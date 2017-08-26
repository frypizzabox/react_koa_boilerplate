import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Message } from './message.jsx';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;

ReactDOM.render(
	<Wrapper>
		<Title>
			<Message/>
		</Title>
	</Wrapper>,
  document.getElementById('app')
);
