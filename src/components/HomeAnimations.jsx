import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

const HomeAnimation = ({ child }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            transition={{ duration: 1}}
        >
            {child}
        </motion.div>
    );
};

export default HomeAnimation;
