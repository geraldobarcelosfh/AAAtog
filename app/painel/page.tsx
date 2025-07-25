"use client"

import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { app } from '@/lib/firebase'

export default function PainelPage() {
  const auth = getAuth(app)
  const [user, setUser] = useState<any>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  onAuthStateChanged(auth, (u) => setUser(u))

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      alert('Erro ao autenticar')
    }
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto p-8 space-y-4">
        <h1 className="text-xl font-bold">Login</h1>
        <input className="border p-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn-primary" onClick={handleLogin}>Entrar</button>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-xl font-bold mb-4">Novo Artigo</h1>
      {/* Formulário simplificado - em produção validar e enviar JWT para Strapi */}
      <p>Usuário autenticado: {user.email}</p>
    </div>
  )
}
