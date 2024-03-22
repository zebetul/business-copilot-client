import PropTypes from "prop-types";

function Section({ children }) {
  return (
    <section className="relative mx-auto h-full w-full max-w-3xl px-2">
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
