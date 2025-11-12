import React from "react";
import "@/assets/styles/login.css"; // ← tu CSS original con todos los estilos
export default function AuthForm() {
  return (
	<div class="contenedor">
		<div class="main">  	
			<input type="checkbox" id="chk" aria-hidden="true"/>

				<div class="signup">
					<form>
						
						<label className="text-white justify-center items-center flex font-bold text-[2.3em] m-[50px] transition ease-in-out duration-500" 
							style={{margin:'50px'}}
							for="chk" 
							aria-hidden="true">	
								Iniciar Sesion
						</label>
						<input type="email" name="email" placeholder="Email" required=""/>
						<input type="password" name="pswd" placeholder="Password" required=""/>
						<button class='boton'>Ingresar</button>
					</form>
				</div>

				<div class="login">
					<form>
						<label className="text-white justify-center items-center flex font-bold text-[2.3em] m-[50px] transition ease-in-out duration-500" 
							style={{margin:'50px'}}
							for="chk" 
							aria-hidden="true">	
								Registrarse
						</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
						<input type="email" name="email" placeholder="Email" required=""/>
						<input type="number" name="broj" placeholder="BrojTelefona" required=""/>
						<input type="password" name="pswd" placeholder="Password" required=""/>
						
						<button class='boton'>Registrarse</button>
					</form>
				</div>
		</div>
	</div>
   
  );
}
