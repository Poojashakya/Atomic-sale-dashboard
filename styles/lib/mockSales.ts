export type SalePoint = {
month: string;
sales: number;
}


// Synthetic mock data inspired by typical Kaggle sales datasets.
export const SALES_2024: SalePoint[] = [
{ month: 'Jan', sales: 12000 },
{ month: 'Feb', sales: 15000 },
{ month: 'Mar', sales: 14000 },
{ month: 'Apr', sales: 18000 },
{ month: 'May', sales: 17000 },
{ month: 'Jun', sales: 20000 },
{ month: 'Jul', sales: 24000 },
{ month: 'Aug', sales: 22000 },
{ month: 'Sep', sales: 21000 },
{ month: 'Oct', sales: 25000 },
{ month: 'Nov', sales: 23000 },
{ month: 'Dec', sales: 28000 }
]


export const SALES_2023: SalePoint[] = SALES_2024.map((p, i) => ({ month: p.month, sales: Math.round(p.sales * (0.85 + Math.random() * 0.15)) }))
export const SALES_2022: SalePoint[] = SALES_2024.map((p, i) => ({ month: p.month, sales: Math.round(p.sales * (0.7 + Math.random() * 0.2)) }))


export const YEAR_OPTIONS = [2024, 2023, 2022] as const