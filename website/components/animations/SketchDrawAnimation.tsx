'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState, Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from 'react';

interface SketchDrawAnimationProps {
  children: ReactNode;
  duration?: number;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  trigger?: 'scroll' | 'immediate';
  speed?: 'fast' | 'normal';
}

const SVG_SHAPE_TAGS = ['path', 'line', 'circle', 'ellipse', 'rect', 'polyline', 'polygon'];

export default function SketchDrawAnimation({
  children,
  duration = 1.2,
  staggerDelay = 0.08,
  delay = 0,
  once = true,
  className = '',
  trigger = 'scroll',
  speed = 'normal',
}: SketchDrawAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const shouldAnimate = trigger === 'immediate' || isInView;
  const dur = speed === 'fast' ? duration * 0.5 : duration;
  const stagger = speed === 'fast' ? staggerDelay * 0.4 : staggerDelay;

  return (
    <div ref={ref} className={className}>
      {processChildren(children, shouldAnimate, dur, stagger, delay)}
    </div>
  );
}

function processChildren(
  children: ReactNode,
  animate: boolean,
  duration: number,
  staggerDelay: number,
  baseDelay: number,
  indexRef: { current: number } = { current: 0 }
): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    const el = child as ReactElement<Record<string, unknown>>;
    const tag = typeof el.type === 'string' ? el.type : '';

    if (SVG_SHAPE_TAGS.includes(tag)) {
      const idx = indexRef.current++;
      const hasStroke = Boolean(el.props.stroke && el.props.stroke !== 'none');
      const hasFill = Boolean(el.props.fill && el.props.fill !== 'none');
      const elementDelay = baseDelay + idx * staggerDelay;

      if (hasStroke) {
        return (
          <AnimatedStroke
            key={idx}
            element={el}
            animate={animate}
            duration={duration}
            delay={elementDelay}
            hasFill={hasFill}
          />
        );
      }

      if (hasFill) {
        return (
          <motion.g
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: elementDelay + duration }}
          >
            {el}
          </motion.g>
        );
      }

      return el;
    }

    if (el.props.children) {
      const newChildren = processChildren(el.props.children as ReactNode, animate, duration, staggerDelay, baseDelay, indexRef);
      return cloneElement(el, {}, newChildren);
    }

    return el;
  });
}

function AnimatedStroke({
  element,
  animate,
  duration,
  delay,
  hasFill,
}: {
  element: ReactElement<Record<string, unknown>>;
  animate: boolean;
  duration: number;
  delay: number;
  hasFill: boolean;
}) {
  const pathRef = useRef<SVGElement>(null);
  const [pathLength, setPathLength] = useState(300);

  useEffect(() => {
    if (pathRef.current) {
      const el = pathRef.current as unknown as SVGGeometryElement;
      if (typeof el.getTotalLength === 'function') {
        setPathLength(el.getTotalLength());
      }
    }
  }, []);

  const tag = typeof element.type === 'string' ? element.type : 'path';
  const MotionTag = motion[tag as keyof typeof motion] as React.ComponentType<Record<string, unknown>>;

  if (!MotionTag) return element;

  const fillProps = hasFill
    ? {
        initial: { strokeDashoffset: pathLength, opacity: 1 },
        animate: animate
          ? { strokeDashoffset: 0, opacity: 1 }
          : { strokeDashoffset: pathLength, opacity: 1 },
      }
    : {
        initial: { strokeDashoffset: pathLength },
        animate: animate ? { strokeDashoffset: 0 } : { strokeDashoffset: pathLength },
      };

  const { children: elChildren, ...restProps } = element.props;

  return (
    <>
      <MotionTag
        ref={pathRef}
        {...restProps}
        fill={hasFill ? 'none' : (restProps.fill as string)}
        strokeDasharray={pathLength}
        {...fillProps}
        transition={{
          duration,
          delay,
          ease: [0.65, 0, 0.35, 1],
        }}
        style={{ willChange: 'stroke-dashoffset' }}
      >
        {elChildren}
      </MotionTag>
      {hasFill && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: delay + duration }}
        >
          {cloneElement(element, { stroke: 'none' })}
        </motion.g>
      )}
    </>
  );
}
