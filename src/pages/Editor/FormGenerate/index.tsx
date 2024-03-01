import "jquery-ui-sortable";
import "formBuilder";
import "formBuilder/dist/form-render.min.js";

import { useContext, useEffect, useRef, useState } from "react";

import { FormContext } from "../../../context/context";
import { GenericObject } from "../../../types/general";
import Button from "../../../components/button";
import { FormConfig } from "../../../config/formConfig";

const FormGenerate = () => {
  const fb = useRef<HTMLDivElement>(null);
  const renderFirst = useRef<boolean>(false);

  const [formBuilder, setFormBuilder] = useState<GenericObject>({});
  const { updateForm } = useContext(FormContext);

  useEffect(() => {
    if (!renderFirst.current) {
      renderFirst.current = true;

      if (!formBuilder?.formData) {
        console.log("useEffect executed", formBuilder?.formData);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const formGenerator = $(fb.current).formBuilder(FormConfig);
        setFormBuilder(formGenerator);
      }
    }
  }, []);

  async function saveData() {
    console.log("formdata", formBuilder.formData);
    updateForm([...formBuilder.actions.getData()]);
  }
  function clearData() {
    formBuilder.actions.clearFields();
    updateForm([]);
  }

  return (
    <div>
      <h1>Generate Form</h1>
      <div className="sampleForm p-2 border bg-white" ref={fb} />
      <div className="pt-10">
        <Button onClick={() => saveData()}>
          <>Save</>
        </Button>
        <Button onClick={clearData}>
          <>Clear</>
        </Button>
      </div>
    </div>
  );
};

export default FormGenerate;
