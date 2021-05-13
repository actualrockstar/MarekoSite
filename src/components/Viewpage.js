import React, { useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import './home.css';
import mag1 from './img/marekoMag8.jpeg';
import mag2 from './img/marekoMag6.jpeg';
import mag3 from './img/marekoMag7.jpeg';
import mag4 from './img/MarekoMag4.jpg';
import mag5 from './img/marekoMag5.jpg';
import mag6 from './img/marekoMag3.jpg';
import mag7 from './img/MarekoMag1.jpg';
import mag8 from './img/marekoMeg2.jpg';

const images = [
    mag8, mag7, mag6, mag5, mag4, mag3, mag2, mag1
];

const from = i => ({pos: [-1000,0,0], y: 0, rot: [0,0,0], scale: 1.5});
const to = i => ({pos: [0,0,0], y: i*-4, z: i,rot: [0,0,0], scale: 1});



function Viewpage() {
    const [gone] = useState(() => new Set());
    const [springs, api] = useSprings(images.length, i => ({ ...to(i), from: from(i) }))
    
    const bind = useDrag(({args:[index], down, movement: [mx], delta: [xDelta], direction:[xDir], velocity, distance }) => {
        const trigger = velocity > 0.1;
        const dir = xDir < 0 ? -1 : 1;
        const moveX = (mx / window.innerHeight) * 100;
        if (!down && trigger) gone.add(index);
        api.start(i => {
          if (index !== i) return;
            const isGone = gone.has(index);
            const rot = trigger ? [360 * (moveX/100),180,360*(moveX/100)] : [0,0, 0];
            
            const pos = mx < 0 ? [-350-mx*Math.random(),mx*i,0] : [0,0,0];
            const z = i/.5;
            if (down) {console.log(pos)}
            const scale = down ? 1.1 : 1;
            return {pos, z, scale, rot}
        });
        if (!down && gone.size === images.length) setTimeout(() => gone.clear() || api.start(i => to(i)), 600)
  
  });
   
  
   return (
   <div className="anime">
        {springs.map(({pos, z, rot, scale}, i) => <animated.div key={i} {...bind(i)} className="outer"  style={{
          
          transform: rot.to((x, y, z) => (`rotateX(0deg) rotateY(${y}deg) rotateZ(0deg)`)),
          transform: pos.to((x,y,z) => (`translate3d(${x}px, ${y}px, ${z}px) `))
        }} >
        <animated.div {...bind(i)} className="inner" style={{
          transform: rot.to((x, y, z) => (`rotateX(0deg) rotateY(${y}deg) rotateZ(0deg)`)),
          scale,
          backgroundImage: `url(${images[i]})`}}/>
        </animated.div>)}
    </div>
   );
}

export default Viewpage;