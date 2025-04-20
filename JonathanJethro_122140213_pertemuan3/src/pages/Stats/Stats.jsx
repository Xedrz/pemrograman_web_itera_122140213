import { useState } from 'react'
import { useBookStats } from '../../context/BookContext'
import { BookFilter } from '../../Components/BookFilter/BookFilter'
import './Stats.css'

export function Stats() {
  const stats = useBookStats()
  const [filter, setFilter] = useState('all')

  const getFilteredCount = () => {
    switch (filter) {
      case 'owned': return stats.owned
      case 'reading': return stats.reading
      case 'wishlist': return stats.wishlist
      default: return stats.total
    }
  }

  const getFilterLabel = () => {
    switch (filter) {
      case 'owned': return 'Buku yang Dimiliki'
      case 'reading': return 'Sedang Dibaca'
      case 'wishlist': return 'Daftar Keinginan'
      default: return 'Semua Buku'
    }
  }

  return (
    <div className="stats-page">
      <div className="stats-header">
        <h1>Statistik Buku</h1>
        <p>Lacak progres membaca kamu</p>
      </div>

      <div className="filter-section">
        <BookFilter onFilterChange={setFilter} />
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <h3>Total Buku</h3>
          <p>{stats.total}</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✔️</div>
          <h3>Dimiliki</h3>
          <p>{stats.owned}</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👓</div>
          <h3>Sedang Dibaca</h3>
          <p>{stats.reading}</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <h3>Daftar Keinginan</h3>
          <p>{stats.wishlist}</p>
        </div>

        <div className="stat-card highlight">
          <div className="stat-icon">🎯</div>
          <h3>{getFilterLabel()}</h3>
          <p>{getFilteredCount()}</p>
        </div>
      </div>
    </div>
  )
}
