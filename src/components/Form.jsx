const Form = () => {
  return (
    <div className="flex flex-col  sm:flex-row items-start justify-between p-11 px-2 sm:px-6 md:px-16 lg:px-20">
      <div data-aos="zoom-in" className="space-y-6 text-start">
        {/* form intro texts */}
        <div className="space-y-4 text-start sm:w-[300px] md:w-[500px]">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#042352]">
            Send Us Message
          </h1>
          <p className="text-sm sm:text-base font-normal text-[#5c667b]">
            If you won't to send something, of course send a message here and
            fill it completely
          </p>
        </div>

        {/* image */}
        <div>
          <img
            src="/img/m.svg"
            alt=""
            className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px]"
          />
        </div>
      </div>

      {/* form */}
      <form
        data-aos="zoom-in"
        action=""
        method="post"
        className="md:w-[600px] block space-y-4 text-start p-6 px-10 rounded-md"
      >
        <div>
          <label
            htmlFor="name"
            className="text-lg font-semibold text-[#042352]"
          >
            Full name
          </label>
          <input
            type="text"
            name="text"
            placeholder="Enter your full name..."
            id="name"
            className="outline-none rounded-md w-full h-11  bg-[#f8fafb] text-base p-2 text-gray-600"
          />
        </div>

        <div>
          <label
            htmlFor="emai"
            className="text-lg font-semibold text-[#042352]"
          >
            Emai
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            id="emai"
            className="outline-none rounded-md w-full h-11  bg-[#f8fafb] text-base p-2 text-gray-600"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-lg font-semibold text-[#042352]"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message..."
            className="outline-none rounded-md w-full h-[140px]  bg-[#f8fafb] text-base p-2 text-gray-600"
          ></textarea>
        </div>
        <div>
          <input
            type="button"
            value="Send Message"
            className="outline-none flex items-center justify-center rounded-md w-full h-11  bg-[#009366] text-white text-base p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
