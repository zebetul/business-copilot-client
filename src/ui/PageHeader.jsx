import PropTypes from "prop-types";

function PageHeader({ children }) {
  return (
    <div className="page_header mb-20 mt-5 flex items-center justify-between">
      {children}
    </div>
  );
}

function Title({ children }) {
  return <h1 className="flex gap-3 text-4xl">{children}</h1>;
}

function Buttons({ children }) {
  return <div className="flex gap-2">{children}</div>;
}

PageHeader.Title = Title;
PageHeader.Buttons = Buttons;

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
