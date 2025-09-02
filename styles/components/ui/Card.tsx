import React from 'react'


export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
return (
<div className={`rounded-2xl shadow-sm bg-white p-4 ${className}'}>
{children}
</div>
)
}