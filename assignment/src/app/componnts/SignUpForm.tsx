"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  Info: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Info: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <button className="flex items-center justify-center w-full mb-6 py-2 px-3 border border-black rounded-full text-gray-700">
  <img src="/google.png" alt="Google icon" className="h-5 w-5 mr-2" />
  Log in with Google
</button>

      <div className="flex items-center justify-center my-3">
        <hr className="flex-grow border-gray-300" />
        <span className="px-4 text-gray-500">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Info">
          Email
        </label>
        <input
          className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Info"
          type="email"
          placeholder="Enter email address"
          name="Info"
          value={formData.Info}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <div className="flex justify-center">
        <button
  type="submit"
  className="bg-white text-green-700 font-bold py-2 px-6 rounded-full border border-green-500 hover:bg-green-50 focus:outline-none focus:shadow-outline"
>
  Login
</button>

</div>

      </div>
      <div className="text-center">
  <p className="text-sm text-gray-500">Don’t have an account?</p>
  <p className="text-sm">
    <a href="#" className="text-green-500">Sign up</a>
  </p>
</div>

    </form>
  );
};

export default SignUpForm;
