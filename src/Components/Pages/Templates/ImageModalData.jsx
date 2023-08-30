import { AiOutlineLayout, AiOutlineWarning } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ImageModalData = ({ selectedData, closeModal }) => {
  const { title, img, img_url, author, description } = selectedData;
  return (
    <>
      <div className="relative">
        <RxCross1
          title="close"
          onClick={closeModal}
          className="absolute block md:hidden text-lg font-bold cursor-pointer -top-4 -right-4"
        />
      </div>
      <div className="md:flex justify-between gap-4">
        <div className="md:flex justify-between gap-4">
          <img src={img} alt="" />
        </div>
        <div className="lg:ml-10">
          <h4 className="text-2xl font-bold">{title}</h4>
          <div className="flex items-center gap-2 mt-4 text-gray-600">
            <p className="text-xs font-medium border-[2px] px-2 py-1 rounded-sm">
              {description[0]}
            </p>
            <p className="text-xs font-medium border-[2px] px-2 py-1 rounded-sm">
              {description[1]}
            </p>
          </div>
          <div className="flex gap-2 items-center mt-4 mb-2">
            <img className="w-6 h-6 rounded-full avatar" src={img_url} alt="" />
            <h6 className="text-base text-gray-600">{author}</h6>
          </div>
          
          <Link to="/dashboard">
            <button className="btn btn-outline btn-sm my-6">
              Use this template
            </button>
          </Link>

          <div className="flex items-center gap-2 text-sm mb-2 text-gray-600">
            <AiOutlineLayout />
            <p>1:1 aspect ratio used</p>
          </div>
          <div className="flex items-center gap-2 text-sm mb-2 text-gray-600">
            <AiOutlineWarning />
            <p>Available for commercial use</p>
          </div>
        </div>
        <RxCross1
          title="close"
          onClick={closeModal}
          className="hidden md:block -mt-3 -mr-3 text-2xl font-bold cursor-pointer"
        />
      </div>
    </>
  );
};

export default ImageModalData;
