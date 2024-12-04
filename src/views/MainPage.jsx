import HeroSection from "../components/HeroSection/HeroSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import data_card from "../data/data_card.json";
import CardProject from "../components/ui/CardProject/CardProject";

function MainPage() {
  return (
    <div className="main_container">
      <HeroSection />
      <ProjectsSection>
        {data_card &&
          data_card.map((data) => (
            <CardProject
              key={data.id}
              title={data.title}
              img={data.img}
              id={data.id}
              status={data.status}
              stack={data.stack}
            />
          ))}
      </ProjectsSection>
    </div>
  );
}
export default MainPage;
