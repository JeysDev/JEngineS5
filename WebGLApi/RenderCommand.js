class RenderCommand{
    /**
 * Sets the color to clear the screen
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number} a
 */
    static SetClearColor(r, g, b, a = 1){
        _WEB_GL_RENDERING_CONTEXT.clearColor(r,g,b,a);
    }
    static Clear(
        GL_CLEAR_PARAM = WebGL2RenderingContext.COLOR_BUFFER_BIT |
            WebGL2RenderingContext.DEPTH_BUFFER_BIT
    ) {
        _WEB_GL_RENDERING_CONTEXT.clear(GL_CLEAR_PARAM);
    }
    static DrawIndexed(vertexArray){
        _WEB_GL_RENDERING_CONTEXT.drawElements(
            _WEB_GL_RENDERING_CONTEXT.TRIANGLES,
            vertexArray.GetIndexBuffer().GetCount(),
            _WEB_GL_RENDERING_CONTEXT.UNSIGNED_SHORT,
            0
        );
    }
}


/**
* My function description
* @param {Number} r
* @param {Number} g
* @param {Number} b
* @param {Number} a
* @example
* // returns "fooBar fooBar"
* myFunction('foo', 'Bar', 2)
* @returns {String}
*/