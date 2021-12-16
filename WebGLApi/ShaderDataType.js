const ShaderDataType = {
    None: 0,
    Float: 1,
    Float2: 2,
    Float3: 3,
    Float4: 4,
    Int: 5,
    Int2: 6,
    Int3: 7,
    Int4: 8,
    Mat3: 9,
    Mat4: 10,
    Bool: 11,
};
//make static
var ShaderDataTypeSize = function (type) {
    switch (type) {
        case ShaderDataType.Float:
            return 4;
        case ShaderDataType.Float2:
            return 4 * 2;
        case ShaderDataType.Float3:
            return 4 * 3;
        case ShaderDataType.Float4:
            return 4 * 4;
        case ShaderDataType.Mat3:
            return 4 * 3 * 3;
        case ShaderDataType.Mat4:
            return 4 * 4 * 4;
        case ShaderDataType.Int:
            return 4;
        case ShaderDataType.Int2:
            return 4 * 2;
        case ShaderDataType.Int3:
            return 4 * 3;
        case ShaderDataType.Int4:
            return 4 * 4;
        case ShaderDataType.Bool:
            return 1;
    }
};
var ShaderDataTypeToWebGLBaseType = function (type) {
    switch (type) {
        case ShaderDataType.Float:
            return _WEB_GL_RENDERING_CONTEXT.FLOAT;
        case ShaderDataType.Float2:
            return _WEB_GL_RENDERING_CONTEXT.FLOAT;
        case ShaderDataType.Float3:
            return _WEB_GL_RENDERING_CONTEXT.FLOAT;
        case ShaderDataType.Float4:
            return _WEB_GL_RENDERING_CONTEXT.FLOAT;
        case ShaderDataType.Mat3:
            return _WEB_GL_RENDERING_CONTEXT.FLOAT;
        case ShaderDataType.Mat4:
            return _WEB_GL_RENDERING_CONTEXT.FLOAT;
        case ShaderDataType.Int:
            return _WEB_GL_RENDERING_CONTEXT.INT;
        case ShaderDataType.Int2:
            return _WEB_GL_RENDERING_CONTEXT.INT;
        case ShaderDataType.Int3:
            return _WEB_GL_RENDERING_CONTEXT.INT;
        case ShaderDataType.Int4:
            return _WEB_GL_RENDERING_CONTEXT.INT;
        case ShaderDataType.Bool:
            return _WEB_GL_RENDERING_CONTEXT.BOOL;
    }
};
