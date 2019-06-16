let modalWindow = (content) => {
    let modalBlock = document.createElement('div');
    modalBlock.className = 'modalBlock';
    let modalContent = document.createElement('div');
    modalContent.className = 'modalContent';
    let modalCloseBtn = document.createElement('button');
    modalCloseBtn.className = 'modalCloseBtn';
    modalContent.appendChild(modalCloseBtn);
    modalBlock.appendChild(modalContent);
    modalContent.appendChild(content);
    document.body.appendChild(modalBlock);
    modalBlock.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('modalCloseBtn')) {
            document.body.lastChild.remove();
        }
    })
}
export {
    modalWindow
};