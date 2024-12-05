document.addEventListener('DOMContentLoaded', () => {

    const formDOM = document.querySelector('#formEx4');
    const statusFilterDOM = document.querySelector('#statusFilter');
    const trDOM = document.querySelectorAll('tr');

    formDOM.addEventListener('submit', (event) => {
        event.preventDefault();
        
        trDOM.forEach(tr => {
            if (statusFilterDOM.value === 'all') {
                tr.style.display = '';
            } else {
                if ((statusFilterDOM.value === 'active' && tr.classList.contains('active')) || (statusFilterDOM.value === 'inactive' && tr.classList.contains('inactive'))) {
                    tr.style.display = '';
                } else {
                    tr.style.display = 'none';
                }
            }
        });
    });
});
