import React from 'react';
import Head from 'next/head';
import Navbar from './componnts/Navbar';
import Image from 'next/image';
import SignUpForm from './componnts/SignUpForm';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>YB Store - Sign Up</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image width={546} height={654} src="/login.png" alt="Monetize Your Content" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-5xl text-black mb-4 text-center">Login</h1>
            <SignUpForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
