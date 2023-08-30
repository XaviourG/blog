import { ReactElement } from "react";
import ArticlePreview from "../../DTOs/models/ArticlePreview";
import ContentCard from "./ContentCard";
import { motion } from "framer-motion";

interface props {
  cards: ArticlePreview[],
}

const ScrollingCardList = ({
  cards,
}: props): ReactElement => {

  return (
    
    <div style={{
      width: '100%',
      height: '100%',
      position:'absolute'
    }}>
      <motion.div
        transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
        animate={{ y: [-innerHeight, innerHeight]}}
      >
      {cards.map((content, key) => (
        <div key={key}>
          <ContentCard content={content} />
        </div>
      ))}
      </motion.div>
      <motion.div
        transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
        animate={{ y: [0, innerHeight*2]}}
      >
      {cards.map((content, key) => (
        <div key={key}>
          <ContentCard content={content} />
        </div>
      ))}
      </motion.div>
    </div>
  );
};

export default ScrollingCardList;