import React, { useState } from 'react';
import { ChevronDownIcon, MessageCircleIcon, PaperclipIcon, UploadCloudIcon } from 'lucide-react'; // Make sure to install Heroicons
import { RowData } from '../utils/data';


export function Datatable({ data }: { data: RowData[] }) {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        const newSelectedRows = new Set<number>();
        if (checked) {
            data.forEach(row => newSelectedRows.add(row.os));
        }
        setSelectedRows(newSelectedRows);
    };

    const handleRowSelect = (os: number) => {
        const newSelectedRows = new Set(selectedRows);
        if (newSelectedRows.has(os)) {
            newSelectedRows.delete(os);
        } else {
            newSelectedRows.add(os);
        }
        setSelectedRows(newSelectedRows);
    };


    const getMessagePriorityColor = (status: string) => {
        switch (status) {
            case 'high':
                return 'text-[#fc8b87] ';
            case 'low':
                return 'text-[#00bd97] ';
            default:
                return '';
        }
    };
    const getRowColor = (status: string) => {
        switch (status) {
            case 'conferencia':
                return 'bg-yellow text-gray-3';
            case 'aguarda':
                return 'bg-green text-white';
            case 'gravação':
                return 'bg-red text-white';
            case 'financeiro':
                return 'bg-blue text-white';
            case 'status1':
                return 'bg-gray-0 text-white';
            case 'status2':
                return 'bg-black text-white';
            default:
                return '';
        }
    };


    const fluxIcon = (flux: 'attach' | 'cloud' | '') => {
        if (flux === 'attach')
            return <span className='flex justify-center'><PaperclipIcon className="text-gray-1" /></span>
        if (flux === 'cloud')
            return <span className='flex justify-center'><UploadCloudIcon className="text-gray-1" /></span>

        return null
    }

    return (
        <div>
            <table className="min-w-full border-separate border-spacing-y-3 max-h-20">
                <thead className='text-white'>
                    <tr className="text-center">
                        <th className="relative font-normal">
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                            />
                        </th>
                        <th className="relative font-normal text-left">OS
                            <div className="absolute top-1 right-1 h-4 w-px bg-gray-2" />
                        </th>
                        <th className="relative font-normal text-left">Entrega
                            <div className="absolute top-1 right-1 h-4 w-px bg-gray-2" />
                        </th>
                        <th className="relative font-normal text-left">Cliente
                            <div className="absolute top-1 right-1 h-4 w-px bg-gray-2" />
                        </th>
                        <th className="relative font-normal text-left">Título
                            <div className="absolute top-1 right-1 h-4 w-px bg-gray-2" />
                        </th>
                        <th className="relative font-normal">Fluxo
                            <div className="absolute top-1 right-1 h-4 w-px bg-gray-2" />
                        </th>
                        <th className="relative font-normal">
                            Transporte <ChevronDownIcon className="inline w-4 h-4" />
                            <div className="absolute top-1 right-1 h-4 w-px bg-gray-2" />
                        </th>
                        <th className="relative font-normal">
                            Status <ChevronDownIcon className="inline w-4 h-4" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr
                            key={row.os}
                            className={`${getRowColor(row.status)} text-center`}
                        >
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.has(row.os)}
                                    onChange={() => handleRowSelect(row.os)}
                                />
                            </td>
                            <td className='text-left'>{row.os}</td>
                            <td className='text-left'>{row.delivery}</td>
                            <td className='text-left'>{row.customer}</td>
                            <td className="text-left p-2 flex items-center justify-between">
                                <div className='flex items-center'>
                                    <img
                                        src={row.title.image}
                                        alt={row.title.name}
                                        className="rounded-full w-8 h-8 mr-2"
                                    />
                                    <span>{row.title.name}</span>
                                </div>
                                {row.title.message ? <MessageCircleIcon className={`${getMessagePriorityColor(row.title.message.priotity)}}`} /> : null}
                            </td>
                            <td>
                                {fluxIcon(row.flow)}
                            </td>
                            <td>{row.transport}</td>
                            <td>{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
