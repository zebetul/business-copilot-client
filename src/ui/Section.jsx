import PropTypes from "prop-types";

function Section({ children }) {
  return (
    <section className="mx-auto flex h-full w-full max-w-3xl flex-col px-2">
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
