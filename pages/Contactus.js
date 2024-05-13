
import Head from 'next/head'
import { useState } from 'react'

function Contactus() {

  const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [form, setForm] = useState('')

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmitForm = async (e) => {
		e.preventDefault()

		if (inputs.name && inputs.email && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})

				const { error } = await res.json()

				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}

				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setInputs({
					name: '',
					email: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}

  return (
    <>
    <Head>
    <title>SandHut Studios | Contact US</title>
  </Head>
    <div className='bg-black m-0 p-0 min-h-[100vh]'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-center text-white font-Poppins text-3xl md:text-6xl font-bold mt-10 mb-7'>Contact us</h1>

        <div className='bg-sp w-[350px] md:w-2/5 p-6 rounded-lg shadow-lg'>
        <form className='mx-auto' onSubmit={(e) => onSubmitForm(e)}>

            <div className='my-3 mx-auto'>
              <input 	id='name'
					type='text'
					value={inputs.name}
					onChange={handleChange}
					required className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder='Enter Your Name'/>
            </div>
            <div className='my-3 mx-auto'>
              <input 	id='email'
					type='email'
					value={inputs.email}
					onChange={handleChange}
					required 
          className='w-full mt- p-4 outline-none border-none rounded-lg' placeholder='Enter Your Email'/>
            </div>
         
            <div className='my-3 mx-auto'>
              <textarea 
              	id='message'
                type='text'
                value={inputs.message}
                onChange={handleChange}
                rows='5'
                required
              className='w-full h-36 mt-2 p-4 outline-none border-none rounded-lg' placeholder='Type Message..'></textarea>
               </div>
               <button className='w-full p-3 mt-2 bg-black text-white outline-none border-none rounded-lg'>
                Submit
               </button>
               {form.state === 'loading' ? (
					<div>Sending....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && <div>Sent successfully</div>
				)}
			</form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Contactus;