// const container = document.getElementById('text-fades')

const HORIZONTAL_PLAY = 24
const VERTICAL_PLAY = 24
const HOVER_SCALE = 1.01
const VERTICAL_DISPLACEMENT = 4

// Matches all .tk-fade-hover
// Assumes the following structure object > svg #fade-1 (for 1-3)
const containers = document.getElementsByClassName('tk-fade-hover')

for (const container of containers) {
    const svgContainer = container.children[0]

    svgContainer.addEventListener('load', () => {

        const svgDocument = svgContainer.contentDocument
        const top = svgDocument.getElementById('top')
        const fade1 = svgDocument.getElementById('fade-1')
        const fade2 = svgDocument.getElementById('fade-2')
        const fade3 = svgDocument.getElementById('fade-3')

        const setTransforms = (shiftX, shiftY, scale, vertical) => {
            const topTransform = `translate(${shiftX * 0.1} ${shiftY * 0 - vertical}) scale(${scale})`
            const fade1Transform = `translate(${shiftX * 0.4} ${shiftY * 0.33 - vertical}) scale(${scale})`
            const fade2Transform = `translate(${shiftX * 0.7} ${shiftY * 0.67 - vertical}) scale(${scale})`
            const fade3Transform = `translate(${shiftX * 1} ${shiftY * 1 - vertical}) scale(${scale})`

            top.setAttribute('transform', topTransform)
            fade1.setAttribute('transform', fade1Transform)
            fade2.setAttribute('transform', fade2Transform)
            fade3.setAttribute('transform', fade3Transform)
        }

        container.addEventListener('mousemove', (event) => {
            const rect = svgContainer.getBoundingClientRect()

            const percentX = (event.clientX - rect.left) / rect.width
            const percentY = (event.clientY - rect.top) / rect.height

            const shiftX = percentX * HORIZONTAL_PLAY - (HORIZONTAL_PLAY / 2)
            const shiftY = percentY * VERTICAL_PLAY

            setTransforms(shiftX, shiftY, HOVER_SCALE, VERTICAL_DISPLACEMENT)
        })

        container.addEventListener('mouseleave', () => {
            setTransforms(0, 16, 1, 0)
        })

        setTransforms(0, 16, 1, 0)

    })
}
