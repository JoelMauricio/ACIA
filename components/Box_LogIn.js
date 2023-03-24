import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Logo from '../public/logo.svg'

const FormLogIn = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className='bg-white align-middle rounded-2xl flex flex-col gap-5 items-center justify-center' style={{ width: 400, height: 525 }}>
      <div>
        <Logo style={{ width: 100, height: 100 }} />
      </div>
      <div style={{ width: 300 }}>
        {!session ? (
          <Auth supabaseClient={supabase} providers={[]} appearance={{
            theme: ThemeSupa, variables: {
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
                sign_up: {
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