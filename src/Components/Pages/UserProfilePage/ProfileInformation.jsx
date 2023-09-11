import { useForm } from "react-hook-form";
import "./UserProfilePage.css";
import Img from "../../../assets/profile-page/profile-page-img.svg";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SocialProfiles from "./SocialProfiles";

const ProfileInformation = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h4 className="text-lg sm:text-xl mt-8 md:mt-0  font-semibold">Personal Information</h4>
      <hr className="my-2 sm:my-4" />
      <div className="md:flex justify-between gap-6 w-full">
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="block md:flex gap-8">
              <div className="w-full">
                <label className="text-[13px] font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  {...register("name", { required: true })}
                  required
                />
                {/* {errors.name && (
                  <p className="text-red-500 -mt-5">
                    <small>Full Name field is required</small>
                  </p>
                )} */}
                <label className="text-[13px] font-medium">Email Id</label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  {...register("email", { required: true })}
                  required
                />
                {/* {errors.email && (
                  <p className="text-red-500 -mt-5">
                    <small>Email Id field is required</small>
                  </p>
                )} */}
                <label className="text-[13px] font-medium">Profession</label>
                <input
                  type="text"
                  name="profession"
                  {...register("profession", { required: true })}
                  required
                />
                {errors.profession && (
                  <p className="text-red-500 -mt-5">
                    <small>Profession field is required</small>
                  </p>
                )}
              </div>
              <div className="w-full">
                <label className="text-[13px] font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Your country"
                  {...register("location", { required: true })}
                  required
                />
                {errors.location && (
                  <p className="text-red-500 -mt-5">
                    <small>Location field is required</small>
                  </p>
                )}
                <label className="text-[13px] font-medium">Current Plan</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="plan"
                    value={"Free Plan"}
                    {...register("plan", { required: true })}
                    required
                  />
                  <Link to="/pricing">
                    <button className="bg-sky-600 h-10 px-2 py-1 text-white rounded-md -mt-3 text-sm">
                      Upgrade
                    </button>
                  </Link>
                </div>
                {errors.plan && (
                  <p className="text-red-500 -mt-5">
                    <small>Current plan field is required</small>
                  </p>
                )}
                <label className="text-[13px] font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone number"
                  {...register("phone", { required: true })}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 -mt-5">
                    <small>Phone field is required</small>
                  </p>
                )}
              </div>
            </div>
            <input
              type="submit"
              value="Save Changes"
              className="btn btn-sm sm:btn-md bg-sky-500 hover:bg-sky-600 border-none w-32 rounded-3xl"
            />
          </form>
        </div>
        <div>
          <img className="w-[520px]" src={Img} alt="" />
        </div>
      </div>
      {/* Social Profiles */}
      <SocialProfiles/>
    </>
  );
};

export default ProfileInformation;
