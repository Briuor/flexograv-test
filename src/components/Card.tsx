export interface CardProps {
    title: string;
    description: React.ReactNode;
    backgroundImage: string;
}

export function Card({ title, description, backgroundImage }: CardProps) {
    return (
        <div className="w-full bg-no-repeat text-white text-center  shadow-[6px_6px_6px_0px_rgb(0,0,0,0.5)] bg-cover bg-center rounded-lg  bg-black bg-opacity-50" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-[gray] flex flex-col justify-center bg-opacity-80 p-5 rounded-lg h-full">
                <h2 className="text-lg font-bold">{title}</h2>
                <hr className="my-2" />
                {description}
            </div>
        </div>
    )
}

