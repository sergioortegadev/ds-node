import { createContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openFormEdit, setOpenFormEdit] = useState(false);
  const [openTable, setOpenTable] = useState(false);

  const openNav = (btn) => {
    switch (btn) {
      case "home":
        {
          setOpenForm(false);
          setOpenFormEdit(false);
          setOpenTable(false);
        }
        break;

      case "edit":
        {
          setOpenForm(false);
          setOpenFormEdit(true);
          setOpenTable(false);
        }
        break;

      case "form":
        {
          setOpenForm(true);
          setOpenFormEdit(false);
          setOpenTable(false);
        }
        break;

      case "table":
        {
          setOpenForm(false);
          setOpenFormEdit(false);
          setOpenTable(true);
        }
        break;

      case "cards":
        {
          setOpenForm(false);
          setOpenFormEdit(false);
          setOpenTable(false);
        }
        break;

      default:
        console.log("bnt apretado");
        break;
    }
  };

  const data = { openForm, openFormEdit, openTable, openNav };
  return <NavContext.Provider value={data}>{children}</NavContext.Provider>;
};

export { NavProvider };
export default NavContext;
