'use client'
import { useState, useEffect } from 'react'

export default function PropertyFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    city: '',
    type: '',
    contry: '',
    country: '',
    textData: ''
  })

  useEffect(() => {
    onFilter(filters) // call parent's filter function
  }, [filters])

  return (
    <div className="grid grid-cols-5 gap-3 mb-4">
      <select onChange={e => setFilters({ ...filters, city: e.target.value })}>
        <option value="">All Cities</option>
        <option value="carbon City">Carbon City</option>
      </select>
      <select onChange={e => setFilters({ ...filters, type: e.target.value })}>
        <option value="">All Types</option>
        <option value="apartement">Apartment</option>
        <option value="house">House</option>
      </select>
      <select onChange={e => setFilters({ ...filters, contry: e.target.value })}>
        <option value="">All Contries</option>
        <option value="Gungahlin">Gungahlin</option>
      </select>
      <select onChange={e => setFilters({ ...filters, country: e.target.value })}>
        <option value="">All Countries</option>
        <option value="Kingston">Kingston</option>
      </select>
      <select onChange={e => setFilters({ ...filters, textData: e.target.value })}>
        <option value="">All Regions</option>
        <option value="Tuggeranong">Tuggeranong</option>
        <option value="Belconnen">Belconnen</option>
      </select>
    </div>
  )
}
