'use client'
<label className="text-sm">Chart</label>
<select value={chartType} onChange={(e) => setChartType(e.target.value as any)} className="border rounded px-2 py-1">
<option value="line">Line</option>
<option value="bar">Bar</option>
<option value="pie">Pie</option>
</select>
</div>


<div className="ml-auto flex items-center gap-2">
<input
type="number"
placeholder="Threshold"
value={threshold ?? ''}
onChange={(e) => setThreshold(e.target.value ? Number(e.target.value) : undefined)}
className="border rounded px-2 py-1 w-32"
/>
<button onClick={() => setThreshold(undefined)} className="px-3 py-1 rounded bg-slate-100">Clear</button>
</div>
</div>


<div style={{ width: '100%', height: 360 }}>
<ResponsiveContainer>
{chartType === 'line' && (
<LineChart data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="sales" stroke="#1976d2" strokeWidth={3} />
</LineChart>
)}


{chartType === 'bar' && (
<BarChart data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Bar dataKey="sales" barSize={24} />
</BarChart>
)}


{chartType === 'pie' && (
<PieChart>
<Pie data={data} dataKey="sales" nameKey="month" outerRadius={120} label>
{data.map((entry, idx) => (
<Cell key={`cell-${idx}`} />
))}
</Pie>
<Tooltip />
</PieChart>
)}
</ResponsiveContainer>
</div>
</div>
)
}