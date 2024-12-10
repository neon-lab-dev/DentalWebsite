
import ConvenientDentalCare from "@/components/Locations/ConvenientDentalCare/ConvenientDentalCare";
import LocationsHero from "@/components/Locations/LocationsHero/LocationsHero";
import Container from "@/components/shared/Container/Container";


const page = () => {
    return (
        <div>
            <Container>
                <LocationsHero/>
                <ConvenientDentalCare/>
            </Container>
            
        </div>
    );
};

export default page;