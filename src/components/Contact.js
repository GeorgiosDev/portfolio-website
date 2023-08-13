import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvevny");

  if (state.succeeded) {
    return <p className="text-white text-center">Thanks for joining!</p>;
  }

  return (
    <div name="Contact" className="bg-gradient-to-b from-slate-500 to-black w-full h-screen pt-16">
      <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white">
        <div className="border rounded-lg p-4 flex flex-col justify-end">
          <p className="py-6 text-center">Contact Me</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 mx-auto text-center py-8 px-6 md:px-0"
        >
          <div className="hover:scale-105 duration-500 py-2 rounded-lg flex flex-col items-center justify-center">
            <label htmlFor="name">Name</label>
            <input
              placeholder='name'
              id="name"
              type="text"
              name="name"
              className="block w-3/4 mt-1 rounded-md shadow-sm hover:bg-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-center border-none"
              required
              minLength={3}
              maxLength={45}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className=" hover:scale-105 duration-500 py-2 rounded-md flex flex-col items-center justify-center">
            <label htmlFor="email">Email Address</label>
            <input
              placeholder='email'
              id="email"
              type="email"
              name="email"
              className="block w-3/4 mt-1 rounded-md shadow-sm hover:bg-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-center border-none"
              required
              minLength={3}
              maxLength={45}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="hover:scale-105 duration-500 py-2 rounded-md flex flex-col items-center justify-center">
            <label htmlFor="subject">Subject</label>
            <input
              placeholder='Subject'
              id="subject"
              type="text"
              name="subject"
              className="block w-3/4 mt-1 rounded-md shadow-sm hover:bg-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-center border-none"
              required
              minLength={3}
              maxLength={45}
            />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </div>

          <div className="hover:scale-105 duration-500 py-2 rounded-md flex flex-col items-center justify-center">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder='Message'
              id="message"
              name="message"
              className="block w-3/4 mt-1 rounded-md shadow-sm hover:bg-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-center border-none"
              required
              minLength={3}
              maxLength={145}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          
          <button
            type="submit"
            disabled={state.submitting}
            className="w-3/4 mt-4 bg-cyan-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
