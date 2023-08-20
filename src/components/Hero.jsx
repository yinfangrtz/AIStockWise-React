import styles from "../style";
import { hero } from "../assets";
import LetterAnimation from './LetterAnimation';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.darkparagraph} ml-2`}>
            <span className="text-tertiary">💰 AI Insights</span> Trading Strategie{" "}
            <span className="text-tertiary">Investment</span> Opportunities
          </p>
        </div>


        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
          <LetterAnimation text="Transforming" />
        </h1> 
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] text-gradient">AI Trading </h1> 
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          <LetterAnimation text="Strategies." />
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our AI-driven approach employs cutting-edge algorithms to pinpoint 
        the most promising investment opportunities. We analyze market trends, 
        historical data, and risk factors..
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero} alt="billing" className="w-full  object-contain relative z-[5] rounded-[80px]" />
      </div>
    </section>
  );
};

export default Hero;
