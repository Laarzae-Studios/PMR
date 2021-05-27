/*
The package used to make this happen can be found here:
https://github.com/jeffreylanters/react-unity-webgl
Laarzae Studios has received explicit permission from
react-unity-webgl developer Jeffrey Lanters.
This would not be nearly as seamless of a deploy without
all his hard work making this package exist!
 */
import React, {useEffect, useState} from "react"
import Unity, {UnityContext} from "react-unity-webgl";
import {hashCode} from "../../utils/hasher";


const GameDemo = ({setCollapsedNav}) =>{
    const [attempt, setAttempt] = useState("");


    useEffect(() => {
        setCollapsedNav(true);
        setAttempt(prompt("Please enter the password:"));

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
            {
                hashCode(attempt) === 1293022104 ?
                <div style={{textAlign: "center"}}>
                <Unity
                unityContext={unityContext}
                style={{
                border: "4px solid grey",
                borderRadius: "4px",
                width: "95vw"
            }}
                />
                </div> : <div style={{color: "white", width: "90vw", height:"80vh", border:"4px solid grey"}}>YOU GUESSED WRONG</div>
            }
        </div>
    );
}

export default GameDemo;
