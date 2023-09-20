import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import img from "../../../../src/assets/images/downloa.png";
import img1 from "../../../../src/assets/images/download.png";
import img2 from "../../../../src/assets/images/download1.png";
import img3 from "../../../../src/assets/images/download2.png";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const Donate = () => {
  const { user } = useContext(AuthContext);
  const { theme, changesThemeTextColor } = useTheme();

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const Amount = form.DAmount.value;
    const email = form.email.value;
    const FirstName = form.FirstName.value;
    const LastName = form.LastName.value;
    const address = form.address.value;
    const message = form.message.value;
    const Cname = form.Cname.value;
    const CNumber = form.CNumber.value;
    const cvv = form.cvv.value;
    const expire = form.expire.value;

    form.reset();

    const addToy = {
      Amount,
      email,
      FirstName,
      LastName,
      address,
      message,
      Cname,
      CNumber,
      cvv,
      expire,
    };
    console.log(addToy);

    fetch("https://doll-house-server-smoky.vercel.app/addedToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Thanks!", "Greate! Thanks For Donate .", "success");
        }
      });
  };

  const [selected, setSelected] = useState(null);

  const handleImageClick = (index) => {
    setSelected(index);
  };

  const images = [img, img1, img2, img3]; // Replace with your image URLs

  return (
    <>
      <Helmet>
        <title>MingleMotion Express | Donate</title>
      </Helmet>
      <div
        className={`${changesThemeTextColor()}`}
        style={{ width: "700px", margin: "auto" }}
      >
        <h3 className="text-center font-bold text-3xl mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Make a Donation
        </h3>
        <form onSubmit={handleAddToy}>
          <div>
            <div className="form-control border border-blue-400 p-4 mb-7 ">
              <label className="label">
                <span
                  className={`label-text ${
                    theme.mode === "dark" ? "text-gray-100" : "text-black"
                  }`}
                >
                  Your Donation
                </span>
              </label>
              <input
                type="number"
                name="DAmount"
                placeholder="Enter Donation Amount"
                className="input input-bordered"
              />
            </div>
            <div className="border border-blue-400 p-4 mb-7">
              <h3 className="font-bold">Details</h3>
              <div className=" grid grid-cols-2 gap-4">
                <div className="form-control">
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="First Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="LastName"
                    placeholder="Last Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control col-span-2">
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    className="input textarea textarea-primary"
                  />
                </div>
              </div>
            </div>

            <div className="border border-blue-400 p-4">
              <h3 className="font-bold">Choose Your Payment Method</h3>
              <div className="flex gap-4 mt-7">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    style={{
                      width: "60px",
                      height: "40px",
                      border: `1px solid ${
                        selected === index ? "blue" : "transparent"
                      }`,
                      padding: "5px",
                      cursor: "pointer",
                    }}
                    alt=""
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control  ">
                  <label className="label">
                    <span
                      className={`label-text ${
                        theme.mode === "dark" ? "text-gray-100" : "text-black"
                      }`}
                    >
                      Card holder Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="Cname"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control  ">
                  <label className="label">
                    <span
                      className={`label-text ${
                        theme.mode === "dark" ? "text-gray-100" : "text-black"
                      }`}
                    >
                      Card Number
                    </span>
                  </label>
                  <input
                    type="number"
                    name="CNumber"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control  ">
                  <label className="label">
                    <span
                      className={`label-text ${
                        theme.mode === "dark" ? "text-gray-100" : "text-black"
                      }`}
                    >
                      CVV
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cvv"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control  ">
                  <label className="label">
                    <span
                      className={`label-text ${
                        theme.mode === "dark" ? "text-gray-100" : "text-black"
                      }`}
                    >
                      Expire Date
                    </span>
                  </label>
                  <input
                    type="date"
                    name="expire"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-secondary w-60 mx-auto mb-10"
              type="submit"
              value="Donate"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Donate;
