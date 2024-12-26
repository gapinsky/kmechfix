import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {motion} from 'motion/react';

const schema = z.object({
	name: z
		.string()
		.min(3, { message: 'Imię i nazwisko jest wymagane' })
		.regex(/^(?=.*\S)(\S+\s+\S+)$/, {
			message: 'Pole musi zawierać imię i nazwisko',
		})
		.regex(/^(?=.*\S)([A-Za-z]+\s[A-Za-z]+)$/, {
			message: 'Pole nie może zawierać cyfr i znaków specjalnych',
		}),
	number: z
		.string()
		.min(1, { message: 'Numer kontaktowy jest wymagany' })
		.length(9, { message: 'Numer telefonu jest za krótki' }),
	email: z
		.string()
		.min(1, { message: 'Adres e-mail jest wymagany' })
		.email({ message: 'Adres e-mail jest niepoprawny' }),
	message: z
		.string()
		.min(1, { message: 'Wiadomość jest wymagana' })
		.min(30, { message: 'Wiadomość jest za krótka (minimalnie 30 znaków)' }),
});

type FormData = z.infer<typeof schema>;

import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FieldValues) => console.log(data.name);
	

	
	return (
		<motion.form
		initial={{x: "10vw", opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: true}} transition={{type: "ease-out", duration: 0.6, repeat: 0, delay: 0.5}}
			onSubmit={handleSubmit(onSubmit)}
			className='bg-slate-200 p-5 w-full flex flex-col rounded-md text-lg shadow-lg shadow-slate-500 md:max-w-[70%] lg:max-w-none xl:max-w-[80%] lg:col-span-2  '>
			<div className='relative flex flex-col pb-5 '>
				<label htmlFor='name' className='mb-1 text-xl'>
					Imię i nazwisko:
				</label>
				<input
					{...register('name')}
					type='text'
					id='name'
					className='p-1 rounded-md border-2 border-slate-300 focus:outline-blue-500 focus:bg-blue-50'
				/>
				{errors.name && (
					<p className='absolute bottom-0 text-red-500 text-sm'>
						{errors.name.message}
					</p>
				)}
			</div>
			<div className='relative flex flex-col pb-5 '>
				<label htmlFor='number' className='mb-1 text-xl'>
					Numer kontaktowy:
				</label>
				<input
					{...register('number')}
					type='string'
					onInput={(e: FieldValues) => {
						e.target.value = e.target.value.replace(/[^0-9]/g, '');
					}}
					maxLength={9}
					id='number'
					className='p-1 rounded-md border-2 border-slate-300 focus:outline-blue-500 focus:bg-blue-50'
				/>
				{errors.number && (
					<p className='absolute bottom-0 text-red-500 text-sm'>
						{errors.number.message}
					</p>
				)}
			</div>
			<div className='relative flex flex-col pb-5 '>
				<label htmlFor='email' className='mb-1 text-xl'>
					Adres e-mail:
				</label>
				<input
					{...register('email')}
					type='text'
					id='email'
					className='p-1 rounded-md border-2 border-slate-300 focus:outline-blue-500 focus:bg-blue-50'
				/>
				{errors.email && (
					<p className='absolute bottom-0 text-red-500 text-sm'>
						{errors.email.message}
					</p>
				)}
			</div>
			<div className='relative flex flex-col pb-10 md:pb-5 '>
				<label htmlFor='message' className='mb-1 text-xl'>
					Wiadomość:
				</label>
				<textarea
					{...register('message')}
					id='message'
					className='p-1 rounded-md border-2 border-slate-300 min-h-28 resize-none focus:outline-blue-500 focus:bg-blue-50'
					rows={6}
				/>
				{errors.message && (
					<p className='absolute bottom-0 text-red-500 text-sm'>
						{errors.message.message}
					</p>
				)}
			</div>
			<motion.button
				whileHover={{scale: 0.95}}
				whileTap={{scale: 0.85}}
				transition={{duration: 0.2, type: "spring"}}
				type='submit'
				className='bg-blue-500 self-end text-white font-semibold rounded-md shadow-sm shadow-slate-400 px-10 py-2 hover:bg-blue-400 lg:text-lg xl:text-xl'>
				Wyślij
			</motion.button>
		</motion.form>
	);
};

export default Form;
