const Form = () => {
	return (
		<form
			action=''
			className='bg-slate-200 p-5 w-full flex flex-col rounded-md text-lg shadow-lg shadow-slate-500 md:max-w-[70%] lg:max-w-none  '>
			<div className='flex flex-col mb-4'>
				<label htmlFor='' className='mb-1 text-xl'>
					Imię i nazwisko:
				</label>
				<input type='text' className='p-1 rounded-md shadow-md' />
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='' className='mb-1 text-xl'>
					Numer kontaktowy:
				</label>
				<input type='text' className='p-1 rounded-md shadow-md' />
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='' className='mb-1 text-xl'>
					Adres e-mail:
				</label>
				<input type='text' className='p-1 rounded-md shadow-md' />
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='' className='mb-1 text-xl'>
					Wiadomość:
				</label>
				<textarea
					className='p-1 rounded-md shadow-md min-h-28 resize-none'
					rows={6}
				/>
			</div>
			<button className='bg-blue-500 self-end text-white font-semibold rounded-md shadow-sm shadow-slate-400 px-5 py-1 hover:bg-blue-400'>
				Wyślij
			</button>
		</form>
	);
};

export default Form;
