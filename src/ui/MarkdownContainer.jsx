import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PropTypes from "prop-types";

function MarkdownContainer({ children }) {
  return (
    <Markdown
      className="markdown_content pb-40 pt-10 text-textColor"
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </Markdown>
  );
}

MarkdownContainer.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MarkdownContainer;
