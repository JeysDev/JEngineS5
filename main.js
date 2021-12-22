var vertexShaderText = [
    "precision mediump float;",
    "attribute vec3 vertPosition;",
    "attribute vec4 vertColor;",

    "uniform mat4 viewProjection;",

    "varying vec4 fragColor;",
    "void main()",
    "{",
    "  fragColor = vertColor;",
    "  gl_Position = vec4(vertPosition, 1.0);",
    "}",
].join("\n");

var fragmentShaderText = [
    "precision mediump float;",
    "varying vec4 fragColor;",
    "void main()",
    "{",
    "  gl_FragColor = fragColor;",
    "}",
].join("\n");
var nVertexShaderText = [
    "precision mediump float;",
    "attribute vec3 vertPosition;",

    "uniform mat4 viewProjection;",

    "void main()",
    "{",
    "  gl_Position =  vec4(vertPosition, 1.0);",
    "}",
].join("\n");

var nFragmentShaderText = [
    "precision mediump float;",

    "void main()",
    "{",
    "  gl_FragColor = vec4(0.2,0.2,1,1);",
    "}",
].join("\n");

var Init = function () {
    WebGL.Init("canvas");

    /** @type {WebGLRenderingContext} */
    const gl = WebGL.GetContext();
    console.log(gl.getParameter(gl.SHADING_LANGUAGE_VERSION));

    // var cam = new OrthographicCamera(-1, 1, -1, 1);

    RenderCommand.SetClearColor(0.75, 0.85, 0.8, 1);
    var vao = new VertexArray();

    var vertices = [
        -0.5, -0.5, 0.0, 1, 0, 1, 1, 0.5, -0.5, 0.0, 0, 1, 1, 1, 0.0, 0.5, 0.0,
        1, 1, 0, 1,
    ];

    var vbo = new VertexBuffer(vertices);

    var layout = new BufferLayout([
        new BufferElement(ShaderDataType.Float3, "vertPosition"),
        new BufferElement(ShaderDataType.Float4, "vertColor"),
    ]);
    vbo.SetLayout(layout);
    vao.AddVertexBuffer(vbo);

    var indices = [0, 1, 2];
    var ibo = new IndexBuffer(indices, 3);
    vao.SetIndexBuffer(ibo);

    var shader = new Shader(vertexShaderText, fragmentShaderText);

    var nVa = new VertexArray();

    var nVertices = [
        -0.75, -0.75, 0.0, 0.75, -0.75, 0.0, 0.75, 0.75, 0.0, -0.75, 0.75, 0.0,
    ];

    var nVb = new VertexBuffer(nVertices);

    var nLayout = new BufferLayout([
        new BufferElement(ShaderDataType.Float3, "vertPosition"),
    ]);
    nVb.SetLayout(nLayout);
    nVa.AddVertexBuffer(nVb);

    var nIndices = [0, 1, 2, 2, 3, 0];
    var nIb = new IndexBuffer(nIndices, 6);
    nVa.SetIndexBuffer(nIb);

    var nShader = new Shader(nVertexShaderText, nFragmentShaderText);

    function loop() {
        RenderCommand.Clear();
        Renderer.BeginScene();

        nShader.Bind();
        //nShader.UploadUniformMat4(
        //    "viewProjection",
        //    cam.GetViewProjectionMatrix()
        //);
        Renderer.Submit(nVa);

        shader.Bind();
        //shader.UploadUniformMat4(
        //    "viewProjection",
        //    cam.GetViewProjectionMatrix()
        //);
        Renderer.Submit(vao);

        Renderer.EndScene();

        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
};

window.addEventListener("DOMContentLoaded", Init);
