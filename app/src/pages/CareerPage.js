import { CustomCard } from '../components/Card'
import { SimpleGrid, Text } from '@chakra-ui/react'

const CareerPage = () => {
    return (
        <>
            <Text fontSize="md" mb={2} padding={"20px"}>work</Text>
            <SimpleGrid 
            columns={{ base: 1, md: 2 }}
            spacing={6}
            mb={6}
            gap="30px"
            minChildWidth="300px"
            justifyItems={'center'} >
                <CustomCard cardTitle={'Tradable Bits'} buttonText={'Link'} cardDescriptionOne={'Vancouver, British Columbia'} cardDescriptionTwo={'Software Engineer'} />
                <CustomCard cardTitle={'Ontario Teachers Pension Plan'} buttonText={'yolo'} cardDescriptionOne={'Toronto, Ontario'} cardDescriptionTwo={'Product Engineer'} />
            </SimpleGrid>

            <Text fontSize="md" mb={2}  padding={"20px"}>projects</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6} justifyItems="center">
                <CustomCard cardTitle={'Cadence'} buttonText={'yolo'} cardDescription={'yolo'} />
                <CustomCard cardTitle={'LinkMe'} buttonText={'yolo'} cardDescription={'yolo'} />
                <CustomCard cardTitle={'Gritt'} buttonText={'yolo'} cardDescription={'yolo'} />
                <CustomCard cardTitle={'Chess'} buttonText={'yolo'} cardDescription={'yolo'} />
            </SimpleGrid>

            <Text fontSize="md" mb={2}  padding={"20px"}>school</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6} justifyItems="center">
                <CustomCard cardTitle={'University of Waterloo'} buttonText={'yolo'} cardDescription={'yolo'} />
                <CustomCard cardTitle={'Wilfrid Laurier University'} buttonText={'yolo'} cardDescription={'yolo'} />
            </SimpleGrid>
        </>
    )
}

export default CareerPage
