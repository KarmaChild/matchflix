'use client'

const LoadingTile = () => {
    return (
        <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] bg-white rounded loading-animation"/>
    )
}

const Loading = () => {
    const loadingTiles = Array.from({ length: 16 }, (_, index) => <LoadingTile key={index} />)
    return (
        <div className="absolute top-[100px] w-[360px] sm:w-[390px] h-[400px]">
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {loadingTiles}
            </div>
        </div>
    )
}

export default Loading
