
interface LegendProps {
    label: string;
    colors: string[]; // Array of colors to display
}

export function Legend({ label, colors }: LegendProps) {
    return (
        <div className="flex justify-end items-center mt-auto">
            <span className="text-sm text-white pr-2">{label}</span>
            {colors.map((color, index) => (
                <div key={index} className="w-5 h-3" style={{ backgroundColor: color }}></div>
            ))}
        </div>
    );
};
