import DentalService from '@/components/Services/DentalService/DentalService';
import ServicesHero from '@/components/Services/ServicesHero/ServicesHero';
import Container from '@/components/shared/Container/Container';
import React from 'react';

const page = () => {
    return (
        <div>
            <Container>
                <ServicesHero/>
                <DentalService/>
            </Container>
        </div>
    );
};

export default page;