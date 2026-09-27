import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'sgo_users'
const SESSION_KEY = 'sgo_session'

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

// Seed a default admin account on first run — admins are never created
// through public sign-up, only provisioned internally.
function seedAdmin() {
  const users = loadUsers()
  if (!users.some((u) => u.role === 'admin')) {
    users.push({
      id: 'admin-1',
      role: 'admin',
      adminRole: 'Super Admin',
      fullName: 'System Owner',
      email: 'admin@smartgeooffer.com',
      password: 'Admin@123',
      status: 'active',
    })
    saveUsers(users)
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    seedAdmin()
    const sessionId = localStorage.getItem(SESSION_KEY)
    if (sessionId) {
      const found = loadUsers().find((u) => u.id === sessionId)
      if (found) setUser(found)
    }
    setReady(true)
  }, [])

  function persistSession(u) {
    setUser(u)
    if (u) localStorage.setItem(SESSION_KEY, u.id)
    else localStorage.removeItem(SESSION_KEY)
  }

  function findByIdentifier(identifier) {
    const users = loadUsers()
    return users.find((u) => u.email === identifier || u.mobile === identifier)
  }

  function register(role, data) {
    const users = loadUsers()
    if (users.some((u) => u.email === data.email)) {
      throw new Error('An account with this email already exists.')
    }
    const newUser = {
      id: `${role}-${Date.now()}`,
      role,
      status: role === 'retailer' ? 'pending' : 'active',
      ...data,
    }
    users.push(newUser)
    saveUsers(users)
    persistSession(newUser)
    return newUser
  }

  function login(identifier, password, role) {
    const found = findByIdentifier(identifier)
    if (!found || found.role !== role) {
      throw new Error('No matching account found for this portal.')
    }
    if (found.password !== password) {
      throw new Error('Incorrect password.')
    }
    persistSession(found)
    return found
  }

  function logout() {
    persistSession(null)
  }

  function listByRole(role) {
    return loadUsers().filter((u) => u.role === role)
  }

  function updateUserStatus(id, status) {
    const users = loadUsers()
    const idx = users.findIndex((u) => u.id === id)
    if (idx !== -1) {
      users[idx].status = status
      saveUsers(users)
      if (user?.id === id) setUser(users[idx])
    }
  }

  function addAdmin(data) {
    const users = loadUsers()
    if (users.some((u) => u.email === data.email)) {
      throw new Error('An account with this email already exists.')
    }
    const newAdmin = {
      id: `admin-${Date.now()}`,
      role: 'admin',
      status: data.accountStatus || 'active',
      ...data,
    }
    users.push(newAdmin)
    saveUsers(users)
    return newAdmin
  }

  const value = {
    user,
    ready,
    register,
    login,
    logout,
    listByRole,
    updateUserStatus,
    addAdmin,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
