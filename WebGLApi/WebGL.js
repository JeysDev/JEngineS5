class WebGL {
    static #context = 0;
    /**
     * Initializes the WebGL context
     * @param {String} canvas
     * @param {String} WebGLContext
     */
    static Init(canvas, WebGLContext = "webgl2") {
        /** @type {CanvasRenderingContext2D} */
        var canvas = document.getElementById(canvas);
        var glCtx = canvas.getContext(WebGLContext);

        if (!glCtx) {
            console.log(
                "WebGL not supported, falling back on experimental-webgl"
            );
            glCtx = canvas.getContext("experimental-webgl");
        }

        if (!glCtx) {
            alert("Your browser does not support WebGL");
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        glCtx.viewport(0, 0, canvas.width, canvas.height);

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            glCtx.viewport(0, 0, canvas.width, canvas.height);
        });
        WebGL.#context = glCtx;
        _WEB_GL_RENDERING_CONTEXT = WebGL.#context;
    }

    /**
     * Public getter for the WebGL context (use not recommended)
     */
    static GetContext() {
        return WebGL.#context;
    }
}
/** @type {WebGL2RenderingContext} */
var _WEB_GL_RENDERING_CONTEXT = WebGL.GetContext();
