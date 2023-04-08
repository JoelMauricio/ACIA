import { useState, useEffect } from 'react';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import { useAuth } from './loginData';

export function fetchAll() {

    const supabase = useSupabaseClient();
    const profile = useAuth().useProfileData();
    const session = useSession();
    const router = useRouter();
    const token = Cookies.get("supabase-auth-token");

    const fetchGeneralIndex = async () => { //GET Asignaturas

        try {
            const { data, error } = await supabase
                .from('Selecciones')
                .select('*')
                .eq('id_estudiante', profile?.id_Persona)
            return data
        }
        catch (error) {
            alert(error.message);
        }


    };

    const fetchStudentPeriod = async (period) => {
        try {
            if (period) {
                
                const { data: users, error } = await supabase
                    .from('Selecciones')
                    .select('*')
                    .eq('id_estudiante', profile?.id_Persona)
                    .eq('id_periodo', period);
                    return users;


            }
            else {

                const { data } = await supabase
                    .from('Selecciones')
                    .select('id_seleccion')
                    .order('id_seleccion', { ascending: false })
                    .limit(1);

                const { data: users, error } = await supabase
                    .from('Selecciones')
                    .select('*')
                    .eq('id_estudiante', profile?.id_Persona)
                    .eq('id_seleccion', data[0]?.id_seleccion);

                    return users;

            }

        } catch (error) {
            alert(error.message);
        }
    };

    const getPeriods = async () => {
        try {
            let { data } = await supabase
                .from('Selecciones')
                .select('id_estudiante, id_asignatura, Periodo(*)')
                .eq('id_estudiante', profile?.id_Persona)

            return data;
        } catch (error) {
            alert(error.message);
        }
    }

    const fetchReport = async (idPeriodo) => {
        try {
            let { data } = await supabase
                .from('Selecciones')
                .select('calificacion,estado,Asignatura(codigo_asignatura,creditos,nombre), Periodo(fecha_inicio, fecha_fin)')
                .eq('id_estudiante', profile?.id_Persona)
                .eq('id_periodo', idPeriodo)

            return data;
        } catch (error) {
            alert(error.message);
        }
    }

    return { fetchGeneralIndex, fetchStudentPeriod, getPeriods, fetchReport }

}

