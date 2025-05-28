varying vec2 vUv;
uniform sampler2D sdfTexture;
uniform float uTime;

// Function to sample the SDF texture and determine if a point is inside the shape
float sdf(vec2 p) {
    return texture2D(sdfTexture, p).a; // Assuming SDF is in alpha channel
}

void main() {
    vec2 uv = vUv; // Normalized coordinates (0 to 1)

    float distance = sdf(uv);

    // For now, just visualize the SDF alpha value
    // Pixels inside the shape (positive SDF) will be white, outside will be black/transparent
    // We'll use a threshold to make it a sharp outline
    float alpha = smoothstep(0.49, 0.51, distance);

    if (alpha < 0.1) discard; // Make fully transparent areas actually discard

    vec4 sdfColor = texture2D(sdfTexture, uv);
    
    // Output raw SDF texture color for debugging
    // If SDF is in alpha, R, G, B might be black or white
    // gl_FragColor = sdfColor; 

    // Let's output only the alpha channel as grayscale to see the shape
    gl_FragColor = vec4(sdfColor.aaa, 1.0); // Output alpha as grayscale, fully opaque
} 