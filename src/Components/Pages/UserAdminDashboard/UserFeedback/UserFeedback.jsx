import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const UserFeedback = () => {

    const {user} = useContext(AuthContext);

    const handleSubmitFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user.email; 
        // const photoPath = form.photo.value;
        const message = form.message.value;
        // const photoFileName = photoPath.split('\\').pop();

        const feedback = {name, email, message}
        console.log(feedback)


        fetch('http://localhost:5000/feedback', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Feedback has been Saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            form.reset();
        })


    }

    return (
        <div className="w-1/2 h-full">
            <div  className="text-3xl py-10 text-center">Dear {user.displayName} <br /> Please Provide Us Feedback </div>
            <div className="">
                <form onSubmit={handleSubmitFeedback} >
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} name="name"  placeholder="Your Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} name="email" placeholder="Your Email" className="input input-bordered w-full" />
                    </div>
                    {/* <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Photo</span>
                        </label>
                        <input type="file" name="photo" placeholder="Your Photo" className="input input-bordered w-full" />
                    </div> */}
                    <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Feedback</span>
                    </label>
                    <textarea  rows="5"  name="message"  className="text-[16px] leading-6 textarea textarea-bordered" placeholder="Please write your feedback"></textarea>
                    </div>
                    {/* submit button */}
                    <div className="pt-10">
                        <input type="submit" value="Submit Feedback" className='btn text-white w-full h-[53px] signin-button bg-black'>
                        
                        </input>    
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserFeedback;