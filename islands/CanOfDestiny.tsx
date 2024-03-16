import { useEffect } from 'preact/hooks';

export default function CODIsland() {
    useEffect(() => {
        const canvas = document.getElementById('bgRemovalCanvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.src = 'cod.webp';
        
        let frameIndex = 0;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            // Start rendering frames
            renderFrame();

            function renderFrame() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                for (let i = 0; i < data.length; i += 4) {
                    if (data[i] === 59 && data[i + 1] === 59 && data[i + 2] === 59) {
                        // Set alpha value to 0 for the background color
                        data[i + 3] = 0;
                    }
                }

                ctx.putImageData(imageData, 0, 0);

                // Update frame index for next frame
                frameIndex++;

                // Render next frame
                requestAnimationFrame(renderFrame);
            }
        };
    }, []);

    return (
        <div>
            <canvas id="bgRemovalCanvas"></canvas>
            {/* Add other content here which will be displayed behind the image */}
        </div>
    );
}
