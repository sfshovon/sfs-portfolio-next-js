import ProjectItem from '../components/Projects/ProjectItem';
import folderSystemViewer from '../public/assets/projects/folder-system-viewer.jpg';
import meetify from '../public/assets/projects/meetify.jpg';
import iPhoneStore from '../public/assets/projects/simple-bootstrap-responsive-project-1.jpg';
import cookingMania from '../public/assets/projects/simple-html-css-responsive-project-1.jpg';
import informationFinder from '../public/assets/projects/simple-js-api-food-player-country.jpg';
import dailyForeCast from '../public/assets/projects/simple-js-api-weather-app.jpg';
import pinBanking from '../public/assets/projects/simple-js-pin-matcher.jpg';
import regularWorkTracker from '../public/assets/projects/simple-js-todo-app.jpg';
import groceryStore from '../public/assets/projects/simple-react-js-grocery-store.jpg';
import connectingHub from '../public/assets/projects/simple-react-js-mui-responsive-social-media.jpg';
import yumCha from '../public/assets/projects/simple-react-js-restaurant.jpg';
import crudApp from '../public/assets/projects/simple-react-node-mongo-crud.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full md:pt-8'>
      <div className='max-w-[1240px] mx-auto'>
        <h2 className='uppercase tracking-widest text-[#262452] mt-20'>
          Projects
        </h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <ProjectItem
            title='Yum Cha District'
            backgroundImg={yumCha}
            projectUrl='/projectDetails/yumCha'
            tech='React JS'
          />
          <ProjectItem
            title='Meetify'
            backgroundImg={meetify}
            projectUrl='/projectDetails/meetify'
            tech='React JS'
          />
          <ProjectItem
            title='Information Finder'
            backgroundImg={informationFinder}
            projectUrl='/projectDetails/informationFinder'
            tech='JavaScript & API'
          />
          <ProjectItem
            title='Banking System'
            backgroundImg={pinBanking}
            projectUrl='/projectDetails/pinBankingSystem'
            tech='JavaScript'
          />
          <ProjectItem
            title='Folder System Viewer'
            backgroundImg={folderSystemViewer}
            projectUrl='/projectDetails/folderSystemViewer'
            tech='React'
          />
          <ProjectItem
            title='Connecting Hub'
            backgroundImg={connectingHub}
            projectUrl='/projectDetails/connectingHub'
            tech='Material UI'
          />
          <ProjectItem
            title='Daily Forecast'
            backgroundImg={dailyForeCast}
            projectUrl='/projectDetails/dailyForecast'
            tech='JavaScript & API'
          />
          <ProjectItem
            title='Online Grocery Store'
            backgroundImg={groceryStore}
            projectUrl='/projectDetails/groceryStore'
            tech='React'
          />
          <ProjectItem
            title='Regular Work Tracker'
            backgroundImg={regularWorkTracker}
            projectUrl='/projectDetails/regularWorkTracker'
            tech='JavaScript'
          />
          <ProjectItem
            title='iPhone Store'
            backgroundImg={iPhoneStore}
            projectUrl='/projectDetails/iPhoneStore'
            tech='Bootstrap'
          />
          <ProjectItem
            title='Cooking Mania'
            backgroundImg={cookingMania}
            projectUrl='/projectDetails/cookingMania'
            tech='HTML & CSS'
          />
          <ProjectItem
            title='CRUD App'
            backgroundImg={crudApp}
            projectUrl='/projectDetails/crudApp'
            tech='MERN'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
