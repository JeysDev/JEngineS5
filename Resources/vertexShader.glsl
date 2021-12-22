
precision mediump float;
attribute vec3 vertPosition;
attribute vec4 vertColor;
uniform mat4 viewProjection;
varying vec4 fragColor;
void main()
{
  fragColor = vertColor;
  gl_Position = vec4(vertPosition, 1.0);
}