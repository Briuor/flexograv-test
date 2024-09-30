export interface RowData {
    os: number;
    delivery: string; // Date in the format "xx/xx/xxxx"
    customer: string;
    title: {
        image: string; // URL for the image
        name: string;
        message?: {
            priotity: 'high' | 'low';
        }
    };
    flow: 'attach' | 'cloud' | ''; // true if has fluxo, false otherwise
    transport: string;
    status: 'conferencia' | 'aguarda' | 'gravação' | 'financeiro' | 'status1' | 'status2';
}

export const dummyData: RowData[] = [
    {
        os: 1,
        delivery: '01/10/2024',
        customer: 'Flexcor',
        title: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s', // Placeholder image
            name: 'Flexograv - Texto Sistema',
            message: {
                priotity: 'low'
            }
        },
        flow: 'attach',
        transport: 'Motoboy',
        status: 'conferencia',
    },
    {
        os: 2,
        delivery: '02/10/2024',
        customer: 'Flexcor',
        title: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s',
            name: 'Flexograv - Texto Sistema',
            message: {
                priotity: 'high'
            }
        },
        flow: 'attach',
        transport: 'Motoboy',
        status: 'aguarda',
    },
    {
        os: 3,
        delivery: '03/10/2024',
        customer: 'Flexcor',
        title: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s',
            name: 'Flexograv - Texto Sistema',
        },
        flow: 'cloud',
        transport: 'Motoboy',
        status: 'gravação',
    },
    {
        os: 3,
        delivery: '03/10/2024',
        customer: 'Flexcor',
        title: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s',
            name: 'Flexograv - Texto Sistema',
        },
        flow: '',
        transport: 'Motoboy',
        status: 'gravação',
    },
    {
        os: 3,
        delivery: '03/10/2024',
        customer: 'Flexcor',
        title: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s',
            name: 'Flexograv - Texto Sistema',
        },
        flow: '',
        transport: 'Motoboy',
        status: 'gravação',
    },
    {
        os: 3,
        delivery: '03/10/2024',
        customer: 'Flexcor',
        title: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s',
            name: 'Flexograv - Texto Sistema',
        },
        flow: '',
        transport: 'Motoboy',
        status: 'status1',
    },
    {
        os: 3,
        delivery: '03/10/2024',
        customer: 'Flexcor',
        title: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s',
            name: 'Flexograv - Texto Sistema',
        },
        flow: '',
        transport: 'Motoboy',
        status: 'status2',
    },
    {
        os: 4,
        delivery: '04/10/2024',
        customer: 'Flexcor',
        title: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s',
            name: 'Flexograv - Texto Sistema',
        },
        flow: '',
        transport: 'Motoboy',
        status: 'financeiro',
    },
];