import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BsArrowBarUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";
const Application = () => {
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm();
  const { theme, changesThemeTextColor } = useTheme();

  const onSubmit = (data) => {
    console.log(data);

    fetch("https://online-video-editing-platform-server.vercel.app/jobPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <div
      className={`max-w-[307px] md:max-w-full text-center mx-3 md:mx-9 my-8 md:my-14 ${changesThemeTextColor()}`}
    >
      <h1 className="text-3xl font-medium leading-none py-2 ">
        General Application
      </h1>
      <p className="text-base font-medium py-2 ">
        Can't find a career you're looking for? We want to hear from you, <br />{" "}
        please send your application by hitting the button below.
      </p>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn rounded-full text-white bg-violet-500 hover:bg-violet-600 group drawer-button"
          >
            Send Application
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu overflow-y-auto  px-4 w-4/5 md:w-1/2  min-h-[1100px] md:min-h-[1400px]  absolute z-10 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <p
              className={`font-normal mt-20 lg:mt-0 text-lg ${changesThemeTextColor()}`}
            >
              General Application
            </p>
            <div className="divider "></div>

            <div
              className={`w-full flex flex-col justify-center items-center text-gray-800 rounded-xl ${changesThemeTextColor()}`}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-4 lg:gap-8">
                  <div className="form-control  md:w-full ">
                    <label className="label">
                      <span
                        className={`after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium ${changesThemeTextColor()}`}
                      >
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className="min-w-[280px] w-full md:px-3 md:py-2 border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-900 "
                    />
                  </div>
                  <div className="form-control md:w-full ">
                    <label className="label">
                      <span
                        className={`after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium ${changesThemeTextColor()}`}
                      >
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className=" w-full md:px-3 md:py-2 border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-900 "
                    />
                  </div>
                </div>
                <div className="md:flex gap-8">
                  <div className="form-control md:w-full">
                    <label>
                      <span
                        className={`after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium -ml-40 md:-ml-20 lg:-ml-36 pb-2 ${changesThemeTextColor()}`}
                      >
                        CV/Resume
                      </span>
                      <Controller
                        name="resume"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="file"
                            hidden
                            required
                            {...field}
                            accept=".jpg, .jpeg, .png, .pdf" // Specify allowed file types
                          />
                        )}
                      />
                      <div className=" w-full flex justify-center items-center gap-2 py-2  border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-800 ">
                        <BsArrowBarUp className="text-black " />{" "}
                        <span> Attach CV/Resume</span>
                      </div>
                    </label>
                  </div>
                  <span
                    className={`md:hidden text-sm font-normal -mt-4 ${changesThemeTextColor()}`}
                  >
                    <span className="font-semibold">Tip:</span> Allowed file
                    types; pdf, doc, docx, rtf, jpg, jpeg. No larger than 10mb.
                  </span>
                  <div className="form-control md:w-full md:-mt-3">
                    <label className="label">
                      <span
                        className={`mt-2 md:mt-0 after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium ${changesThemeTextColor()}`}
                      >
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="number"
                      {...register("contactNo", { required: true })}
                      className=" w-full md:px-3 md:py-2 -mt-[2px] border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-900 "
                    />
                  </div>
                </div>

                <span className="hidden md:block text-sm font-normal text-slate-400 -mt-4 -ml-2 md:-ml-4 lg:-ml-10 mb-2">
                  <span className="font-semibold">Tip:</span> Allowed file
                  types; pdf, doc, docx, rtf, jpg, jpeg. No larger than 10mb.
                </span>

                <div className="form-control">
                  <label className="label">
                    <span
                      className={`after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium ${changesThemeTextColor()}`}
                    >
                      {" "}
                      Head Line{" "}
                    </span>
                  </label>
                  <textarea
                    {...register("headline", { required: true })}
                    className="textarea textarea-bordered h-4 input  w-full px-3 py-2 border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-900"
                  ></textarea>
                  <span
                    className={`text-sm -ml-2 md:-ml-4 lg:-ml-10 lg:mb-2 ${changesThemeTextColor()}`}
                  >
                    <span className="font-semibold">Tip:</span> Short
                    description that describes what you do, e.g. Graphic
                    Designer.
                  </span>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium ${changesThemeTextColor()}`}
                    >
                      {" "}
                      Cover Letter{" "}
                    </span>
                  </label>
                  <textarea
                    {...register("cover-letter", { required: true })}
                    className="textarea textarea-bordered h-24 input  w-full px-3 py-2 border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-900"
                  ></textarea>
                </div>

                <input
                  className=" btn-sm mt-4 btn rounded-md text-white bg-[#F63E7B] hover:text-rose-500  hover:bg-rose-300 font-semibold px-4"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Application;
