import React from 'react';
import { View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingUI = ({ navigation }) => (
    <Onboarding
        onSkip={()=> navigation.navigate('Login')}
        onDone={()=> navigation.navigate('Login')}
        pages={[
            {
                backgroundColor: '#EDB16D',
                image: <Image source={require('../asserts/onboarding-img1.png')} />,
                title: 'Onboarding',
                subtitle: 'Here is our Counter Strike Guy'
            },
            {
                backgroundColor: '#ffff',
                image: <Image source={require('../asserts/onboarding-img2.png')} />,
                title: 'OnboardingDone',
                subtitle: 'Here is our Launchpad'
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../asserts/onboarding-img3.png')} />,
                title: 'OnboardingGoing',
                subtitle: 'Done with React Native Onboarding Swiper'
            }
        ]}
    />
);

export default OnboardingUI;
