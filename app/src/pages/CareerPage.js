import { CareerCard } from '../components/Card'
import { SimpleGrid, Text } from '@chakra-ui/react'
import Otpp from "../info/Otpp.json"
import Tbits from "../info/TradableBits.json"
import Uw from "../info/Waterloo.json"
import Wlu from "../info/Laurier.json"
import SideProjects from "../info/sideProjects.json"

const CareerPage = () => {
    return (
        <>
            <Text fontSize="md" mb={2} padding={"20px"}>my notable work experiences...</Text>
            <SimpleGrid 
            columns={{ base: 1, md: 2 }}
            spacing={6}
            mb={6}
            gap="30px"
            minChildWidth="300px"
            justifyItems={'center'} >
                <CareerCard cardTitle={Otpp.title} link ={Otpp.link} location={Otpp.location} skills={Otpp.skills} description={Otpp.description} imageUrl={Otpp.imageUrl}  />
                <CareerCard cardTitle={Tbits.title} link ={Tbits.link} location={Tbits.location} skills={Tbits.skills} description={Tbits.description} imageUrl={Tbits.imageUrl}   />
            </SimpleGrid>

            <Text fontSize="md" mb={2}  padding={"20px"}>where I take my classes</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6} justifyItems="center">
                <CareerCard cardTitle={Uw.title}  link={Uw.link}  skills={Uw.skills} description={Uw.description} imageUrl={Uw.imageUrl} />
                <CareerCard cardTitle={Wlu.title} link = {Wlu.link} skills={Wlu.skills} description ={Wlu.description} imageUrl={Wlu.imageUrl} />
            </SimpleGrid>

            <Text fontSize="md" mb={2}  padding={"20px"}>side projects and tinkering</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6} justifyItems="center" rowGap={5} >
                {SideProjects.map((project, index)=> (
                    <CareerCard key={index} link={project.link} cardTitle={project.title} skills={project.skills} description={project.description} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default CareerPage
