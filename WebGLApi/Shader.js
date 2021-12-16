//const glm = require("../lib/glm");

class Shader {
    #program = 0;
    constructor(vertexShaderText, fragmentShaderText) {
        const gl = WebGL.GetContext();
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

        gl.shaderSource(vertexShader, vertexShaderText);
        gl.shaderSource(fragmentShader, fragmentShaderText);
        this.#program = Shader.#CreateProgram(vertexShader, fragmentShader);
    }
    GetProgram() {
        return this.#program;
    }
    Bind() {
        WebGL.GetContext().useProgram(this.#program);
    }
    Unbind() {
        WebGL.GetContext().useProgram(null);
    }

    static #CreateProgram(vertexShader, fragmentShader) {
        const gl = WebGL.GetContext();
        gl.compileShader(vertexShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            console.error(
                "ERROR compiling vertex shader!",
                gl.getShaderInfoLog(vertexShader)
            );
            return;
        }

        gl.compileShader(fragmentShader);
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            console.error(
                "ERROR compiling fragment shader!",
                gl.getShaderInfoLog(fragmentShader)
            );
            return;
        }

        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(
                "ERROR linking program!",
                gl.getProgramInfoLog(program)
            );
            return;
        }
        gl.validateProgram(program);
        if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
            console.error(
                "ERROR validating program!",
                gl.getProgramInfoLog(program)
            );
            return;
        }
        return program;
    }

    UploadUniformMat4(name, matrix) {
        const location = _WEB_GL_RENDERING_CONTEXT.getUniformLocation(
            this.#program,
            name
        );
        //_WEB_GL_RENDERING_CONTEXT.uniformMatrix4fv(
        //    location,
        //    false,
        //    [2, 1, 2, 2]
        //);
    }
}
