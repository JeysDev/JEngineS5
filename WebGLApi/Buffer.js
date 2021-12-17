class BufferElement {
    /**
     * Constructor for the buffer element
     * @param {ShaderDataType} type
     * @param {String} name
     * @param {Bool} normalized
     */
    constructor(type, name, normalized = false) {
        this.type = type;
        this.name = name;
        this.size = ShaderDataTypeSize(type);
        this.offset = 0;
        this.normalized = normalized;
    }
    /**
     * Returns the number of components of the current type
     */
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
    /**
     * Constructor for the buffer layout
     * @param {BufferElement[]} elements
     */
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
    /**
     * Getter for the elements of the buffer
     */
    GetElements() {
        return this.#elements;
    }
    /**
     * Getter for the stride float
     */
    GetStride() {
        return this.#stride;
    }
}
class Buffer {
    #rendererID = 0;
    #target = 0;
    constructor(target) {
        this.#target = target;
        this.#rendererID = _WEB_GL_RENDERING_CONTEXT.createBuffer();
        _WEB_GL_RENDERING_CONTEXT.bindBuffer(this.#target, this.#rendererID);
    }

    Delete() {
        _WEB_GL_RENDERING_CONTEXT.deleteBuffer(this.#rendererID);
    }

    Bind() {
        _WEB_GL_RENDERING_CONTEXT.bindBuffer(this.#target, this.#rendererID);
    }

    Unbind() {
        _WEB_GL_RENDERING_CONTEXT.bindBuffer(this.#target, null);
    }
}

class VertexBuffer extends Buffer {
    #layout = 0;

    /**
     * Initializes the buffer and binds the data
     * @param {Float[]} vertices
     */
    constructor(vertices) {
        super(_WEB_GL_RENDERING_CONTEXT.ARRAY_BUFFER);
        _WEB_GL_RENDERING_CONTEXT.bufferData(
            _WEB_GL_RENDERING_CONTEXT.ARRAY_BUFFER,
            new Float32Array(vertices),
            _WEB_GL_RENDERING_CONTEXT.DYNAMIC_DRAW
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
class IndexBuffer extends Buffer {
    #count = 0;
    /**
     * Initializes the buffer and binds the data
     * @param {Int[]} indices
     * @param {Int} count
     */
    constructor(indices, count) {
        super(_WEB_GL_RENDERING_CONTEXT.ELEMENT_ARRAY_BUFFER);
        this.#count = count;

        _WEB_GL_RENDERING_CONTEXT.bufferData(
            _WEB_GL_RENDERING_CONTEXT.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(indices),
            _WEB_GL_RENDERING_CONTEXT.STATIC_DRAW
        );
    }

    GetCount() {
        return this.#count;
    }
}
