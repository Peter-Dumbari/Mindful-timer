import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/timer");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <div className="header absolute top-5 left-10">
        <h1 className="font-bold text-2xl">Mindful Timer</h1>
      </div>
      <div className="flex">
        <div className="h-[100%]">
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80"
            alt="A person meditating"
            className="object-cover h-[100vh] w-[100%]"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-[60%]">
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-5xl font-bold text-yellow-600">
              Welcome to the Mindful Timer
            </h1>
            <p className="text-2xl">A simple timer to help you log your mood</p>

            <button
              onClick={() => {
                handleNavigate();
              }}
              className="mt-3 bg-yellow-600 text-white p-3 hover:bg-black transition duration-500 ease-in-out">
              Let's Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-full  p-40 bg-yellow-500 fixed bottom-[-100px] right-[-100px]"></div>
    </div>
  );
};

export default Home;
