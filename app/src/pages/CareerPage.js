import CareerTimeline from '../components/CareerTimeline'
import DualDegreeSection from '../components/DualDegreeSection'
import ProjectShowcase from '../components/ProjectShowcase'

const CareerPage = () => {
    return (
        <div style={{ padding: 'clamp(0.5rem, 2vw, 1rem)' }}>
            <CareerTimeline />
            <DualDegreeSection />
            <ProjectShowcase />
        </div>
    )
}

export default CareerPage
