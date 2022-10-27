import ModelViewer from './ModelViewer';
import svg from './bambe.svg'
function App() {
  return (
    <div className={'layout'}>
      <div className={'logo'}>
        <img src={svg}></img>
        Bambounou X Bruce - Final Conference 
        1. Crush 2. Rai 3. Final Conference
        </div>
      <div><ModelViewer/></div>
    </div>  
  );
}

export default App;
