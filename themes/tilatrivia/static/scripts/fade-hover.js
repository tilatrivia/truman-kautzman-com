// const container = document.getElementById('text-fades')

const HORIZONTAL_PLAY = 8
const VERTICAL_PLAY = 6

const containers = document.getElementsByClassName('fade-hover')

for (const container of containers) {
    const svgContainer = container.children[0]

    svgContainer.addEventListener('load', () => {

        const svgDocument = svgContainer.contentDocument
        const fade1 = svgDocument.getElementById('fade-1')
        const fade2 = svgDocument.getElementById('fade-2')
        const fade3 = svgDocument.getElementById('fade-3')

        setTransforms(fade1, fade2, fade3, 0, 4)

        container.addEventListener('mousemove', (event) => {
            const rect = svgContainer.getBoundingClientRect()

            const percentX = (event.clientX - rect.left) / rect.width
            const percentY = (event.clientY - rect.top) / rect.height

            const shiftX = percentX * HORIZONTAL_PLAY - (HORIZONTAL_PLAY / 2)
            const shiftY = percentY * VERTICAL_PLAY

            setTransforms(fade1, fade2, fade3, shiftX, shiftY)
        })
    
        container.addEventListener('mouseleave', () => {
            setTransforms(fade1, fade2, fade3, 0, 4)
        })
    })

    const setTransforms = function(fade1, fade2, fade3, shiftX, shiftY) {
        fade1.setAttribute('transform', `translate(${shiftX} ${shiftY})`)
        fade2.setAttribute('transform', `translate(${shiftX * 2} ${shiftY * 2})`)
        fade3.setAttribute('transform', `translate(${shiftX * 3} ${shiftY * 3})`)
    }

}
