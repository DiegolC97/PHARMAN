export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
}

export interface Account {
  id: string
  userId: string
  accountNumber: string
  accountType: 'CHECKING' | 'SAVINGS' | 'CREDIT'
  balance: number
  currency: string
  createdAt: string
  updatedAt: string
}

export interface Transaction {
  id: string
  accountId: string
  amount: number
  type: 'DEBIT' | 'CREDIT'
  description: string
  category: string
  createdAt: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}