import SwimmingPic from "../assets/swimming.png"
import ClassPic from "../assets/class.png"
import PlaygroundPic from "../assets/playground.png"
import BgPic from "../assets/bg.png"

const QZone = () => {
    return (
        <div className="*:w-full space-y-2">
            <div className="flex flex-col justify-center items-center gap-2">
            <div className="bg-base-200 p-5 space-y-2">
            <h2 className='font-semibold'>Q-Zone</h2>
                <img src={SwimmingPic} alt="Swimming picture coming soon!" />
                <img src={ClassPic} alt="Class picture coming soon!" />
                <img src={PlaygroundPic} alt="Playground picture coming soon!" />
            </div>
            <div className="w-full">
                <img className="w-full h-full object-cover" src={BgPic} alt="Bg picture coming soon!" />
            </div>
            </div>
        </div>
    );
};

export default QZone;