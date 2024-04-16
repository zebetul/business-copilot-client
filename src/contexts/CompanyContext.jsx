import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const CompanyContext = createContext();

function CompanyProvider({ children }) {
  const [currentCompany, setCurrentCompany] = useLocalStorageState(
    null,
    "currentCompany",
  );

  return (
    <CompanyContext.Provider value={{ currentCompany, setCurrentCompany }}>
      {children}
    </CompanyContext.Provider>
  );
}

function useCompany() {
  const context = useContext(CompanyContext);

  if (context === undefined) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }

  return context;
}

CompanyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line
export { CompanyProvider, useCompany };
