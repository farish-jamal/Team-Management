import LeftNavigation from "@/components/LeftNavigation";

const Home = () => {
  return (
    <div className="flex w-full">
      <div className="w-full md:w-[3%]">
       <LeftNavigation />
      </div>
      <div className="w-full md:w-[15%] bg-green-200 p-4">Column 2 (20%)</div>
      <div className="w-full md:w-[80%] bg-red-200 p-4">Column 3 (70%)</div>
    </div>
  );
};

export default Home;
