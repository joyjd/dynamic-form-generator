import FormGenerate from "./FormGenerate";
import FormReview from "./FormReview";
import FormContextProvider from "../../context/context";
const Editor = () => {
  return (
    <FormContextProvider>
      <section className="min-h-[90vh]">
        <div className="flex flex-row min-h-[90vh]">
          <div className="bg-slate-200 basis-1/2 py-10 pl-20 pr-10">
            <FormReview />
          </div>
          <div className="  bg-slate-50 basis-1/2 py-10 pr-20 pl-10">
            <FormGenerate />
          </div>
        </div>
      </section>
    </FormContextProvider>
  );
};

export default Editor;
