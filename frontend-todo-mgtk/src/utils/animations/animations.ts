import { AnimationProps } from 'framer-motion'

export const RightForLeft = {
    "initial": { x: "100%" },
    "animate": { x: 0, opacity: 1 },
    "exit": { x: "100%", opacity: 0 },
} as AnimationProps