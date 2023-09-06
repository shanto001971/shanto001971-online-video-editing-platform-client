import './email.css'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const HelpEmail = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Email sent successfully",
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
   
    <div className="container-1  w-full px-3 h-screen flex flex-col justify-center items-center text-gray-800 rounded-xl " >
        <form ref={form} onSubmit={sendEmail}>
        <h2 className='text-3xl font-semibold text-white'>Contact With Us</h2>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-indigo-800 focus:outline-indigo-500 rounded-md "
                type="text"
                name="user_name" 
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="Email" className="block text-white">
                Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-indigo-800 focus:outline-indigo-500 rounded-md "
                type="email"
                name="user_email"
                required
              />
            </div>

            
          </div>
          <div className="space-y-1 text-sm mt-2">
              <label htmlFor="Message" className="block text-white">
                Message
              </label>

              <textarea
                className="block rounded-md focus:indigo-300 w-full h-32 px-4 py-3 text-gray-800  border border-indigo-800 focus:outline-indigo-500 "
                name="message"
              ></textarea>
            </div>
          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-indigo-800"
          >
            {" "}
            Send
          </button>{" "}
        </form>
      </div>
   
  );
};

export default HelpEmail;