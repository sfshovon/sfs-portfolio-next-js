import meetify from '../public/assets/projects/meetify.jpg';
import informationFinder from '../public/assets/projects/simple-js-api-food-player-country.jpg';
import pinBanking from '../public/assets/projects/simple-js-pin-matcher.jpg';
import yumCha from '../public/assets/projects/simple-react-js-restaurant.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full md:p-0 px-2'>
      <div className='max-w-[1240px] mx-auto'>
        <h2 className='uppercase tracking-widest text-[#262452] mt-20'>
          Projects
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Yum Cha District'
            backgroundImg={yumCha}
            projectUrl='/yumCha'
            tech='React JS'
          />
          <ProjectItem
            title='Meetify'
            backgroundImg={meetify}
            projectUrl='/meetify'
            tech='React JS'
          />
          <ProjectItem
            title='Information Finder'
            backgroundImg={informationFinder}
            projectUrl='/informationFinder'
            tech='JavaScript & API'
          />
          <ProjectItem
            title='Banking System'
            backgroundImg={pinBanking}
            projectUrl='/pinBankingSystem'
            tech='JavaScript'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
