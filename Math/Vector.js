class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    GetPlainArray() {
        return [this.x, this.y];
    }
    Add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    Substract(vector) {
        this.y -= vector.y;
        this.x -= vector.x;
    }
    Multiply(vector) {
        this.y *= vector.y;
        this.x *= vector.x;
    }
    Divide(vector) {
        this.y /= vector.y;
        this.x /= vector.x;
    }

    static Add(vector1, vector2) {
        return new Vector2((vector1.x += vector2.x), (vector1.y += vector2.y));
    }
    static Substract(vector1, vector2) {
        return new Vector2((vector1.x -= vector2.x), (vector1.y -= vector2.y));
    }
    static Multiply(vector1, vector2) {
        return new Vector2((vector1.x *= vector2.x), (vector1.y *= vector2.y));
    }
    static Divide(vector1, vector2) {
        return new Vector2((vector1.x /= vector2.x), (vector1.y /= vector2.y));
    }
}

class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    GetPlainArray() {
        return [this.x, this.y, this.z];
    }

    static Zero() {
        return new Vector3(0, 0, 0);
    }
    static One() {
        return new Vector3(1, 1, 1);
    }

    Add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
    }
    Substract(vector) {
        this.y -= vector.y;
        this.x -= vector.x;
        this.z -= vector.z;
    }
    Multiply(vector) {
        this.y *= vector.y;
        this.x *= vector.x;
        this.z *= vector.z;
    }
    Divide(vector) {
        this.y /= vector.y;
        this.x /= vector.x;
        this.z *= vector.z;
    }

    static Add(vector1, vector2) {
        return new Vector3(
            (vector1.x += vector2.x),
            (vector1.y += vector2.y),
            (vector1.z += vector2.z)
        );
    }
    static Substract(vector1, vector2) {
        return new Vector3(
            (vector1.x -= vector2.x),
            (vector1.y -= vector2.y),
            (vector1.z -= vector2.z)
        );
    }
    static Multiply(vector1, vector2) {
        return new Vector3(
            (vector1.x *= vector2.x),
            (vector1.y *= vector2.y),
            (vector1.z *= vector2.z)
        );
    }
    static Divide(vector1, vector2) {
        return new Vector3(
            (vector1.x /= vector2.x),
            (vector1.y /= vector2.y),
            (vector1.z /= vector2.z)
        );
    }

    Lenght() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    Normalize() {
        const lenght = this.Lenght();
        this.x = this.x / lenght;
        this.y = this.y / lenght;
        this.z = this.z / lenght;
    }
    Normalized() {
        const lenght = this.Lenght();
        return new Vector3(this.x / lenght, this.y / lenght, this.z / lenght);
    }
}
