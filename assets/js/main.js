document.getElementById('burger-btn-open').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.add('--show');
});
document.getElementById('burger-btn-hide').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.remove('--show');
});
