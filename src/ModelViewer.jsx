import { useEffect, useState, useRef } from "react"

export default function ModelViewer(){

    const[angle, setAngle] = useState(1.5);
    const [autoRotate, setAutorotate] = useState(true);
    const modelViewerRef = useRef(null);

    let cameraOrbit = `${angle}deg ${angle}deg`
    // useEffect(()=>{
        
    //     if (autoRotate) setTimeout(()=>{setAngle((angle+0.0071)%360)},1);
    //     else{console.log(modelViewerRef.current.turntableRotation)}
    // },[angle, autoRotate]);
    return(
        <div 
            onMouseDown={()=>{setAutorotate(false)}}
            onMouseUp={()=>{setAutorotate(true)}}
                onMouseMove={()=>{console.log(modelViewerRef.current.getCameraOrbit())}}
            >
            <span className="background-text">

            </span>        
            <model-viewer 
                ref = {modelViewerRef}
                
                className='model-viewer'
                alt="Mirco" 
                src="shared-assets/models/suzanne.glb" 
                 ar 
                exposure='2'
                autoRotate='true'
                // camera-orbit={cameraOrbit}
                environment-image="shared-assets/environments/snow_field_2k.hdr" 
                shadow-intensity="1" 
                camera-controls 
                touch-action="pan-y">
            </model-viewer>
        </div>
    )
}