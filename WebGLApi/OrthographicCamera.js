//const glm = require("../lib/glm");

class OrthographicCamera {
    #projectionMatrix = 0;
    #viewMatrix = 0;
    #viewProjectionMatrix = 0;

    #position = 0;
    #rotation = 0;
    /**
     * @param {Number} left
     * @param {Number} right
     * @param {Number} bottom
     * @param {Number} top
     */
    constructor(left, right, bottom, top) {
        this.#projectionMatrix = glm.ortho(left, right, bottom, top, -1.0, 1.0);
        this.#viewMatrix = glm.mat4(1);

        this.#viewProjectionMatrix = this.#projectionMatrix * this.#viewMatrix;
    }

    #RecalculateViewMatrix() {
        var transform =
            glm.translate(glm.mat4(1.0), this.#position) *
            glm.rotate(glm.mat4(1.0), this.#rotation, glm.vec3(0, 0, 1));

        this.#viewMatrix = glm.inverse(transform);
        this.#viewProjectionMatrix = this.#projectionMatrix * this.#viewMatrix;
    }

    GetPosition() {
        return this.#position;
    }
    GetRotation() {
        return this.#rotation;
    }

    SetPosition(position) {
        this.#position = position;
    }
    SetRotation(rotation) {
        this.#rotation = rotation;
    }

    GetProjectionMatrix() {
        return this.#projectionMatrix;
    }
    GetViewMatrix() {
        return this.#viewMatrix;
    }
    GetViewProjectionMatrix() {
        return this.#viewProjectionMatrix;
    }
}
