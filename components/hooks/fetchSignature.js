import { useState, useEffect } from 'react';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import { useAuth } from '@/components/hooks/loginData';

export function fetchSignatures() {

    const supabase = useSupabaseClient();
    const profile = useAuth().useProfileData();
    const session = useSession();
    const router = useRouter();
    const token = Cookies.get("supabase-auth-token");

    const fetchSelectionSignatures = async () => { //GET Asignaturas

            try {

                const { data } = await supabase
                .from('Seccion')
                .select('id_periodo')
                .order('id_periodo', { ascending: false })
                .limit(1);
    
                let { data: Seccion, error } = await supabase
                    .from('Seccion')
                    .select('*, Periodo(*), Asignatura(*), Persona(*), Aula(*)')
                    .eq('id_periodo', data[0].id_periodo)

                    console.log(Seccion)

                    const newSeccion = Seccion.map(seccion => ({
                        id_estudiante: profile?.id_Persona,
                        id_seccion: seccion.id_seccion,
                        id_periodo: seccion.id_periodo,
                        id_asignatura: seccion.Asignatura.id_asignatura,
                        codigo_asignatura: seccion.Asignatura.codigo_asignatura,
                        creditos: seccion.Asignatura.creditos,
                        nombre_asignatura: seccion.Asignatura.nombre,
                        profesor: seccion.Persona.nombre,
                        cupos: seccion.cupos,
                        horario: seccion.horario,
                        aula: seccion.Aula.nombre,
                        check: false

                      }));
    
                    console.log(newSeccion)
    
                return newSeccion
            }
            catch (error) {
                alert(error.message);
            }
     


    };

    const uploadSelectedSignatures = async (data) => {
        try {

            const rows = data.filter((item) => item.check).map((item) => ({
                id_estudiante: profile?.id_Persona,
                id_asignatura: item.id_asignatura,
                id_seccion: item.id_seccion,
                id_periodo: item.id_periodo,
                calificacion: 100,
                estado: "seleccion",
            }));

            console.log(rows)

            let { data: signatures } = await supabase
            .from('Selecciones')
            .select('*')
            .eq('id_estudiante', profile?.id_Persona)
            .eq('estado', 'seleccion');

        const signaturesIds = new Set(signatures.map((signature) => `${signature.id_asignatura}-${signature.id_periodo}-${signature.id_seccion}`));
        const filteredRows = rows.filter((row) => !signaturesIds.has(`${row.id_asignatura}-${row.id_periodo}-${row.id_seccion}`));

        console.log("filteredRows")
        console.log(filteredRows)


        const { data: insertedData, error } = await supabase
            .from("Selecciones")
            .insert(filteredRows);

        console.log(insertedData);
        console.log(error);

    } catch (error) {
        alert(error.message);
    }
}



    return { fetchSelectionSignatures, uploadSelectedSignatures }

}

