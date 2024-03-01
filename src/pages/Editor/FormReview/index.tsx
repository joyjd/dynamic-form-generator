import "jquery-ui-sortable";
import "formBuilder";
import "formBuilder/dist/form-render.min.js";
import ReactJson from "react-json-view";
import { useContext, useEffect, useRef } from "react";
import { FormContext } from "../../../context/context";
import Card from "../../../components/Card";
//import Button from "../../../components/button";

const FormReview = () => {
  const fb = useRef<HTMLFormElement>(null);
  const { form } = useContext(FormContext);

  useEffect(() => {
    console.log(form);
    const formData = form;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    $(fb.current).formRender({ formData });
  }, [form]);

  return (
    <div className="flex flex-col h-full w-full justify-center content-center ">
      <div className="w-full h-full">
        <Card>
          <div className="bg-white">
            <form ref={fb}></form>
          </div>
        </Card>
      </div>

      <div className="pt-10">
        {form.length > 0 && (
          <ReactJson src={form} theme="monokai" collapsed={true} />
        )}
      </div>
    </div>
  );
};

export default FormReview;
