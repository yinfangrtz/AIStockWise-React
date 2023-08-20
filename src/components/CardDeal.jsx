import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={card} alt="stock-trading" className="w-[100%] h-[100%]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover Smart Trading <br className="sm:block hidden" /> with AI Insights.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Utilize cutting-edge algorithms to analyze stock trends and maximize your portfolio's potential. Our AI-powered strategies offer intelligent insights and risk assessment, empowering you to make informed trading decisions.
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default CardDeal;
