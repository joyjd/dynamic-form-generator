import { ReactNode, createContext, useState } from "react";
import { GenericObject } from "../types/general";

type ContextType = {
  form: GenericObject[];
  updateForm: (data: GenericObject[]) => void;
};
const init = {
  form: [],
  updateForm: () => {},
};
export const FormContext = createContext<ContextType>(init);

type IMainProps = {
  children: ReactNode;
};
const FormContextProvider = (props: IMainProps) => {
  const { children } = props;
  const [form, setForm] = useState<GenericObject[]>([]);
  const updateForm = (data: GenericObject[]) => {
    setForm(data);
  };

  const contextValue: ContextType = {
    form,
    updateForm,
  };
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export default FormContextProvider;
