import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(({ children, className = "" }, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, boxShadow: "0 12px 40px -12px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

AnimatedCard.displayName = "AnimatedCard";

export default AnimatedCard;
