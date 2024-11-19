import moment from "moment";
import Logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-4 text-center">
            <div className="logo">
                <img className="w-[300px]" src={Logo} alt="Logo picture coming soon!" />
                <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;