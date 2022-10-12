import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => { console.log(data) };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Input Form</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                            <label className="label">
                                {errors?.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Phone Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })} />
                            <label className="label">
                                {errors?.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please provide valid email address'
                                }
                            })} />

                            <label className="label">
                                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Hobby"
                                className="input input-bordered w-full max-w-xs"
                                {...register("hobby", {
                                    required: {
                                        value: true,
                                        message: 'Hobby is required'
                                    }
                                })} />
                            <label className="label">
                                {errors?.hobby?.type === 'required' && <span className="label-text-alt text-red-500">{errors.hobby.message}</span>}
                            </label>
                        </div>

                        <input type="submit" className="btn w-full bg-primary text-white mt-5" value='Submit' />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Form;