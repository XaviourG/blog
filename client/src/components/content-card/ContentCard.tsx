import { ReactElement } from "react";
import ArticlePreview from "../../DTOs/models/ArticlePreview";
import './ContentCard.css';

interface props {
  content: ArticlePreview,
}

const ContentCard = ({
  content,
}: props): ReactElement => {

  return (
      <div className="ContentCard">
        {content.title}
      </div>
  );
};

export default ContentCard;