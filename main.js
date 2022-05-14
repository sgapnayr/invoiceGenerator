const buttons = document.querySelectorAll('button')
const transactionsDisp = document.querySelector('#transactions')
const totalDisp = document.querySelector('#total')

const MOW_PRICE = 10
const TRIM_PRICE = 20
const WASH_PRICE = 30

let total = []

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === 'Mow - $10') {
            total.push(MOW_PRICE)
        } else if (e.target.innerText === 'Trimming - $20') {
            total.push(TRIM_PRICE)
        } else if (e.target.innerText === 'Wash - $30') {
            total.push(WASH_PRICE)
        }

        addItem()

        function addItem() {
            const itemDiv = document.createElement('div')
            itemDiv.classList.add('itemDiv')

            const listItem = document.createElement('li')
            listItem.innerText = e.target.innerText
            itemDiv.append(listItem)

            const removeButton = document.createElement('btn')
            removeButton.innerText = 'Remove'
            removeButton.classList.add('removeButton')
            itemDiv.append(removeButton)

            removeButton.addEventListener('click', () => {
                transactionsDisp.removeChild(itemDiv)
                for (let i = 0; i <= total.length; i++) {
                    if (total[i] === listItem) {
                        total.splice(i, 1);
                    }
                }
                let newSum = sum - parseFloat(listItem.value)
                totalDisp.innerText = newSum
            })

            transactionsDisp.append(itemDiv)

        }

        const sum = total.reduce((a, b) => a + b)
        totalDisp.innerText = '$' + sum

    })
})


