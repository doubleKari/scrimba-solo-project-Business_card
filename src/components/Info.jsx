import profile from "../assets/images/profile-photo.jpg";

const Info = ({ children }) => {
  return (
    <div className="md:rounded-t-xl">
      <div className=" md:rounded-t-xl  h-[317px]">
        <img
          src={profile}
          alt="profile"
          className=" md:rounded-t-lg w-full h-full object-cover object-center "
        />
      </div>
      <div className="text-center space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-white mt-4">
          Wiafe Karikari
        </h1>
        <h4 className="text-sm text-[#F3BF99]">Frontend Developer</h4>
        <h5 className="text-[10.24px] py-1 text-[#F5F5F5]">
          doublekari.website
        </h5>
      </div>
      <div className="flex px-8 gap-6 py-4 justify-center items-center ">
        {children}
      </div>
    </div>
  );
};

export default Info;
