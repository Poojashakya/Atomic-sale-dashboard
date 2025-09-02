import React from 'react'
import Card from '../../components/ui/Card'
import dynamic from 'next/dynamic'


// SalesChart is client component, import dynamically to avoid SSR errors
const SalesChart = dynamic(() => import('../../components/chart/SalesChart'), { ssr: false })


export default function DashboardPage() {
return (
<div>
<h1 className="text-3xl font-semibold mb-6">Dashboard (Empty shell + Sales chart)</h1>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Card>
<h2 className="text-lg font-medium mb-2">Sales Overview</h2>
<SalesChart />
</Card>


<Card>
<h2 className="text-lg font-medium mb-2">Notes</h2>
<p className="text-sm text-slate-600">This card is placeholder for future KPIs (total revenue, growth, top products, etc.)</p>
</Card>
</div>
</div>
)
}