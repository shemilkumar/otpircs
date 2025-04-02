
const RegularCard = (props: { icon: React.ElementType, title: string, description: string }) => {
    const { icon: Icon, title, description } = props;

    return <>
        <div className="flex flex-col gap-4 w-96 p-8 bg-white shadow-lg rounded-xl ml-4 z-20">
            <div className="flex items-center gap-4">
                <span >
                    <Icon className="h-16 w-16 rounded-full text-white bg-pink-500 p-4" />
                </span>
                <p className="text-xl font-medium">
                    {title}
                </p>
            </div>
            <div>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    </>
}

export default RegularCard;