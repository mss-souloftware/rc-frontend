'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import MapView from '@/components/views/RentalListing/MapView';
import ListView from '@/components/views/RentalListing/ListView';
import GridView from '@/components/views/RentalListing/GridView';

function RentalListingContent() {
    const searchParams = useSearchParams();
    const view = searchParams.get('view') || 'map';

    switch (view) {
        case 'map':
            return <MapView />;
        case 'grid':
            return <GridView />;
        default:
            return <ListView />;
    }
}

export default function RentalListing() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RentalListingContent />
        </Suspense>
    );
}
