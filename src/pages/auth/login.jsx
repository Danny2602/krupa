import React from "react";
import "@/assets/styles/login.css"; 
const buttonStyle={
	className:
		'boton w-[60%] h-10 justify-center block text-[1em] font-bold outline-none rounded-md transition ease-in-out duration-500 cursor-pointer bg-[#f57922] text-white hover:bg-[#6d44b8]'
	,
	style:{margin: '10px auto',
		marginTop: '30px'}
		
	
}
const inputStyle={
	className:'w-[60%] h-[10px] bg-[#e0dede] justify-center flex border-none outline-none rounded-md',
	style:{
		margin:'20px auto',
		padding:'12px'
	}
}
export default function AuthForm() {
  return (
	<div className=" flex justify-center items-center min-h-screen bg-gradient-to-b from-[#001838]  via-[#001a3f] to-[#013277]" >
		<div className="w-[350px] h-[500px] overflow-hidden rounded-xl shadow-[5px_20px_50px_#000]">  	
			<input type="checkbox" id="chk" aria-hidden="true"/>

				<div className=" relative w-full h-full">
					<form>
						
						<label className="text-white justify-center items-center flex font-bold text-[2.3em] m-[50px] transition ease-in-out duration-500 cursor-pointer" 
							style={{margin:'50px'}}
							htmlFor="chk" 
							aria-hidden="true">	
								Iniciar Sesion
						</label>
						<input className={inputStyle.className} style={inputStyle.style} type="email" name="email" placeholder="Email" required=""/>
						<input className={inputStyle.className} style={inputStyle.style} type="password" name="pswd" placeholder="Password" required=""/>
						<button className={buttonStyle.className} style={buttonStyle.style}>Ingresar</button>
						<button className={`${buttonStyle.className} bg-black  justify-center items-center grid grid-cols-[10%_90%] hover:bg-white hover:text-black`} style={buttonStyle.style}
							>
							<div style={{padding:'5px'}}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
								<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.22 3.6l6.84-6.84C35.9 2.86 30.47 0 24 0 14.64 0 6.52 5.4 2.56 13.22l7.98 6.19C12.35 13.08 17.74 9.5 24 9.5z"/>
								<path fill="#4285F4" d="M46.98 24.5c0-1.57-.14-3.09-.39-4.5H24v9h13.02c-.58 2.98-2.32 5.51-4.89 7.22l7.52 5.84C43.66 38.02 46.98 31.8 46.98 24.5z"/>
								<path fill="#FBBC05" d="M10.54 28.41A14.5 14.5 0 0 1 9.5 24c0-1.52.26-2.98.74-4.41l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.93.94 7.65 2.56 10.81l7.98-6.4z"/>
								<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.84l-7.52-5.84c-2.1 1.4-4.8 2.28-8.38 2.28-6.26 0-11.65-3.58-13.92-8.78l-7.98 6.4C6.52 42.6 14.64 48 24 48z"/>
								</svg>
							</div>
							<span>Iniciar con google</span>
						</button>
					</form>
				</div>

				<div className="register h-[460px] bg-white rounded-[60%_/_10%] transition ease-in-out duration-800">
					<form>
						<label className="text-[#f57922] justify-center items-center flex font-bold text-[2.3em] m-[50px] transition ease-in-out duration-500 cursor-pointer" 
							style={{margin:'50px'}}
							htmlFor="chk" 
							aria-hidden="true">	
								Registrarse
						</label>
						<input className={inputStyle.className} style={inputStyle.style} type="text" name="txt" placeholder="User name" required=""/>
						<input className={inputStyle.className} style={inputStyle.style} type="email" name="email" placeholder="Email" required=""/>
						<input className={inputStyle.className} style={inputStyle.style} type="number" name="broj" placeholder="BrojTelefona" required=""/>
						<input className={inputStyle.className} style={inputStyle.style} type="password" name="pswd" placeholder="Password" required=""/>

						<button className={buttonStyle.className} style={buttonStyle.style}>Registrarse</button>
					</form>
				</div>
		</div>
	</div>
   
  );
}
