class Cursos{
    static cursos= ["Javascript", "HTML", "CSS", "Python", "React"]

    constructor(){}

    static getTodosCursos(){
        return this.cursos
    }

    static getCurso(i_curso){
        return this.cursos[i_curso]
    }

    static addCurso=(novo_curso)=>{
        this.cursos.push(novo_curso)
    }

    static apagarCursos=()=>{
        this.cursos=[]
    }
}


export default Cursos
