import { Card } from "../components/Card";
import { Datatable } from "../components/Datatable";
import { dummyData } from "../utils/data";
import { CompassIcon, FilePlusIcon, SearchIcon, TruckIcon, UploadIcon } from "lucide-react";
import { Legend } from "../components/Legend";

export function Dashboard() {
    return (
        <main className="flex-grow">
            <div className="flex justify-between gap-5">
                <Card title="Análise de Arquivo" description={<div className="flex justify-center items-center gap-3"><UploadIcon /><span>upload</span></div>} backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7j1tsIhtUwov7rHUw4g5fcJZcBpE6jlNXA&s" />
                <Card title="Código de Barras" description={<div className="flex justify-center items-center gap-3"><UploadIcon /><span>upload</span></div>} backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7j1tsIhtUwov7rHUw4g5fcJZcBpE6jlNXA&s" />
                <Card title="Cálculo de Tinta" description={<div className="flex justify-center items-center gap-3"><UploadIcon /><span>upload</span></div>} backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7j1tsIhtUwov7rHUw4g5fcJZcBpE6jlNXA&s" />
                <Card title="Polímeros" description={<div className="flex justify-center items-center gap-3"><UploadIcon /><span>upload</span></div>} backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7j1tsIhtUwov7rHUw4g5fcJZcBpE6jlNXA&s" />
            </div>
            <div>
                <div className="bg-gray-1 rounded-lg my-10 pb-5">
                    <div className="flex gap-20 p-5 border-b border-gray-2 text-white">
                        <span className="text-lg">Jonathan</span>
                        <div className="flex gap-5">
                            <FilePlusIcon />
                            <CompassIcon />
                            <TruckIcon />
                            <SearchIcon />
                        </div>
                        <hr />
                    </div>
                    <Datatable data={dummyData} />

                </div>
                <Legend
                    label="Legenda"
                    colors={['#f63b30', '#362f2e', '#ffe181', '#00bd97', '#838489', '#fc8b87', '#00a8e7']}
                />
            </div>
        </main>
    )
}