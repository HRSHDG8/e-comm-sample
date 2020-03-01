import React, { FunctionComponent } from 'react';
import Developer, { Dev } from './Developer';
import harsh from '../../../images/profile/harsh.jpg'
import deepak from '../../../images/profile/deepak.jpg'
import shantam from '../../../images/profile/shantam.jpg'
const AboutUs: FunctionComponent<any> = () => {
    const devs: Dev[] = [{
        fName: 'Harsh',
        lName: 'Maheshwari',
        image: harsh,
        company: 'JP Morgan Chase',
        linkedIn: 'https://www.linkedin.com/in/harsh-maheshwari-350446126/',
        github: 'https://github.com/HRSHDG8',
        about: 'I love creating solutions that reduce redundancy and increase productivity, I am passionate about cloud, microservices and micro front ends.'
    }, {
        fName: 'Deepak',
        lName: 'Tiwari',
        image: deepak,
        company: 'JP Morgan Chase',
        linkedIn: 'https://www.linkedin.com/in/deodaardeepak/',
        about: 'The best developer in the world, freelancer having delivered over 10+ projects.'
    }, {
        fName: 'Shantam',
        lName: 'Mittal',
        image: shantam,
        company: 'JP Morgan Chase',
        linkedIn: 'https://www.linkedin.com/in/shantammittal/',
        about: 'Spring Boot is my passion'
    }]
    return (
        <div>
            {devs.map(dev => <Developer {...dev} />)}
        </div>
    )
}
export default AboutUs;