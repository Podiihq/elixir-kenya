export const Footer = () => {
  return (
    <div className="">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-center gap-4 lg:justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500 text-center lg:text-left">
            © Elixir Kenya 2023 Inc. All rights reserved.
          </p>
          <div className="flex justify-center lg:justify-normal items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://www.youtube.com/@elixirkenya"
              className="text-gray-300 hover:text-gray-500"
            >
              <i className="fa fa-youtube text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/ElixirKenya"
              className="text-gray-300 hover:text-gray-500"
            >
              <i className="fa fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://t.me/elixirkenya"
              className="text-gray-300 hover:text-gray-500"
            >
              <i className="fa fa-telegram text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/showcase/elixirkenya/"
              className="text-gray-300 hover:text-gray-500"
            >
              <i className="fa fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
