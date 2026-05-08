"use client";
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const initialValues = {
    email: '',
    password: '',
  };
  
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('البريد الإلكتروني غير صالح')
      .required('البريد الإلكتروني مطلوب'),
    password: Yup.string().required('كلمة المرور مطلوبة'),
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">مرحباً بعودتك</h2>
          <p className="mt-2 text-gray-600">يرجى تسجيل الدخول إلى حسابك</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Login data:', values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    البريد الإلكتروني
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className={`w-full px-4 py-2 text-gray-900 transition-all duration-200 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email && touched.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300'
                    }`}
                  />
                  {errors.email && touched.email && (
                    <div className="text-sm text-red-600">{errors.email}</div>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label 
                      htmlFor="password" 
                      className="block text-sm font-medium text-gray-700"
                    >
                      كلمة المرور
                    </label>
                    <button
                      type="button"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      نسيت كلمة المرور؟
                    </button>
                  </div>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={`w-full px-4 py-2 text-gray-900 transition-all duration-200 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.password && touched.password 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 left-0 flex items-center pr-3"
                      style={{ right: 'auto',left:"12pxq" }}
                    >
                      {showPassword ? (
                        // Eye icon (visible)
                        <svg className="w-5 h-5 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        // Eye closed icon (hidden)
                        <svg className="w-5 h-5 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && touched.password && (
                    <div className="text-sm text-red-600">{errors.password}</div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  تسجيل الدخول
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;