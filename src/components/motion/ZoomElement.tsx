import React from 'react'
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;

}
const ZoomElement = ({ children }: Props,) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}

    >
      {children}
    </motion.div>
  )
}

export default ZoomElement
