import React, {useEffect} from "react"
import Unity, {UnityContext} from "react-unity-webgl";


const GameDemo = ({setCollapsedNav}) =>{

    useEffect(() =>{
        setCollapsedNav(true);

        return function cleanup(){
            setCollapsedNav(false);
        }
    }, []);

    const unityContext = new UnityContext({
        loaderUrl: "/build/builds.loader.js",
        dataUrl: "/build/builds.data",
        frameworkUrl: "/build/builds.framework.js",
        codeUrl: "/build/builds.wasm"
    });

    return (
        <div>
            <div style={{textAlign:"center"}}>
                <Unity
                    unityContext={unityContext}
                    style={{
                        border:"4px solid grey",
                        borderRadius:"4px",
                        width: "95vw"
                    }}
                />
            </div>
        </div>
    );
}

export default GameDemo;
