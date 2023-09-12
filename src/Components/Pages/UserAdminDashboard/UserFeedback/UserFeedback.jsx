import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const UserFeedback = () => {

    const {user} = useContext(AuthContext);

    // feedback validation
    const isFeedbackValid = (feedback) => {
        const words = feedback.split(' ').filter(word => word.trim() !== '');
        return words.length >= 10;
      }

    const handleSubmitFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user.email; 
        const photoPath = form.photo.value;
        const designation = form.designation.value;
        const ratings = parseInt(form.ratings.value);
        const message = form.message.value;
        const photoFileName = photoPath.split('\\').pop();

        if (!isFeedbackValid(message)) {
            Swal.fire({
              icon: 'error',
              title: 'Feedback is too short',
              text: 'Please provide more than 10 words of feedback.',
            });
            return;
          }



        const feedback = {name, email, message, designation, ratings, photo: photoFileName}
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
        <div className="w-full md:w-1/2 h-full">
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
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Photo</span>
                        </label>
                        <input type="file" name="photo" placeholder="Your Photo" className="input input-bordered w-full" />
                    </div>
                    {/* ratings and designationa start */}
                    <div className="flex py-6">
                    <div className="dropdown dropdown-hover flex-1 ">
                    <label for="designation" className="p-3">Designation</label>
                        <select name="designation" id="designation">
                            <option value="Web Developer">Web Developer</option>
                            <option value="Web Designer">Web Designer</option>
                            <option value="Web Instructor">Web Instructor</option>
                            <option value="Software Engneer">Software Engneer</option>
                            <option value="Software Developer">Software Developer</option> 
                        </select>
                    </div>
                    <div className="dropdown dropdown-hover ">
                    <label for="ratings" className="p-3">Ratings</label> 
                        <select name="ratings" id="colors">
                            <option value="1">1 star</option>
                            <option value="2">2 star</option>
                            <option value="3">3 star</option>
                            <option value="4">4 star</option>
                            <option value="5">5 star</option>
                        </select>
                    </div>

                    </div>
                     {/* ratings and designationa end */}
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