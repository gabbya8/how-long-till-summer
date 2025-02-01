import React from "react";
import { motion } from "framer-motion";

const PalmTree = () => {
    return (
      <div className="palm-tree">
        <div className="tree-base"></div>
        <motion.div 
                className="tree-leaves"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
        
      </div>  
    )
};

export default PalmTree;