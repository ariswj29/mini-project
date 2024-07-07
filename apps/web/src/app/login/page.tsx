'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  //   const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await login(email, password);
  };

  return (
    <section className="p-12 max-w-screen-xl mx-auto items-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-1">
        <div className="p-12 sm:p-16 bg-secondary border border-secondary shadow-sm w-full">
          <h3 className="text-2xl font-bold ">Welcome to Login</h3>
          <p className="my-2">
            Login to your account and access for the features
          </p>
        </div>
        <div className="col-span-2 bg-primary shadow-md w-full">
          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-secondary rounded-md hover:font-bold"
            >
              Login
            </button>
            <hr className="my-4" />
            <Link
              href="/register"
              className="block w-full text-center py-2 px-3 bg-primary border border-secondary rounded-md hover:bg-secondary hover:font-bold"
            >
              Don{"'"}t have an account? Register here
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
