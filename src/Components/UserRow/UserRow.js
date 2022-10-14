import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form';

const UserRow = ({ user }) => {
    const { _id, name, phone, email, hobby } = user

    let [isOpen, setIsOpen] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleUpdate = id => {
        setIsOpen(true)
    }

    const onSubmit = (data) => {
        const user = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            hobby: data.hobby
        }

        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    toast.success("Data saved successfully")
                    reset()
                    setIsOpen(false)

                } else {
                    toast.error("Failed to inserted data. Please try again later")
                }
            })



    };



    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    toast.success("User data deleted successfully")

                } else {
                    toast.error("Failed to deleted user data. Please try again later")
                }
            })

    }


    return (
        <tr>
            <th>{_id ? _id : ''}</th>
            <td>{name ? name : ''}</td>
            <td>{phone ? phone : ''}</td>
            <td>{email ? email : ''}</td>
            <td>{hobby ? hobby : ''}</td>
            <td>
                <button onClick={() => handleUpdate(_id)} className="btn btn-sm">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm mr-5">Delete</button>
            </td>
            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className="mt-2">
                                            <div className='flex justify-center items-center'>
                                                <div className="card w-96 bg-base-100">
                                                    <div className="card-body">
                                                        <h2 className="text-center text-2xl font-semibold">Input Form</h2>

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
                                                            <div className="modal-action">
                                                                <input type="submit" className="btn w-full bg-primary text-white mt-5" value='Submit' />
                                                            </div>
                                                        </form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </tr>
    );
};

export default UserRow;