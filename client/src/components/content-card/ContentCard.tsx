import { ReactElement } from "react";
import ArticlePreview from "../../DTOs/models/ArticlePreview";
import Colors from "../../core/ColorPalette";

interface props {
  content: ArticlePreview,
}

const ContentCard = ({
  content,
}: props): ReactElement => {

  return (
    <div style={{
      width: '10rem',
      height: '10rem',
      backgroundColor: Colors.TEXT,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {content.title}
    </div>
  );
};

export default ContentCard;