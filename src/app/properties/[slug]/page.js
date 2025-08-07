import fs from 'fs';
import path from 'path';
import PropertyShare from '@/components/PropertySingle/PropertyShare';
import PropertyContent from '@/components/PropertySingle/PropertyContent';

export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'properties.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const properties = JSON.parse(jsonData);

    return properties.map((property) => ({
        slug: property.slug,
    }));
}

export default function PropertyPage({ params }) {
    const filePath = path.join(process.cwd(), 'src', 'data', 'properties.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const properties = JSON.parse(jsonData);

    const property = properties.find((p) => p.slug === params.slug);

    if (!property) {
        return <div className="p-10 text-red-500">Property not found.</div>;
    }

    return (
        <div className="container mx-auto pb-5">
            <PropertyShare />
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4 lg:w-[60%] bg-white py-5">
                    <PropertyContent data={property} />
                </div>

                <div className="w-full md:w-3/4 lg:w-[40%] p-4">

                </div>
            </div>
        </div>
    );
}
