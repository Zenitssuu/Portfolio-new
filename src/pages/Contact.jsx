import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = ({ no }) => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { field, value } = e.target;
    setFormInfo((prev) => {
      prev[name] = value;
      return { ...prev };
    });
  }

  function isValidEmail(email) {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    // console.warn(regex.test(email));
    if (regex.test(email)) return true;
    return false;
  }
  // console.log("errors", errors);
  async function validateForm(formInfo) {
    let err_flag = true;
    setErrors((prev) => {
      const newError = { ...prev };
      if (!!!formInfo.name) {
        newError["name"] = "Please enter your name!";
        err_flag = false;
      } else delete newError.name;

      if (!!!formInfo.email) {
        newError["email"] = "Please enter your email!";
        err_flag = false;
      } else if (!isValidEmail(formInfo.email)) {
        newError["email"] = "Please enter correct email!";
        err_flag = false;
      } else delete newError.email;

      if (!!!formInfo.message) {
        newError["message"] = "Please enter your message!";
        err_flag = false;
      } else delete newError.message;

      return newError;
    });
    return err_flag;
  }

  async function sendMessage(e) {
    e.preventDefault();
    console.log(e.target);
    const isValid = await validateForm(formInfo);
    console.log(isValid, ">>>>>>>>..");
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILSERVICEID,
          import.meta.env.VITE_EMAILTEMPLATEID,
          e.target,
          import.meta.env.VITE_EMAILUSERID
        )
        .then(() => {
          toast.success("Your message is succefully delivered");
        })
        .catch((err) => {
          toast.error("Message not delivered, please retry..");
        });
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact_div">
        <div className="contact_section_heading text-middle">
          <span>0{no}. What's next?</span>
        </div>
        <h2 className="text-middle get_in_touch">Get In Touch</h2>
        <form onSubmit={sendMessage}>
          <div className="send_message_container">
            <input
              name="from_name"
              placeholder="Full Name"
              type="text"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              required
            />
            {errors?.name ? <p className="error_msg">{errors?.name}</p> : ""}

            <input
              name="from_email"
              placeholder="name@example.com"
              type="email"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              required
            />
            {errors?.email ? <p className="error_msg">{errors?.email}</p> : ""}

            <textarea
              name="message"
              placeholder="Your thoughts"
              type="text"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              required
            ></textarea>

            {errors?.message ? (
              <p className="error_msg">{errors?.message}</p>
            ) : (
              ""
            )}
            <button
              type="submit"
              className="submit_contact primary_outline_btn my-4 py-2 px-5"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Contact;
