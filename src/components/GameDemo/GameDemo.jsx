import React from "react"
import Unity, {UnityContext} from "react-unity-webgl";


const GameDemo = () =>{

    const unityContext = new UnityContext({
        loaderUrl: "/build/builds.loader.js",
        dataUrl: "/build/builds.data",
        frameworkUrl: "/build/builds.framework.js",
        codeUrl: "/build/builds.wasm"
    });
    const divHeight = "100vh";

    return (
        <div>
            <div style={{textAlign:"center"}}>
                <Unity unityContext={unityContext}/>
            </div>
        </div>
    );
}

export default GameDemo;
