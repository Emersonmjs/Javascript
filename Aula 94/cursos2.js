const cursos= ["Javascript", "HTML", "CSS", "Python", "React"]

export default function getTodosCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

export {getCurso}
