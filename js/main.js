const setTotalPrice = () => {
    let sumResult = document.querySelector('.sum');
    let sumItems = document.querySelectorAll('.sum-item');

    let sumTotal = 0;

    sumItems.forEach((e) => {
        sumTotal += Number(e.innerText);
    });

    sumResult.innerText = sumTotal;
};

const setBackground = () => {
    let rows = document.querySelectorAll('.table__body .tr');

    rows.forEach((e) => {
        e.addEventListener('mouseover', (evt) => {
            document.body.style.backgroundColor = 'lightblue';
        });

        e.addEventListener('mouseout', (evt) => {
            document.body.style.backgroundColor = 'transparent';
        });
    });
};

const setPriceItem = () => {
    let sumItems = document.querySelectorAll('.sum-item');

    sumItems.forEach((e) => {
        let countNum = e.closest('.tr').querySelector('.input-item--count').value;
        let valueNum = e.closest('.tr').querySelector('.input-item--value').value;

        e.innerText = countNum * valueNum;
    });
};

const handleChangeField = () => {
    let items = document.querySelectorAll('.input-item');

    items.forEach((e) => {
        e.addEventListener('input', (evt) => {
            setPriceItem();
            setTotalPrice();
        });
    });
};

const handleSortItems = () => {
    let list = document.querySelectorAll('.sum-item');
    let sortBtn = document.querySelector('.sort-btn');
    let sortBy = true;

    sortBtn.addEventListener('click', () => {
        if (sortBy) {
            [...list]
                .sort((a, b) => (+a.innerText < +b.innerText ? 1 : -1))
                .forEach((e) => {
                    let row = e.closest('.tr');
                    e.closest('.table__body').prepend(row);
                });
            sortBtn.innerText = 'Общая стоимость ▲';
            sortBy = !sortBy;
        } else {
            [...list]
                .sort((a, b) => (+a.innerText > +b.innerText ? 1 : -1))
                .forEach((e) => {
                    let row = e.closest('.tr');
                    e.closest('.table__body').prepend(row);
                });
            sortBtn.innerText = 'Общая стоимость ▼';
            sortBy = !sortBy;
        }
    });
};

setPriceItem();
setTotalPrice();
handleChangeField();
setBackground();
handleSortItems();
