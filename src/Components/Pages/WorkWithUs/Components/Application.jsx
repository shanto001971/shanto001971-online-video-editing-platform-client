import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BsArrowBarUp } from "react-icons/bs";
const Application = () => {
  const { register, control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[307px]md:max-w-[500px] text-center mx-3 md:mx-9 my-8 md:my-14 ">
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
          <ul className="menu  px-4 w-4/5 md:w-1/2  min-h-full absolute z-10 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <p className="font-normal mt-2 text-lg">General Application</p>
            <div className="divider "></div>

            <div className="w-full  flex flex-col justify-center items-center text-gray-800 rounded-xl ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-4 lg:gap-8">
                  <div className="form-control  md:w-full ">
                    <label className="label">
                      <span class="after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium text-slate-700 ">
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
                      <span class="after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium text-slate-700 ">
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
                    <span class="after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium text-slate-700 -ml-48 md:-ml-20  pb-2">
                      CV/Resume
                    </span>
                    <Controller
                      name="fileInput"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="file"
                          hidden
                          {...field}
                          accept=".jpg, .jpeg, .png, .pdf" // Specify allowed file types
                        />
                      )}
                    />
                    <div className=" w-full flex justify-center items-center gap-2 py-2  border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-900 ">
                      <BsArrowBarUp className="text-black " />{" "}
                      <span> Attach CV/Resume</span>
                    </div>
                  </label>
                </div>

                <div className="form-control md:w-full md:-mt-3">
                    <label className="label">
                      <span class="after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium text-slate-700 ">
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="number"
                      {...register("contactNo", { required: true })}
                      className=" w-full md:px-3 md:py-2 border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-900 "
                    />
                  </div>
                </div>
                

                <div className="form-control">
                  <label className="label">
                    <span class="after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium text-slate-700 ">
                      {" "}
                     Head Line{" "}
                    </span>
                  </label>
                  <textarea
                    {...register("headline", { required: true })}
                    className="textarea textarea-bordered h-4 input  w-full px-3 py-2 border rounded-md focus:outline-none border-indigo-300 focus:border-indigo-500 bg-gray-100 text-gray-900"
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span class="after:content-['*'] after:ml-0.5 after:text-indigo-500 block text-sm font-medium text-slate-700 ">
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
