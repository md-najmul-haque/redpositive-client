import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";

const Table = () => {
    let [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        setIsOpen(false)
    };

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <div>
            <>
                <div className="">
                    <button
                        type="button"
                        onClick={openModal}
                        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                        Add New Data
                    </button>
                </div>

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
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Payment successful
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div className='flex justify-center items-center'>
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
                                                            <div className="modal-action">
                                                                <input type="submit" htmlFor="add-data" className="btn w-full bg-primary text-white mt-5" value='Submit' />
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


            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Hobbies</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td><button className="btn btn-sm">Update</button> <button className="btn btn-sm mr-5">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;