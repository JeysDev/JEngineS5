class VertexArray {
    #rendererID = 0;

    #vertexBuffers = [];
    #vertexBufferIndex = 0;

    #indexBuffer = 0;

    constructor() {
        this.#rendererID = _WEB_GL_RENDERING_CONTEXT.createVertexArray(); //vertex array
    }

    AddVertexBuffer(vertexBuffer) {
        _WEB_GL_RENDERING_CONTEXT.bindVertexArray(this.#rendererID);
        vertexBuffer.Bind();

        //var i = 0; //i can be replaced with gl.getAttribLocation(program, atribName);
        const layout = vertexBuffer.GetLayout();
        layout.GetElements().forEach((element) => {
            _WEB_GL_RENDERING_CONTEXT.enableVertexAttribArray(
                this.#vertexBufferIndex
            );

            _WEB_GL_RENDERING_CONTEXT.vertexAttribPointer(
                this.#vertexBufferIndex,
                element.GetComponentCount(),
                ShaderDataTypeToWebGLBaseType(element.type),
                element.normalized,
                layout.GetStride(),
                element.offset
            );
            this.#vertexBufferIndex += 1;
        });
        this.#vertexBuffers.push(vertexBuffer);
    }
    SetIndexBuffer(indexBuffer) {
        _WEB_GL_RENDERING_CONTEXT.bindVertexArray(this.#rendererID);
        indexBuffer.Bind();

        this.#indexBuffer = indexBuffer;
    }

    Delete() {
        _WEB_GL_RENDERING_CONTEXT.deleteVertexArray(this.#rendererID);
    }
    Bind() {
        _WEB_GL_RENDERING_CONTEXT.bindVertexArray(this.#rendererID);
    }
    Unbind() {
        _WEB_GL_RENDERING_CONTEXT.bindVertexArray(null);
    }

    GetVertexBuffers() {
        return this.#vertexBuffers;
    }
    GetIndexBuffer() {
        return this.#indexBuffer;
    }
}
