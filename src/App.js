import logo from './logo.svg';
import './App.css';
import HorizontalLinearStepper from './components/ HorizontalLinearStepper';
import ControlledOpenSpeedDial from './components/ControlledOpenSpeedDial';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import VerticalLinearStepper from './components/VerticalLinearStepper';
import Facebook from './components/Facebook';
import Summarybox from './components/Summarybox';
import Footer from './components/Footer';
import LanguageStudio from './components/LanguageStudio';
import Usecase from './components/Usecase';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Summarybox/>

      <LanguageStudio/>
      <Usecase/>
      <Footer/>
      
      
   </div>
  );
}

export default App;
