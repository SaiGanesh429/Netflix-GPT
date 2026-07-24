
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="flex flex-col pt-[18%] w-[43%] pl-8 absolute top-0">
            <div className="text-3xl font-bold text-white">{title}</div>
            <div className="text-[13px] py-2 text-white" >{overview}</div>
            <div className="w-60 flex justify-around text-center pt-4">
                <button className="text-black border border-white bg-white cursor-pointer rounded-lg hover:bg-black/25 hover:text-white p-[2%] w-24"> ▶️ Play</button>
                <button className="text-black border border-white bg-white cursor-pointer rounded-lg hover:bg-black/25 hover:text-white p-[2%] w-24">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;