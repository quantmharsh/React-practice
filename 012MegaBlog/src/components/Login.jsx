import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { set, useForm } from "react-hook-form";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState(null);
	const login = async (data) => {
        console.log("Data inside login" ,data)
		setError("");
		try {
			const session = await authService.login(data);
			if (session) {
				const userData = await authService.getCurrentUser();
				//update value in store
				if (userData) {
					dispatch(authLogin(userData));
					//navigate user to home
					navigate("/");
				}
			}
		} catch (error) { 
			setError(error);
		}
	};

	return( <div className="flex items-center justify-center w-full">
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        //handlesubmit is a method which we get from useform . which takes our method as an argument(the way we want to handle form on submit)
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                {/* it is our Input component */}
              <Input
              label= "Email"
              placeHolder="Enter Your Email"
              type="email"
            // using resgister from useform . first we need to spread all values in register otherwise it will override
            //previous all values. then we pass the name which should be unique for all fields.{options}then we pass
            //options to validate the field and required,etc
              {...register("email", {
                 required:true,
                 validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })} />
              <Input
              label="password"
              type= "password"
              placeHolder="password"
              {...register("password",{
                required :true
              })}
               
               />
             <Button type = "submit"
             className="w-full" >Sign In</Button>
            </div>

        </form>
    </div>
    )
};

export default Login;
