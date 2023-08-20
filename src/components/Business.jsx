import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    
    <div className={`w-[34px] h-[34px] m-6 rounded-[12px] bg-quaternary ${styles.flexCenter}`}>
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Empower investments, <br className="sm:block hidden" /> our AI maximizes
        your returns.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Harness the potential of AI stock trading to optimize your portfolio, gain insights into market trends, and increase your earnings. With numerous trading strategies available, navigating the stock market becomes more efficient than ever.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
