import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.style.scss'
import { HomePageContainer } from './homepage.style';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)

export default HomePage