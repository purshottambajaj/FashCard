import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Faq from './Faq';
import Create from './Create';

function App() {
  return (
    <div className='p-3 py-10 container'>
        <Nav/>
        <Hero/>    
        <Create/>
        <Faq/>
    </div>
  );
}

export default App;
