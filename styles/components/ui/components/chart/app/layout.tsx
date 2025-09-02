import './globals.css'
import React from 'react'


export const metadata = {
title: 'Sales Dashboard',
description: 'Atomic-structured Sales Dashboard example'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<main className="min-h-screen p-8">
<div className="max-w-6xl mx-auto">{children}</div>
</main>
</body>
</html>
)
}