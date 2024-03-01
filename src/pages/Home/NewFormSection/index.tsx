import Card from "../../../components/Card";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NewFormSection = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <NavLink to="/editor">
        <Card>
          <div className="flex justify-center content-center cursor-pointer">
            <AiOutlinePlus size={80} color="grey" />
          </div>
        </Card>
      </NavLink>
    </div>
  );
};

export default NewFormSection;
