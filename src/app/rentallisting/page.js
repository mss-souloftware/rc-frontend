'use client';

import { useSearchParams } from 'next/navigation';
import MapView from '@/components/views/RentalListing/MapView';
import ListView from '@/components/views/RentalListing/ListView';
import GridView from '@/components/views/RentalListing/GridView';

export default function RentalListing() {
    const searchParams = useSearchParams();
    const view = searchParams.get('view') || 'map';

    const renderView = () => {
        switch (view) {
            case 'map':
                return <MapView />;
            case 'grid':
                return <GridView />;
            default:
                return <ListView />;
        }
    };

    return <>{renderView()}</>;
}
