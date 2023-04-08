const Options = ({courseData}) => {
    console.log(courseData);
    let areas = coursesData.filter((course, index, self) => index === self.findIndex((s) => (s.id_area === course.id_area))); //Eliminar opciones duplicadas
    let areaSort = areas.sort((a,b) => (a.Area_Academica.nombre < b.Area_Academica.nombre)? -1 : 1); //Ordenar opciones de forma ascendente
}

export default Options
