import React from "react";
import { motion } from "framer-motion";
import "../css/BeachScene.css";
import Clock from "./Clock";
import PalmTree from "./PalmTree";
import MusicButton from "./MusicButton";

const BeachScene = () => {
  return (
    <div className="scene">
      <div className="cloud"></div>
      <div className="sun-cloud"></div>
      
      
      
      
      <motion.div 
        className="waves"
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="sand"></div>
      <PalmTree></PalmTree>
      
      <motion.div 
        className="coconut"
        animate={{ x: ["100%", "0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      <div className="timer"><Clock></Clock></div>
      <MusicButton></MusicButton>
    </div>
  );
};

export default BeachScene;

