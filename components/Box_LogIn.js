import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Logo from '@/public/logo.svg'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const FormLogIn = () => {
  const router = useRouter()
  const session = useSession()
  const supabase = useSupabaseClient()

  useEffect(() => {
    // Redirect to home page after login
    if (session) {

      router.push('/')
    }
  }, [session, router])

  return (
    <div className='bg-boneWhite dark:bg-zinc-800 align-middle rounded-2xl flex flex-col gap-5 items-center justify-center' style={{ width: 400, height: 525 }}>
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
                  brandAccent: '#424282',
                  brandButtonText: 'white',
                  defaultButtonBackground: 'transparent',
                  defaultButtonBackgroundHover: '#A9ADE5',
                  defaultButtonBorder: 'lightgray',
                  defaultButtonText: 'gray',
                  dividerBackground: '#eaeaea',
                  inputBackground: 'transparent',
                  inputBorder: 'lightgray',
                  inputBorderHover: '#A9ADE5',
                  inputBorderFocus: '#2A2A72',
                  inputText: 'black',
                  inputLabelText: 'gray',
                  inputPlaceholder: 'darkgray',
                  messageText: 'gray',
                  messageTextDanger: '#E22239',
                  anchorTextColor: 'gray',
                  anchorTextHoverColor: 'darkgray',
                },
                fontSizes: {
                  baseBodySize: '16px',
                  baseInputSize: '16px',
                  baseLabelSize: '16px',
                  baseButtonSize: '16px',
                },
              },
              dark: {
                colors: {
                  brand: '#7D80DA',
                  brandAccent: '#2A2A72',
                  defaultButtonBackground: 'transparent',
                  defaultButtonBackgroundHover: '#A9ADE5',
                  defaultButtonBorder: 'lightgray',
                  defaultButtonText: 'gray',
                  dividerBackground: '#eaeaea',
                  inputBackground: '#4B4A4A',
                  inputBorder: '#4B4A4A',
                  inputBorderHover: '#fefefe',
                  inputBorderFocus: '#4B4A4A',
                  inputText: 'black',
                  inputLabelText: 'gray',
                  inputPlaceholder: 'darkgray',
                  messageText: 'gray',
                  messageTextDanger: '#E22239',
                  anchorTextColor: 'gray',
                  anchorTextHoverColor: 'darkgray',
                }
              },

            },
          }}
            theme={useTheme().theme === 'dark' ? 'dark' : 'default'}
            localization={{
              variables: {
                sign_in: {
                  "email_label": null,
                  "password_label": null,
                  "email_input_placeholder": "Correo",
                  "password_input_placeholder": "Password",
                  "button_label": "Log In",
                  "loading_button_label": "Iniciando Sesion ...",
                  "link_text": "Volver",
                },
                forgotten_password: {
                  "link_text": "Recuperar Contraseña",
                  "email_label": null,
                  "password_label": null,
                  "email_input_placeholder": "Tu correo",
                  "button_label": "Enviar instrucciones de recuperación",
                  "loading_button_label": "Enviando instrucciones de recuperación ...",
                  "confirmation_text": "Revise su correo para el link de recuperación"
                },
                sign_up: {
                  "link_text": null,
                  "confirmation_text": "Revise su correo por el link de confirmación",
                  "email_label": null,
                  "password_label": null,
                  "email_input_placeholder": "Correo",
                  "password_input_placeholder": "Password",
                  "button_label": "Registrar Cuenta",
                  "loading_button_label": "Registrando Cuenta ..."
                },
                update_password: {
                  "password_label": null,
                  "password_input_placeholder": "Nueva Contraseña",
                  "button_label": "Cambiar Contraseña",
                  "loading_button_label": "Cambiando Contraseña ...",
                  "confirmation_text": "Se Cambió su Contraseña",
                }
              }
            }}
          />
        ) : (<span className='text-mainBlack'>Redireccionando</span>
        )}
      </div>
    </div >
  )
}

export default FormLogIn
