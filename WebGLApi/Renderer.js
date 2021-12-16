class Renderer{
    static  BeginScene(){

    }
    static EndScene(){

    }
    static Submit(vertexArray){
        vertexArray.Bind()
        RenderCommand.DrawIndexed(vertexArray);
    }
}