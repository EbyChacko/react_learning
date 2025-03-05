import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log('Final Form Data:', data);

    return (
        <div className="wrapper">
            <h4 className="days">Day 10</h4>
            <h2>Multi-Step Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                    <div>
                        <h4>Personal Info</h4>
                        <label>Name:</label>
                        <input {...register('name', { required: 'Name is required' })} />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                        <br></br>
                        <button type="button" onClick={() => setStep(2)}>Next</button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h4>Contact Info</h4>
                        <label>Email:</label>
                        <input {...register('email', { 
                            required: 'Email is required', 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address'
                            }
                        })} />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                        <br></br>
                        <label>Phone:</label>
                        <input {...register('phone', { 
                            required: 'Phone number is required', 
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Invalid phone number'
                            }
                        })} />
                        {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
                        <br></br>
                        <button type="button" onClick={() => setStep(1)}>Back</button>
                        <button type="submit">Submit</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default MultiStepForm;