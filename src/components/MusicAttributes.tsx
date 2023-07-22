interface MusicAttributeItemProps {
    title: string;
    color: string;
    description: string;
    number?: number;
}

const MusicAttributeItem: React.FC<MusicAttributeItemProps> = ({
    title,
    color,
    description,
    number,
}) => {
    let percent = number ? number * 100 : 0;
    // console.log(title, percent)
    return (
        <div className=" p-6 ">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <div className={`h-2 rounded-full overflow-hidden`}>
                <div className="bg-zinc-900 h-full rounded-full">
                    <div
                        className={`h-full bg-${color}-500  `}
                        style={{ width: `${percent}%` }}
                    ></div>
                </div>
            </div>
            <div className="my-4 text-gray-700">{description}</div>
        </div>
    );
};

export default MusicAttributeItem;
