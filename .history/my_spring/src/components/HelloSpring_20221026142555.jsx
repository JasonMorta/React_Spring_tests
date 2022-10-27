import { useSpring, animated } from 'react-spring'

function Text() {
  const [flip, set] = useStat(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.h1 style={props}>hello</animated.h1>
}