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

    const fetchStudentData = async () => {
        try {
            let { data } = await supabase
                .from('Persona')
                .select('*, Programa(nombre, Area_Academica(nombre))')
                .eq('id_Persona', profile?.id_Persona)
            return data;
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchCourses = async () => { 
        try {
            let{ data, error } = await supabase
                .from('Asignatura')
                .select('id_asignatura, nombre, codigo_asignatura, creditos, id_area, Area_Academica(nombre)')
                .order('codigo_asignatura');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchAreas = async () => { 
        try {
            let { data, error } = await supabase
                .from('Area_Academica')
                .select("*")
                .order('nombre');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchUsers = async () => { 
        try {
            let { data, error } = await supabase
                .from('Persona')
                .select("id_Persona, nombre, correo, fecha_nac, id_ciudad, id_pais, id_rol, Ciudad(nombre), Pais(nombre)")
                .order('nombre');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchCountries = async () => { 
        try {
            let { data, error } = await supabase
                .from('Pais')
                .select("*")
                .order('nombre');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchCities = async () => { 
        try {
            let { data, error } = await supabase
                .from('Ciudad')
                .select("*")
                .order('nombre');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchSections = async () => { 
        try {
            let { data, error } = await supabase
                .from('Seccion')
                .select("*, Periodo(nombre), Persona(nombre), Asignatura(nombre, codigo_asignatura), Aula(nombre)")
                .order('codigo_seccion');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchPeriods = async () => { 
        try {
            let { data, error } = await supabase
                .from('Periodo')
                .select("*")
                .order('fecha_inicio', { ascending: false });
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchProfessors = async () => { 
        try {
            let { data, error } = await supabase
                .from('Persona')
                .select("id_Persona, nombre")
                .eq('id_rol', 3)
                .order('nombre');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchClassrooms = async () => { 
        try {
            let { data, error } = await supabase
                .from('Aula')
                .select("id_aula, nombre")
                .order('nombre');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }

    const fetchCoursesTrim = async () => { 
        try {
            let { data, error } = await supabase
                .from('Asignatura')
                .select("id_asignatura, nombre, codigo_asignatura")
                .order('codigo_asignatura');
            if (error) throw error;
            return data
        }
        catch (error) {
            alert(error.message);
        }
    }
    

    return { fetchGeneralIndex, fetchStudentPeriod, getPeriods, fetchReport, fetchStudentData, fetchCourses, fetchAreas, fetchUsers, fetchCities, fetchCountries, fetchSections, fetchPeriods, fetchProfessors, fetchClassrooms, fetchCoursesTrim }

}

