import React from "react";
import "@/assets/styles/login.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authApi } from "@/features/auth/api/authApi";
import { showToast } from "@/lib/toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
const buttonStyle = {
	className:
		'boton w-[60%] h-10 justify-center block text-[1em] font-bold outline-none rounded-md transition ease-in-out duration-500 cursor-pointer bg-[#f57922] text-white hover:bg-[#6d44b8]'
	,
	style: {
		margin: '10px auto',
		marginTop: '30px'
	}
}
const inputStyle = {
	className: 'w-[60%] h-[10px] bg-[#e0dede] justify-center flex border-none outline-none rounded-md',
	style: {
		margin: '20px auto',
		padding: '12px'
	}
}

export default function AuthForm() {
	const navigate = useNavigate();
	const {
		register: registerLogin,
		handleSubmit: handleSubmitLogin,
		formState: { errors: errorsLogin }
	} = useForm();

	const {
		register: registerRegister,
		handleSubmit: handleSubmitRegister,
		formState: { errors: errorsRegister }
	} = useForm();


	const onRegister = async (data) => {
		try {
			const respuesta = await authApi.register(data);
			showToast.success(respuesta.message);
		} catch (error) {
			showToast.error(error.response.data.message);
		}
	}

	const { login } = useAuth(); // Usamos el contexto

	const onLogin = async (data) => {
		try {
			const respuesta = await authApi.login(data);
			console.log(respuesta);
			showToast.success(respuesta.message);

			// Actualizamos el estado global de autenticación
			// Asumimos que la respuesta del login trae el usuario, si no, 
			// el checkStatus lo hará al recargar, pero para SPA es mejor así.
			if (respuesta.user) {
				login({ user: respuesta.user });
			} else {
				// Si el login no devuelve el usuario, forzamos una verificación
				// Ojo: esto requiere que checkStatus esté expuesto en el contexto o recargar
				window.location.reload();
				return;
			}

			// Redirigir según el rol del usuario
			const userRole = respuesta.user?.role;
			if (userRole === 'ADMIN' || userRole === 'SUPER_ADMIN') {
				navigate('/admin/dashboard');
			} else {
				navigate('/user/home');
			}
		} catch (error) {
			console.error(error);
			const message = error.response?.data?.message || "Error al conectar con el servidor";
			showToast.error(message);
		}
	}

	// FUNCIÓN CORREGIDA - Usa variable de entorno
	const handleGoogleLogin = () => {
		const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
		// Redirige al endpoint que INICIA el flujo OAuth
		window.location.href = `${apiUrl}/api/auth/google`;
	}

	// Función para manejar errores de validación y mostrar toast
	const onError = (errors) => {
		// Mostramos el primer error que encontremos
		const firstError = Object.values(errors)[0];
		if (firstError) {
			showToast.error(firstError.message);
		}
	};

	return (
		<div className=" flex justify-center items-center min-h-screen bg-gradient-to-b from-[#001838]  via-[#001a3f] to-[#013277]" >
			<div className="w-[350px] h-[500px] overflow-hidden rounded-xl shadow-[5px_20px_50px_#000]">
				<input type="checkbox" id="chk" aria-hidden="true" />

				<div className=" relative w-full h-full">
					<form onSubmit={handleSubmitLogin(onLogin, onError)}>
						<label className="text-white justify-center items-center flex font-bold text-[2.3em] m-[50px] transition ease-in-out duration-500 cursor-pointer"
							style={{ margin: '50px' }}
							htmlFor="chk"
							aria-hidden="true">
							Iniciar Sesion
						</label>
						<input
							className={inputStyle.className} style={inputStyle.style}
							type="email" name="email" placeholder="Email" required=""
							{...registerLogin("email",
								{
									required: "El email es requerido",
									pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
								}
							)}
						/>
						<input
							className={inputStyle.className} style={inputStyle.style}
							type="password" name="pswd" placeholder="Password" required=""
							{...registerLogin("password", {
								required: "El password es requerido",
								minLength: { value: 6, message: "Mínimo 6 caracteres" }
							})} />

						<button className={buttonStyle.className} style={buttonStyle.style}>Ingresar</button>

						<button
							type="button"
							onClick={handleGoogleLogin}
							className={`${buttonStyle.className} bg-black  justify-center items-center grid grid-cols-[10%_90%] hover:bg-white hover:text-black`}
							style={buttonStyle.style}
						>
							<div style={{ padding: '5px' }}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
									<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.22 3.6l6.84-6.84C35.9 2.86 30.47 0 24 0 14.64 0 6.52 5.4 2.56 13.22l7.98 6.19C12.35 13.08 17.74 9.5 24 9.5z" />
									<path fill="#4285F4" d="M46.98 24.5c0-1.57-.14-3.09-.39-4.5H24v9h13.02c-.58 2.98-2.32 5.51-4.89 7.22l7.52 5.84C43.66 38.02 46.98 31.8 46.98 24.5z" />
									<path fill="#FBBC05" d="M10.54 28.41A14.5 14.5 0 0 1 9.5 24c0-1.52.26-2.98.74-4.41l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.93.94 7.65 2.56 10.81l7.98-6.4z" />
									<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.84l-7.52-5.84c-2.1 1.4-4.8 2.28-8.38 2.28-6.26 0-11.65-3.58-13.92-8.78l-7.98 6.4C6.52 42.6 14.64 48 24 48z" />
								</svg>
							</div>
							<span>Iniciar con google</span>
						</button>
					</form>
				</div>

				<div className="register h-[460px] bg-white rounded-[60%_/_10%] transition ease-in-out duration-800">
					<form onSubmit={handleSubmitRegister(onRegister, onError)}>
						<label className="text-[#f57922] justify-center items-center flex font-bold text-[2.3em] m-[50px] transition ease-in-out duration-500 cursor-pointer"
							style={{ margin: '50px' }}
							htmlFor="chk"
							aria-hidden="true">
							Registrarse
						</label>

						{/* Input Nombre */}
						<div className="w-[60%] mx-auto">
							<input
								className={`${inputStyle.className} w-full`} style={{ ...inputStyle.style, margin: '10px 0' }}
								type="text" placeholder="Nombre"
								{...registerRegister("name", {
									required: "El nombre es requerido",
									minLength: { value: 3, message: "Mínimo 3 caracteres" }
								})}
							/>
						</div>

						{/* Input Telefono */}
						<div className="w-[60%] mx-auto">
							<input
								className={`${inputStyle.className} w-full`} style={{ ...inputStyle.style, margin: '10px 0' }}
								type="text" placeholder="Telefono"
								{...registerRegister("tlf", {
									required: "El teléfono es requerido",
									pattern: { value: /^[0-9]+$/, message: "Solo se permiten números" },
									minLength: { value: 10, message: "El teléfono debe tener 10 dígitos" },
									maxLength: { value: 10, message: "El teléfono debe tener 10 dígitos" }
								})}
							/>
						</div>

						{/* Input Email */}
						<div className="w-[60%] mx-auto">
							<input
								className={`${inputStyle.className} w-full`} style={{ ...inputStyle.style, margin: '10px 0' }}
								type="email" placeholder="Email"
								{...registerRegister("email", {
									required: "El email es requerido",
									pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
								})}
							/>
						</div>

						{/* Input Password */}
						<div className="w-[60%] mx-auto">
							<input
								className={`${inputStyle.className} w-full`} style={{ ...inputStyle.style, margin: '10px 0' }}
								type="password" placeholder="Password"
								{...registerRegister("password", {
									required: "La contraseña es requerida",
									minLength: { value: 6, message: "Contraseña mínimo 6 caracteres" }
								})}
							/>
						</div>

						<button className={buttonStyle.className} style={buttonStyle.style}>Registrarse</button>
					</form>
				</div>
			</div>
		</div>

	);
}
