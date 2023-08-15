import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/*controls the visual art by the name section*/}
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Wiktoria</span>.</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a bilingual MSci Student who has an intense interest in everything AI. 
            I also have some interest in Full-Stack development and Software 
            Engineering, although my passion lies in research and AI development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero