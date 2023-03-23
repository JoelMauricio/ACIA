// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react' 
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Logo from '../public/logo.svg'

// function FormLogIn() {
//     const session = useSession()
//     const supabase = useSupabaseClient()
  
//     // React States
//     const [errorMessages, setErrorMessages] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className='align-middle'>
//       <form 
//         onSubmit={handleSubmit} 
//         className='bg-white align-middle rounded-2xl flex flex-col gap-5 items-center justify-center' 
//         style={{width: 400,height: 525}}>
//         <div>
//           <Logo style={{width:100,height:100}}/>
//         </div>
//         <div>
//           <input type="text" name="uname" required placeholder='Id' className='rounded-md border-4 ' style={{width:300,height:45}}/>
//           {renderErrorMessage("uname")}
//         </div>
//         <div>
//           <input type="password" name="pass" required placeholder='password' className='rounded-md border-4' style={{width:300,height:45}}/>
//           {renderErrorMessage("pass")}
//         </div>
//         <div>
//           <input type="submit" className='rounded-md bg-blue-800 text-white' style={{width:300,height:45}}/>
//         </div>
//         <div>
//           <input type="text"/>
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div>
//       <div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default FormLogIn;
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Logo from '../public/logo.svg'

const FormLogIn = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className='bg-white align-middle rounded-2xl flex flex-col gap-5 items-center justify-center' style={{width: 400,height: 525}}>
      <div>
        <Logo style={{width:100,height:100}}/>
      </div>
      <div style={{width:300}}>
      {!session ? (
        <Auth supabaseClient={supabase} providers={[]} appearance={{ theme: ThemeSupa, variables: {
          default: {
            colors: {
              brand: '#2A2A72',
              brandAccent: '#2A2A72',
            },
          },
        },
      }}
      localization={{
        variables: {
          sign_in: {
            "email_label": null,
            "password_label": null,
            "email_input_placeholder": "Id",
            "password_input_placeholder": "Password",
            "button_label": "Log In",
            "loading_button_label": "Iniciando Sesion ...",
          },
          forgotten_password: {
            "link_text": "Recuperar Contraseña"
          },
          sign_up:{
            "link_text": "No tienes una cuenta? Registrate"
          }
          
        }
      }} 
        />
      ) : (
        <p>Account page will go here.</p>
      )}
      </div>
    </div>
  )
}

export default FormLogIn