class BufferElement {
    constructor(type, name, normalized = false) {
        this.type = type;
        this.name = name;
        this.size = ShaderDataTypeSize(type);
        this.offset = 0;
        this.normalized = normalized;
    }
    GetComponentCount() {
        switch (this.type) {
            case ShaderDataType.Float:
                return 1;
            case ShaderDataType.Float2:
                return 2;
            case ShaderDataType.Float3:
                return 3;
            case ShaderDataType.Float4:
                return 4;
            case ShaderDataType.Mat3:
                return 3; // 3* float3
            case ShaderDataType.Mat4:
                return 4; // 4* float4
            case ShaderDataType.Int:
                return 1;
            case ShaderDataType.Int2:
                return 2;
            case ShaderDataType.Int3:
                return 3;
            case ShaderDataType.Int4:
                return 4;
            case ShaderDataType.Bool:
                return 1;
        }
    }
}
class BufferLayout {
    #elements = [];
    #stride = 0;
    constructor(elements) {
        this.#elements = elements;
        this.#CalculateOffsetAndStride();
    }
    #CalculateOffsetAndStride() {
        var offset = 0;
        this.#stride = 0;
        this.#elements.forEach((element) => {
            element.offset = offset;
            offset += element.size;
            this.#stride += element.size;
        });
    }
    GetElements() {
        return this.#elements;
    }
    GetStride() {
        return this.#stride;
    }
}

class VertexBuffer {
    #rendererID = 0;
    #layout = 0;

    constructor(vertices) {
        this.#rendererID = _WEB_GL_RENDERING_CONTEXT.createBuffer();
        _WEB_GL_RENDERING_CONTEXT.bindBuffer(
            _WEB_GL_RENDERING_CONTEXT.ARRAY_BUFFER,
            this.#rendererID
        );

        _WEB_GL_RENDERING_CONTEXT.bufferData(
            _WEB_GL_RENDERING_CONTEXT.ARRAY_BUFFER,
            new Float32Array(vertices),
            _WEB_GL_RENDERING_CONTEXT.DYNAMIC_DRAW
        );
    }

    Delete() {
        _WEB_GL_RENDERING_CONTEXT.deleteBuffer(this.#rendererID);
    }

    Bind() {
        _WEB_GL_RENDERING_CONTEXT.bindBuffer(
            _WEB_GL_RENDERING_CONTEXT.ARRAY_BUFFER,
            this.#rendererID
        );
    }

    Unbind() {
        _WEB_GL_RENDERING_CONTEXT.bindBuffer(
            _WEB_GL_RENDERING_CONTEXT.ARRAY_BUFFER,
            null
        );
    }

    SetLayout(layout) {
        this.#layout = layout;
    }
    GetLayout() {
        return this.#layout;
    }
}
/* Also known as Element Array Buffer */
class IndexBuffer {
    #rendererID = 0;
    #count = 0;

    constructor(indices, count) {
        this.#count = count;
        this.#rendererID = _WEB_GL_RENDERING_CONTEXT.createBuffer();

        _WEB_GL_RENDERING_CONTEXT.bindBuffer(
            _WEB_GL_RENDERING_CONTEXT.ELEMENT_ARRAY_BUFFER,
            this.#rendererID
        );
        _WEB_GL_RENDERING_CONTEXT.bufferData(
            _WEB_GL_RENDERING_CONTEXT.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(indices),
            _WEB_GL_RENDERING_CONTEXT.STATIC_DRAW
        );
    }
    Delete() {
        _WEB_GL_RENDERING_CONTEXT.deleteBuffer(this.#rendererID);
    }

    Bind() {
        _WEB_GL_RENDERING_CONTEXT.bindBuffer(
            _WEB_GL_RENDERING_CONTEXT.ELEMENT_ARRAY_BUFFER,
            this.#rendererID
        );
    }

    Unbind() {
        _WEB_GL_RENDERING_CONTEXT.bindBuffer(
            _WEB_GL_RENDERING_CONTEXT.ELEMENT_ARRAY_BUFFER,
            null
        );
    }

    GetCount() {
        return this.#count;
    }
}
