export class Aluno{

    //Atributos
    public nomeAluno!: string;
    public nota1!: number;
    public nota2!: number;
    public media!: number;

    //Construtor 
    constructor(nome?:string, nota1?:number, nota2?:number) {
        if(nome != null && nota1 != null && nota2 != null) {
            this.nomeAluno = nome;
            this.nota1 = nota1;
            this.nota2 = nota2;
            this.media = (this.nota1 + this.nota2) / 2
        }
        
        
        
    }
}