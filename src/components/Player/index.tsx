import Image from "next/image";

import { BeatModel } from "../../models/Beat";

import play from '../../assets/play.png';
import waves from '../../assets/waves.png';

import { PlayTimeHelper } from "../../helpers/PlayTimeHelper";
import { TypeBeatHelper } from "../../helpers/TypeBeatHelper";
import { ClassNameProp } from "../../@types/class-name";

interface PlayerProps extends ClassNameProp {
    beat: BeatModel;
}

const Player = ({ beat, className="" }: PlayerProps) => {

    const playTimeHelper = new PlayTimeHelper(beat.time);
    const beatTimeString = playTimeHelper.getTimeString();

    const typeBeat = TypeBeatHelper.getTypeById(beat.type);

    return (
        <div onClick={() => {}} className={`
            ${className}
            p-4 bg-white text-purple-800 rounded-lg flex items-center shadow-white
            hover:scale-[102%] hover:cursor-pointer transition-all duration-300
        `}>
            <div className="mr-4">
                <Image alt="Play button" src={play} />
            </div>

            <div>
                <h5>{beat.name}</h5>
                
                <div className="flex items-center text-xs font-light">
                    <p>{beat.createdAt}</p>

                    <div className="w-1 h-1 rounded-full bg-grey-600 mx-1" />

                    <Image alt="Sound Waves" src={waves} />
                    <p className="ml-1">{beatTimeString}</p>
                </div>

                <div className="w-fit mt-1">
                    <div className="bg-purple-500 px-2 rounded-full">
                        <span className="text-xs text-white">{typeBeat.label}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;