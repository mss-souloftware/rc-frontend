import SidebarFilters from '@/components/Global/FilterSidebar'
import PropertyGrid from '@/components/Global/PropertyGrid'
import FilterCountBar from '@/components/RentalListing/FilterCountBar'
import ForRentHero from '@/components/RentalListing/ForRentHero'
import NavTabs from '@/components/RentalListing/NavTabs'
import React from 'react'

export default function GridView() {
  return (
    <div className="container mx-auto pb-5 px-5">
      <NavTabs />
      <div className='border-t-2 border-[#E1E9F0] mb-5'></div>
      <ForRentHero title="For Rent" bgPath="/images/home-hero.png" />
      <FilterCountBar />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-[20%] bg-white p-4 shadow rounded">
          <SidebarFilters />
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-[80%] p-4">
          <PropertyGrid
            gridSet={[2, 2, 2, 1]}
            limit={2}
          />
          <div className="my-5"></div>
          <PropertyGrid
            gridSet={[3, 3, 2, 1]}
            limit={9}
            showPagination={true}
          />
        </main>
      </div>

    </div>
  )
}
