import { ReactElement } from "react";
import ArticlePreview from "../../DTOs/models/ArticlePreview";
import ContentCard from "./ContentCard";

interface props {
  cards: ArticlePreview[],
}

const ContentCardDisplay = ({
  cards,
}: props): ReactElement => {

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex'
    }}>
      {cards.map((content, key) => (
        <div key={key}>
          <ContentCard content={content}/>
        </div>
      ))}
    </div>
  );
};

export default ContentCardDisplay;