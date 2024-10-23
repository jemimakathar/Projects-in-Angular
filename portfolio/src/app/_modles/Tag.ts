export class Tag{
    static readonly ANGULAR= new Tag('Angular','red');
    static readonly TYPESCRIPT= new Tag('TypeScript','darkred');
    static readonly PYTHON= new Tag('Python','blue');
    static readonly CSHARP= new Tag('C#','green');
    static readonly JAVA= new Tag('Java','orange');
    static readonly NODEJS= new Tag('Node.JS','brown');
    static readonly ASPNET= new Tag('Asp.NET','purple');





    private constructor(private readonly key:string,public readonly color:string)
    {

    }
    toString()
    {
        return this.key
    }
}