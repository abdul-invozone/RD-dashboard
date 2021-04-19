import {
  userThumbnail,
  userIco,
  editIco,
  logoutIco,
} from "./Icons";

const Profile = () => {
  return (
    <div className="flex-shrink-0 flex py-9 px-6 border-b border-gray-700">
      <div href="#" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <a href="#">
            <img
              className="inline-block h-24 w-24 rounded-full"
              src={userThumbnail}
              alt
            />
          </a>
          <div className="ml-5">
            <a href="#" className="block text-md font-medium text-white mb-1">
              Jenna Gorham
            </a>
            <button className="mr-4">
              <img className="inline-block" src={userIco} alt="icon" />
            </button>
            <button className="mr-4">
              <img className="inline-block" src={editIco} alt="icon" />
            </button>
            <button className="mr-4">
              <img className="inline-block" src={logoutIco} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
